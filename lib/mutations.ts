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
                totalIngredients
            }
            filters {
                meal
                cuisine
            }
        }
    }
`;

export { RECIPE_SEARCH }