import { gql } from '@apollo/client';

const RECIPE_SEARCH = gql`
    mutation recipeSearch(
        $recipeData: [recipeDataInput]
    ) {
        recipeSearch(
            recipeData: $recipeData
        ) {
            id
            info {
                name
                description
            }
            filters {
                meal
                cuisine
            }
            cookability
        }
    }
`;

export { RECIPE_SEARCH }