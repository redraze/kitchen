import { stateType } from "lib/commonPropTypes";
import css from "styles/HUD/HUD.module.scss";
import OptionsNav from "./Options/Nav";
import IngredientsNav from "./Ingredients/Nav";
import { componentSettings } from "lib/componentSettings";
import RecipesNav from "./Recipes/Nav";
import { useState } from "react";

type HUDProps = {
    ingredients: JSX.Element[]
    focusState: stateType<number>
    nightState: stateType<boolean>
    changeSettings: (params: componentSettings) => void
    clientRecipeData: object
    recipeDataVisibility: stateType<boolean>
    ingredientsNavOpen: stateType<boolean>
    userInputState: stateType<string>
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
        userInputState
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
            />
            <IngredientsNav
                ingredients={ingredients}
                focus={focusState.value}
                changeSettings={changeSettings}
                forceReRender={forceReRender}
                ingredientsNavOpen={ingredientsNavOpen}
                userInputState={userInputState}
            />
            <RecipesNav
                clientRecipeData={clientRecipeData}
                buttonVisibility={buttonVisibility}
                recipeDataVisibility={recipeDataVisibility}
            />
        </div>
    );
};
