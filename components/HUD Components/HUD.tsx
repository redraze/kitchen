import type { stateType } from "lib/commonTypes";
import { useState } from "react";
import css from "styles/HUD/HUD.module.scss";
import OptionsNav from "./Options/Nav";
import IngredientsNav from "./Ingredients/Nav";
import RecipesNav from "./Recipes/Nav";
import { componentSettings } from "lib/settings";

type HUDProps = {
    ingredients: JSX.Element[]
    focusState: stateType<number>
    nightState: stateType<boolean>
    changeSettings: (params: componentSettings) => void
    clientRecipeData: object
    recipeDataVisibility: stateType<boolean>
    ingredientsNavOpen: stateType<boolean>
    userInputState: stateType<string>
    dataListState: stateType<(JSX.Element | undefined)[]>
    clickHandler: (params: componentSettings) => void
    reRender: stateType<number>
    resetData: () => void
    spaceState: stateType<boolean>
};

export default function HUD(
    {
        ingredients, 
        focusState, 
        nightState, 
        changeSettings,
        clientRecipeData,
        recipeDataVisibility,
        ingredientsNavOpen,
        userInputState,
        dataListState,
        clickHandler,
        reRender,
        resetData,
        spaceState
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
                nightState={nightState}
                resetData={resetData}
                spaceState={spaceState}
            />
            <IngredientsNav
                ingredients={ingredients}
                focus={focusState.value}
                changeSettings={changeSettings}
                forceReRender={forceReRender}
                ingredientsNavOpen={ingredientsNavOpen}
                userInputState={userInputState}
                dataListState={dataListState}
                clickHandler={clickHandler}
                reRender={reRender}
            />
            <RecipesNav
                clientRecipeData={clientRecipeData}
                buttonVisibility={buttonVisibility}
                recipeDataVisibility={recipeDataVisibility}
            />
        </div>
    );
};
