import { recipes } from 'data.js';

export default function handler({ query: { id } }: any, res: any) {
    const filtered = recipes.filter(recipes => recipes.id === id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res
            .status(404)
            .json({ 
                message: `Recipe with the id of ${ id } not found` 
            })
    };
};
