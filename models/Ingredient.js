import { Schema, model } from 'mongoose';

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

export default model('Ingredient', IngredientSchema);
