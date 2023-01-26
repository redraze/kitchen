import { Schema, models, model } from 'mongoose';

const RecipeSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    meal: {
        type: String
    }
});

export default models.RecipeModel || model('RecipeModel', RecipeSchema, 'recipes');
