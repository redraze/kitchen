import type { stateType } from "lib/commonTypes";
import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_RECIPE } from "lib/queries";
import css from 'styles/HUD/Recipes/RecipeData.module.scss';

type RecipeDataProps = {
    recipeDataVisibilityState: stateType<boolean>
    recipeResultsVisibilityState: stateType<boolean>
    displayRecipe: string
};

export default function RecipeData(
    {
        recipeDataVisibilityState,
        recipeResultsVisibilityState,
        displayRecipe
    }: RecipeDataProps
) {
    const [getRecipe, { error, data, loading }] = useLazyQuery(GET_RECIPE);

    useEffect(() => {
        if (displayRecipe && displayRecipe !== '') {
            try {
                getRecipe({ 
                    variables: { 
                        id: displayRecipe
                    },
                    onError: (error) => {
                        console.log('type 0 error', JSON.stringify(error));
                    },
                    // onCompleted: (data) => {
                        // console.log('success', data)
                    // }
                });
            } catch {
                console.log('type 1 error', error);
            };
        }
    }, [displayRecipe]);

    return (
        <div
            style={ recipeResultsVisibilityState ? {visibility: 'visible'} : {visibility: 'hidden'} }
            className={ css.data }
        >
            {/* { data ? data.recipe.info.name : '' } */}
        </div>
    );
};
