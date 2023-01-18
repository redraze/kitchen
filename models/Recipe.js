import { Schema, model } from 'mongoose';

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this recipe.'],
        maxLength: [60, 'Name cannot be more than 60 characters.']
    },
    description: {
        type: String
    },
    meal: {
        type: String
    }
});

export default model('Recipe', RecipeSchema);
