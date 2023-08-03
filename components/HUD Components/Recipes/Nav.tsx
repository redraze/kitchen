import type { clientDataType, stateType, voidFunc } from "lib/commonTypes";
import type { componentSettings } from "lib/settings";
import { useMutation } from "@apollo/client";
import { RECIPE_SEARCH } from 'lib/mutations';
import css from 'styles/HUD/Recipes/Nav.module.scss';
import Results from "./Results";
import RecipeData from "./RecipeData";
import { useState } from "react";

type RecipeRequestTabProps = {
    clientRecipeData: clientDataType
    buttonVisibility: boolean
    recipeDataVisibilityState: stateType<boolean>
    recipeResultsVisibilityState: stateType<boolean>
    changeSettings: voidFunc<componentSettings>
};

export default function RecipeRequestTab(
    { 
        clientRecipeData, 
        buttonVisibility,
        recipeDataVisibilityState,
        recipeResultsVisibilityState,
        changeSettings
    }: RecipeRequestTabProps
) {
    //  useMutation is used here instead of useQuery in order to make
    //  available a function, recipeSearch, that can be called at will
    const [recipeSearch, { error, data, loading }] = useMutation(RECIPE_SEARCH);

    const handler = async () => {
        recipeResultsVisibilityState.setValue(true);
        try {
            await recipeSearch({ 
                variables: { 
                    recipeData: Object.entries(clientRecipeData).map((item) => {
                        return ({id: item[0], amount: item[1]});
                    })
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
    };

    const [displayRecipe, setDisplayRecipe] = useState<string>('');

    return (<>
        <button
            style={ buttonVisibility ?
                {transform: 'translateX(-50%) translateY(-20%)'} :
                {transform: 'translateX(-50%) translateY(100%)'} }
            className={ css.search }
            onClick={() => handler()}
        >
            <span>Find Recipes!</span>
        </button>
        <Results
            clientRecipeData={clientRecipeData}
            error={error}
            data={data?.recipeSearch}
            loading={loading}
            recipeDataVisibilityState={recipeDataVisibilityState}
            recipeResultsVisibilityState={recipeResultsVisibilityState}
            setDisplayRecipe={setDisplayRecipe}
            changeSettings={changeSettings}
        />
        <RecipeData 
            clientRecipeData={clientRecipeData}
            recipeDataVisibilityState={recipeDataVisibilityState}
            recipeResultsVisibilityState={recipeResultsVisibilityState}
            displayRecipe={displayRecipe}
        />
    </>);
};
