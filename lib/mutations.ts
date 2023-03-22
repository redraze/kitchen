import { gql } from '@apollo/client';

const DELETE_INGREDIENT = gql`
    mutation deleteIngredient($id: ID!) {
        deleteIngredient(id: $id) {
            id
            name
            refrigerated
        }
    }
`;

const ADD_INGREDIENT = gql`
    mutation addIngredient($name: String!, $refrigerated: Boolean!) {
        addIngredient(name: $name, refrigerated: $refrigerated) {
            id
            name
            refrigerated
        }
    }
`;

const DELETE_RECIPE = gql`
    mutation deleteRecipe($id: ID!) {
        deleteRecipe(id: $id) {
            id
            name
            description
            meal
        }
    }
`;

const ADD_RECIPE = gql`
    mutation addRecipe($name: String!, $description: String!, $meal: String!) {
        addRecipe(name: $name, description: $description, meal: $meal) {
            id
            name
            description
            meal
        }
    }
`;

const EDIT_RECIPE = gql`
    mutation editRecipe($id: ID!, $name: String!, $description: String!, $meal: String!){
        editRecipe(id: $id, name: $name, description: $description, meal: $meal) {
            id
            name
            description
            meal
        }
    }
`;

export { DELETE_INGREDIENT, ADD_INGREDIENT, DELETE_RECIPE, ADD_RECIPE, EDIT_RECIPE };
