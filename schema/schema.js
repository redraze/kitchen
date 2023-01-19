import { Recipe } from 'models/Recipe';
import { Ingredient } from 'models/Ingredient';

import { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLList,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql';

// Recipe type
const RecipeType = new GraphQLObjectType({
    name: 'Recipe',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        meal: { type: GraphQLString }
    })
});

// Ingredient type
const IngredientType = new GraphQLObjectType({
    name: 'Ingredient',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        refrigerated: { type: GraphQLBoolean }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // Get all recipes
        recipes: { 
            type: new GraphQLList(RecipeType),
            resolve(parent, args) {
                return Recipe.find();
            },
         },
        // Get recipe by ID
        recipe: {
            type: RecipeType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Recipe.findById(args.id);
            }
        },
        // Get all ingredients
        ingredients: {
            type: new GraphQLList(IngredientType),
            resolve(parent, args) {
                return Ingredient.find();
            }
        },
        // Get ingredient by ID
        ingredient: {
            type: IngredientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Ingredient.findById(args.id);
            }
        }
    }
});

// Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addRecipe: {
            type: RecipeType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                meal: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (parent, args) => {
                const recipe = new Recipe({
                    name: args.name,
                    description: args.description,
                    meal: args.meal,
                });
                return recipe.save();
            }
        },
        deleteRecipe: {
            type: RecipeType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: (parent, args) => {
                return Recipe.findByIdAndRemove(args.id);
            }
        },
        editRecipe: {
            type: RecipeType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                meal: { type: GraphQLString }
            },
            resolve: (parent, args) => {
                return Recipe.findByIdAndUpdate(args.id, args, { returnDocument: 'after' });
            }
        },
        addIngredient: {
            type: IngredientType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                refrigerated: { type: new GraphQLNonNull(GraphQLBoolean) }
            },
            resolve: (parent,args) => {
                // prevent duplicates
                // if (Ingredient.find(args.name)) {
                //     custom error message?
                //     return;
                const ingredient = new Ingredient({
                    name: args.name,
                    refrigerated: args.refrigerated
                });
                return ingredient.save();
            }
        },
        deleteIngredient: {
            type: IngredientType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: (parent, args) => {
                return Ingredient.findByIdAndRemove(args.id);
            }
        }
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation
});
