import { Schema, model, models } from 'mongoose';

const IngredientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this ingredient.'],
        maxLength: [60, 'Name cannot be more than 60 characters.']
    },
    refrigerated: {
        type: Boolean
    }
});

export default models.Ingredient || model('Ingredient', RecipeSchema);
