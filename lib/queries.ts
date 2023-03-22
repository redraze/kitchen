import { gql } from '@apollo/client';

const GET_INGREDIENTS = gql`
    query getIngredients {
        ingredients {
            id
            name
            refrigerated
        }
    }
`;

const GET_RECIPES = gql`
    query getRecipes {
        recipes {
            id
            name
            description
            meal
        }
    }
`;

const GET_RECIPE = gql`
    query getRecipe($id: ID!) {
        recipe(id: $id) {
            id
            name
            description
            meal
        }
    }

`;

export { GET_INGREDIENTS, GET_RECIPES, GET_RECIPE };
