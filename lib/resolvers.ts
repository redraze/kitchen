import RecipeModel from 'models/Recipe';
import IngredientModel from 'models/Ingredient';

const resolvers = {
  Query: {
    // Get all recipes
    recipes() {
      return RecipeModel.find();
    },
    // Get recipe by ID
    recipe(parent: undefined, args: any) {
      return RecipeModel.findById(args.id);
    },
    // Get all ingredients
    ingredients() {
      return IngredientModel.find();
    },
    // Get ingredient by ID
    ingredient(parent: undefined, args: any) {
      return IngredientModel.findById(args.id);
    }
  },
};

export default resolvers;
