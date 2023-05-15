import { Schema, models, model } from 'mongoose';

const RecipeSchema = new Schema({
    info: {
        name: String,
        description: String,
        instructions: [String],
        totalIngredients: Number
    },
    filters: {
        meal: String,
        cuisine: String
    },
    ingredients: [{
        id: Schema.Types.ObjectId,
        name: String,
        amount: String
    }]
});

export default models.RecipeModel || model('RecipeModel', RecipeSchema, 'recipes');
