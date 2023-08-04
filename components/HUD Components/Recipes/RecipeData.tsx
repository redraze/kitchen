import type { clientDataType, stateType } from "lib/commonTypes";
import type { RecipeTypeOutput, recipeIngredientsOutput } from "lib/typeDefsExports";
import { type LazyQueryResultTuple, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_RECIPE } from "lib/queries";
import css from 'styles/HUD/Recipes/RecipeData.module.scss';
import Spinner from "./Spinner";

type RecipeDataProps = {
    clientIngredientData: clientDataType
    recipeDataVisibilityState: stateType<boolean>
    recipeResultsVisibilityState: stateType<boolean>
    displayRecipe: string
};

export default function RecipeData(
    {
        clientIngredientData,
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

    const mapIngredients = (recipe: RecipeTypeOutput) => {
        let have: JSX.Element[] = [];
        let haveNot: JSX.Element[] = [];

        recipe.ingredients.map((ingredient: recipeIngredientsOutput, idx: number) => {
            if (Boolean(clientIngredientData[ingredient.id as keyof object])) {
                have.push(
                    <li key={idx} >
                        { ingredient.amount } { ingredient.name }
                    </li>
                );
            } else {
                haveNot.push(
                    (<li key={idx} style={{ color: 'red' }}>
                        {ingredient.amount} { ingredient.name}
                    </li>)
                );
            };
        });

        return (<>
            <ul>{ have }</ul>
            <ul>{ haveNot }</ul>
        </>);
    };

    const mapInstructions = (recipe: RecipeTypeOutput) => {
        let instructionsList: JSX.Element[] = [];

        recipe.info.instructions.map((instruction: string, idx: number) => {
            instructionsList.push(
                <li key={idx} >
                    {instruction}
                </li>
            );
        });

        return(<ul>
            { instructionsList }
        </ul>);
    };;

    const {value: vis, setValue: setVis} = recipeDataVisibilityState;

    return (<>
        <div
            className={ css.name }
            style={ vis ? {display: 'flex'} : {display: 'none'} }
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
            className={ [css.ingredients, css.list].join(' ') }
            style={ vis ? {display: 'flex'} : {display: 'none'} }
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
                !loading && data ? mapIngredients(data.recipe) : <Spinner /> 
            }
        </div>

        <div
            className={ [css.instructions, css.list].join(' ') }
            style={ vis ? {display: 'flex'} : {display: 'none'} }
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
                !loading && data ? mapInstructions(data.recipe) : <Spinner />
            }
        </div>
    </>);
};
