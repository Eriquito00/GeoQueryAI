import { Request, Response } from 'express';
import { GeoQueryAIService } from '../services/GeoQueryAI.service';

let geoQueryService: GeoQueryAIService;

export function setGeoQueryAIService(
    service: GeoQueryAIService
) {
    geoQueryService = service;
}

export async function sendAIQuery(req: Request, res: Response) {
    const query = req.body.query;

    if (typeof query !== 'string' || query.trim() === '') {
        return res.status(400).json({
            message: 'Invalid query.'
        });
    }

    try {
        const result = await geoQueryService.processQuery(query);

        res.status(200).json({
            message: 'Query processed successfully.',
            locations: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error processing query.',
            error:
                error instanceof Error
                    ? error.message
                    : 'Unknown error'
        });
    }
}
