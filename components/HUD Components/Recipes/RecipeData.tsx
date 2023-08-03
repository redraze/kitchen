import type { clientDataType, stateType } from "lib/commonTypes";
import type { RecipeTypeOutput, recipeIngredientsOutput } from "lib/typeDefsExports";
import { type LazyQueryResultTuple, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_RECIPE } from "lib/queries";
import css from 'styles/HUD/Recipes/RecipeData.module.scss';
import Spinner from "./Spinner";

type RecipeDataProps = {
    clientRecipeData: clientDataType
    recipeDataVisibilityState: stateType<boolean>
    recipeResultsVisibilityState: stateType<boolean>
    displayRecipe: string
};

export default function RecipeData(
    {
        clientRecipeData,
        recipeDataVisibilityState,
        recipeResultsVisibilityState,
        displayRecipe
    }: RecipeDataProps
) {
    type lazyQueryType = LazyQueryResultTuple<{ recipe: RecipeTypeOutput }, { id: string }>;
    const [getRecipe, { error, data, loading }]: lazyQueryType = useLazyQuery(GET_RECIPE);

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
                    //     console.log('success', data)
                    // }
                });
            } catch {
                console.log('type 1 error', error);
            };
        }
    }, [displayRecipe]);

    const {value: vis, setValue: setVis} = recipeDataVisibilityState;

    return (<>
        <div
            className={css.name}
            style={ vis ? {visibility: 'visible'} : {visibility: 'hidden'} }
        >
            <span
                style={ !error && !loading && data ?
                    { backgroundSize: '50% 0.1em' } :
                    { backgroundSize: '0% 0.1em' }
                }
            >
                { error ? <p>Error!</p> :
                    !loading && data ? data.recipe.info.name : <Spinner />
                }
            </span>
        </div>

        <div
            className={[css.ingredients, css.list].join(' ')}
            style={ vis ? {visibility: 'visible'} : {visibility: 'hidden'} }
        >
            <span
                style={ !error && !loading && data ?
                    { backgroundSize: '30% 0.1em' } :
                    { backgroundSize: '0% 0.1em' }
                }
            >
                { !error && !loading && data ? 'Ingredients' : '' }
            </span>
            { error ? <p>Error!</p> :
                !loading && data ? 
                    <ul>{
                            data.recipe.ingredients.map((ingredient: recipeIngredientsOutput) => {
                                return (<li>
                                    {ingredient.amount} { ingredient.name}
                                </li>);
                            })
                    }</ul> : <Spinner />
            }
        </div>

        <div
            className={[css.instructions, css.list].join(' ')}
            style={ vis ? {visibility: 'visible'} : {visibility: 'hidden'} }
        >
            <span
                style={ !error && !loading && data ? 
                    { backgroundSize: '30% 0.1em' } : 
                    { backgroundSize: '0% 0.1em '}
                }
            >
                { !error && !loading && data ? 'Instructions' : '' }
            </span>
            { error ? <p>Error!</p> :
                !loading && data ? 
                    <ul>{
                    data.recipe.info.instructions.map((instruction: string) => {
                        return (<li>
                            {instruction}
                        </li>);
                    })
                }</ul> : <Spinner />
            }
        </div>
    </>);
};
