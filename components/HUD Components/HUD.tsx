import { numStateType, boolStateType } from "lib/commonPropTypes";
import css from "styles/HUD.module.scss";
import OptionsNav from "./Options/OptionsNav";
import IngredientsNav from "./Ingredients/IngredientsNav";
import { componentSettings } from "lib/componentSettings";
import RecipesNav from "./Recipes/RecipesNav";
import { useState } from "react";

type HUDProps = {
    ingredients: JSX.Element[]
    focusState: numStateType
    nightState: boolStateType
    changeSettings: (params: componentSettings) => void
    clientRecipeData: object
    recipeDataVisibility: boolStateType
    ingredientsNavOpen: boolStateType
};

export default function HUD(
    {
        ingredients, 
        focusState, 
        nightState, 
        changeSettings,
        clientRecipeData,
        recipeDataVisibility,
        ingredientsNavOpen
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
                focus={focusState.num}
                changeSettings={changeSettings}
                forceReRender={forceReRender}
                ingredientsNavOpen={ingredientsNavOpen}
            />
            <RecipesNav
                clientRecipeData={clientRecipeData}
                buttonVisibility={buttonVisibility}
                recipeDataVisibility={recipeDataVisibility}
            />
        </div>
    );
};
