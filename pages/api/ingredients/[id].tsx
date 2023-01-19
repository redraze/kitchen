import { ingredients } from 'data.js';

export default function handler({ query: { id } }: any, res: any) {
    const filtered = ingredients.filter(ingredients => ingredients.id === id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res
            .status(404)
            .json({ 
                message: `Ingredient with the id of ${ id } not found` 
            })
    };
};
