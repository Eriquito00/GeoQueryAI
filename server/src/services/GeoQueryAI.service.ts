import fs from 'fs';
import path from 'path';
import { OpenAIClient } from '../infra/ia/openai.client';

export class GeoQueryAIService {
    private AI_RULES: string = '';

    async processQuery(userQuery: string): Promise<JSON> {
        const openAIClient = new OpenAIClient();

        this.AI_RULES = fs.readFileSync(
            path.join(__dirname, '../resources/AI_RULES.txt'),
            'utf-8'
        );

        const response = await openAIClient.query(
            userQuery,
            this.AI_RULES
        );

        return JSON.parse(response);
    }
}
