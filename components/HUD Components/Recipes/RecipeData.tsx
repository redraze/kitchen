import type { clientDataType, stateType, voidFunc } from "lib/commonTypes";
import type { RecipeTypeOutput, recipeIngredientsOutput } from "lib/typeDefsExports";
import { type componentSettings, initSettings } from "lib/settings";
import { type LazyQueryResultTuple, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_RECIPE } from "lib/queries";
import Image from 'next/image';
import css from 'styles/HUD/Recipes/RecipeData.module.scss';
import Spinner from "./Spinner";

type RecipeDataProps = {
    clientIngredientData: clientDataType
    recipeDataVisibilityState: stateType<boolean>
    recipeResultsVisibilityState: stateType<boolean>
    displayRecipe: string
    changeSettings: voidFunc<componentSettings>
};

export default function RecipeData(
    {
        clientIngredientData,
        recipeDataVisibilityState,
        recipeResultsVisibilityState,
        displayRecipe,
        changeSettings
    }: RecipeDataProps
) {
    type lazyQueryType = LazyQueryResultTuple<{ recipe: RecipeTypeOutput }, { id: string }>;
    const [getRecipe, { error, data, loading }]: lazyQueryType = useLazyQuery(GET_RECIPE);

    const [font, setFont] = useState('');

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
                    onCompleted: (data) => {
                        setFont(data.recipe.filters.cuisine as keyof object)
                        // console.log('success', data)
                    }
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
    };

    const {value: vis, setValue: setVis} = recipeDataVisibilityState;
    const handler = () => {
        setVis(false);
        recipeResultsVisibilityState.setValue(true);
        changeSettings(initSettings);
    };
    
    return (<>
        <div
            className={ [css.name, css[`${font}`]].join(' ') }
            style={ vis ? {display: 'flex'} : {display: 'none'} }
        >
            <button
                onClick={ () => handler() }
                className={ css.closeButton }
                style={ vis ? {display: 'flex'} : {display: 'none'} }
            >
                <Image
                    src={'/BackIcon.png'}
                    alt='X'
                    height={35 * 4/3}
                    width={35 * 4/3}
                />
            </button>
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
