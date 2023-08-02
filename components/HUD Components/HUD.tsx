import type {
    clientDataType,
    stateType,
    voidFunc
} from "lib/commonTypes";
import { useState } from "react";
import css from "styles/HUD/HUD.module.scss";
import OptionsNav from "./Options/Nav";
import IngredientsNav from "./Ingredients/Nav";
import RecipesNav from "./Recipes/Nav";
import { componentSettings } from "lib/settings";

type HUDProps = {
    ingredients: JSX.Element[]
    focusState: stateType<number>
    spaceState: stateType<boolean>
    changeSettings: voidFunc<componentSettings>
    clientRecipeData: clientDataType
    recipeDataVisibilityState: stateType<boolean>
    recipeResultsVisibilityState: stateType<boolean>
    ingredientsNavOpenState: stateType<boolean>
    userInputState: stateType<string>
    dataListState: stateType<(JSX.Element | undefined)[]>
    clickHandler: voidFunc<componentSettings>
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
        recipeDataVisibilityState,
        recipeResultsVisibilityState,
        ingredientsNavOpenState,
        userInputState,
        dataListState,
        clickHandler,
        reRender,
        resetData
    }: HUDProps
) {
    //  Force RecipeNavButton to re-render when clientRecipeData changes
    const [buttonVisibility, setButtonVisibility] = useState(false);
    const forceReRender = () => {
        if (JSON.stringify(clientRecipeData) !== JSON.stringify({})) {
            setButtonVisibility(true);
        } else {
            setButtonVisibility(false);
        };
    };
    setTimeout(() => {
        forceReRender();
    }, 3000)
    
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
                clickHandler={clickHandler}
                reRender={reRender}
            />
            <RecipesNav
                clientRecipeData={clientRecipeData}
                buttonVisibility={buttonVisibility}
                recipeDataVisibilityState={recipeDataVisibilityState}
                recipeResultsVisibilityState={recipeResultsVisibilityState}
            />
        </div>
    );
};
