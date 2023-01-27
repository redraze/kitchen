import RecipeModel from 'models/Recipe';

export default async function handler({ query: { id } }: any, res: any) {
    try {
        const recipe = await RecipeModel.findById(id);
        if (!recipe) {
            return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: recipe })
    } catch (error) {
        res.status(400).json({ success: false })
    }
};
