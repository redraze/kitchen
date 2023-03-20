import RecipeModel from 'models/Recipe';
import dbConnect from 'config/dbConnect';

dbConnect();

export default async function handler(_req: any, res: any) {
    try {
        const recipes = await RecipeModel.find({})
        return res.status(200).json({ success: true, data: recipes})
    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, message: error})
    }
};
