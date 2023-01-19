import { recipes } from 'data.js';

export default function handler(req: any, res: any) {
    res.status(200).json(recipes);
};
