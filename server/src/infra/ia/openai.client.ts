import OpenAI from 'openai';

export class OpenAIClient {
    private client: OpenAI;

    constructor() {
        this.client = new OpenAI({
            baseURL: 'https://models.inference.ai.azure.com',
            apiKey: process.env.OPENAI_API_KEY
        });
    }

    async query(
        userQuery: string,
        systemPrompt: string
    ): Promise<string> {
        const response =
            await this.client.chat.completions.create({
                model: 'gpt-4.1',
                messages: [
                    {
                        role: 'system',
                        content: systemPrompt
                    },
                    {
                        role: 'user',
                        content: userQuery
                    }
                ],
                max_tokens: 1024
            });

        return response.choices[0].message.content || '';
    }
}
