import gql from 'graphql-tag'

const typeDefs = gql(`
  type RecipeType {
    id: ID!
    name: String!
    description: String!
    meal: String!
  }
  type IngredientType {
    id: ID!
    name: String!
    refrigerated: Boolean!
  }
  type Query {
    recipe(id: ID!): RecipeType!
    recipes: [RecipeType!]!
    ingredient(id: ID!): IngredientType!
    ingredients: [IngredientType!]!
  }
  type Mutation {
    addRecipe(
        name: String!, 
        description: String!, 
        meal: String!
        ): RecipeType!
    editRecipe(
        name: String
        description: String
        meal: String
    ): RecipeType!
    deleteRecipe(id: ID!): ID!
    addIngredient(
        name: String!
        refrigerated: Boolean!
    ): IngredientType!
    editIngredient(
        name: String
        refrigerated: Boolean
    ): IngredientType!
    deleteIngredient(id: ID!): ID!
  }
`)

export default typeDefs
