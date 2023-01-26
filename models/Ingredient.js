import { Schema, model, models } from 'mongoose';

const IngredientSchema = new Schema({
    name: {
        type: String
    },
    refrigerated: {
        type: Boolean
    }
});

export default models.IngredientModel || model('IngredientModel', IngredientSchema, 'ingredients');
