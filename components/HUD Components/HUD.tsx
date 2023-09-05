import type {
    clientDataType,
    stateType,
    voidFunc
} from "lib/commonTypes";
import type { componentSettings } from "lib/settings";
import { useEffect, useState } from "react";
import css from "styles/HUD/HUD.module.scss";
import OptionsNav from "./Options/Nav";
import IngredientsNav from "./Ingredients/Nav";
import RecipesNav from "./Recipes/Nav";

type HUDProps = {
    ingredients: JSX.Element[]
    focusState: stateType<number>
    spaceState: stateType<boolean>
    changeSettings: voidFunc<componentSettings>
    clientRecipeData: clientDataType
    clientIngredientData: clientDataType
    recipeDataVisibilityState: stateType<boolean>
    recipeResultsVisibilityState: stateType<boolean>
    ingredientsNavOpenState: stateType<boolean>
    userInputState: stateType<string>
    dataListState: stateType<(JSX.Element | undefined)[]>
    updateSettings: voidFunc<componentSettings>
    reRender: stateType<number>
    resetData: voidFunc
};

export default function HUD(
    {
        ingredients, 
        focusState, 
        spaceState, 
        changeSettings,
        clientRecipeData,
        clientIngredientData,
        recipeDataVisibilityState,
        recipeResultsVisibilityState,
        ingredientsNavOpenState,
        userInputState,
        dataListState,
        updateSettings,
        reRender,
        resetData
    }: HUDProps
) {
    //  Force RecipeNavButton to re-render when clientRecipeData changes
    const [buttonVisibility, setButtonVisibility] = useState(false);

    const forceReRender = () => {
        if (
            recipeDataVisibilityState.value 
            || recipeResultsVisibilityState.value
            || JSON.stringify(clientRecipeData) == JSON.stringify({})
        ) {
            setButtonVisibility(false);
            return;
        };
        setButtonVisibility(true);
    };

    useEffect(() => {
        forceReRender();
    }, [recipeDataVisibilityState, recipeResultsVisibilityState]);
    
    return (
        <div className={ css.HUD }>
            <OptionsNav
                spaceState={spaceState}
                resetData={resetData}
            />
            <IngredientsNav
                ingredients={ingredients}
                focus={focusState.value}
                changeSettings={changeSettings}
                forceReRender={forceReRender}
                ingredientsNavOpenState={ingredientsNavOpenState}
                userInputState={userInputState}
                dataListState={dataListState}
                updateSettings={updateSettings}
                reRender={reRender}
            />
            <RecipesNav
                clientIngredientData={clientIngredientData}
                clientRecipeData={clientRecipeData}
                buttonVisibility={buttonVisibility}
                recipeDataVisibilityState={recipeDataVisibilityState}
                recipeResultsVisibilityState={recipeResultsVisibilityState}
                ingredientsNavOpenState={ingredientsNavOpenState}
                changeSettings={changeSettings}
            />
        </div>
    );
};
