import IngredientModel from 'models/Ingredient';

export default async function handler(_req: any, res: any) {
    try {
        const ingredients = await IngredientModel.find({})
        return res.status(200).json({ success: true, data: ingredients})
    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, message: error})
    }
};
