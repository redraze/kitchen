import RecipeModel from 'models/Recipe';
import IngredientModel from 'models/Ingredient';
import { Types } from 'mongoose';

const resolvers = {
  Query: {
    // Get all recipes
    recipes() {
      return RecipeModel.find();
    },
    // Get recipe by ID
    recipe(_parent: undefined, args: any) {
      return RecipeModel.findById(args.id);
    },
    // Get all ingredients
    ingredients() {
      return IngredientModel.find();
    },
    // Get ingredient by ID
    ingredient(_parent: undefined, args: any) {
      return IngredientModel.findById(args.id);
    }
  },
  Mutation: {
    // Get recipes by multiple ID's
    recipeSearch(_parent: undefined, args: any) {
      return RecipeModel.find({
        '_id': { $in:
          args.recipeData.map((recipe: any) => {
            return new Types.ObjectId(recipe.id)
          })
        }
      })
    }
  }
};

export default resolvers;
