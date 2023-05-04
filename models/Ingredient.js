import { Schema, model, models } from 'mongoose';

const IngredientSchema = new Schema({
    info: {
        name: String,
        refrigerated: Boolean,
        containerType: String
    },
    recipes: [Schema.Types.ObjectId]
});

export default models.IngredientModel || model('IngredientModel', IngredientSchema, 'ingredients');
