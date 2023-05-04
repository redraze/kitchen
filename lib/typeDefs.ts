import { gql } from '@apollo/client';

const typeDefs = gql`
  type recipeInfoOutput {
    name: String
    description: String
    instructions: [String]
  }
  type recipeFiltersOutput {
    meal: String
    cuisine: String
  }
  type recipeIngredientsOutput {
    id: String
    name: String
    amount: String
  }
  type RecipeTypeOutput {
    id: String!
    info: recipeInfoOutput
    filters: recipeFiltersOutput
    ingredients: [recipeIngredientsOutput]
  }
  type ingredientInfoOutput {
    name: String
    refrigerated: Boolean
    containerType: String
  }
  type IngredientTypeOutput {
    id: String
    info: ingredientInfoOutput
    recipes: [String]
  }
  type Query {
    recipe(id: String!): RecipeTypeOutput
    recipes: [RecipeTypeOutput]
    ingredient(id: String!): IngredientTypeOutput
    ingredients: [IngredientTypeOutput]
  }
`

export default typeDefs
