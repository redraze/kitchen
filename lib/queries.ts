import { gql } from '@apollo/client';

const GET_RECIPE = gql`
    query getRecipe($id: String!) {
        recipe(id: $id) {
            id
            info {
                name
                description
                instructions
                totalIngredients
            }
            filters {
                meal
                cuisine
            }
            ingredients {
                id
                name
                amount
            }
        }
    }
`;

const GET_RECIPES = gql`
    query getRecipes {
        recipes {
            id
            info {
                name
                description
                instructions
                totalIngredients
            }
            filters {
                meal
                cuisine
            }
            ingredients {
                id
                name
                amount
            }
        }
    }
`;

const GET_INGREDIENT = gql`
    query getIngredient($id: String!) {
        ingredient(id: $id) {
            id
            info {
                name
                refrigerated
                containerType
            }
            recipes
        }
    }
`;

const GET_INGREDIENTS = gql`
    query getIngredients {
        ingredients {
            id
            info {
                name
                refrigerated
                containerType
            }
            recipes
        }
    }
`;

export { GET_INGREDIENTS, GET_INGREDIENT, GET_RECIPES, GET_RECIPE };
