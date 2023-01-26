import RecipeModel from 'models/Recipe';
import IngredientModel from 'models/Ingredient';

const resolvers = {
  Query: {
    recipes() {
      return RecipeModel.find();
    },
    recipe(parent: undefined, args: any) {
      return RecipeModel.findById(args.id);
    },
    ingredients() {
      return IngredientModel.find();
    },
    ingredient(parent: undefined, args: any) {
      return IngredientModel.findById(args.id);
    }
  },
  Mutation: {
    addRecipe(parent: undefined, args: any) {
      const recipe = new RecipeModel({
        name: args.name,
        description: args.description,
        meal: args.meal
      });
      return recipe.save();
    },
    editRecipe(parent: undefined, args: any) {
      return RecipeModel.findByIdAndUpdate(
        args.id, 
        args, 
        { returnDocument: 'after' }
      );
    },
    deleteRecipe(parent: undefined, args: any) {
      return RecipeModel.findByIdAndRemove(args.id);
    },
    addIngredient(parent: undefined, args: any) {
      const ingredient = new IngredientModel({
        name: args.name,
        description: args.description,
        meal: args.meal
      });
      return ingredient.save();
    },
    editIngredient(parent: undefined, args: any) {
      return IngredientModel.findByIdAndUpdate(
        args.id, 
        args, 
        { returnDocument: 'after' }
      );
    },
    deleteIngredient(parent: undefined, args: any) {
      return IngredientModel.findByIdAndRemove(args.id);
    }
  },
};

export default resolvers
