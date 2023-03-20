import IngredientModel from 'models/Ingredient';
import dbConnect from 'config/dbConnect';

dbConnect();

export default async function handler({ query: { id } }: any, res: any) {
    try {
        const ingredient = await IngredientModel.findById(id);
        if (!ingredient) {
            return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: ingredient })
    } catch (error) {
        res.status(400).json({ success: false })
    }
};
