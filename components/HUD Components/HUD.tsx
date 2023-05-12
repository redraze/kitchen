import { numStateType, boolStateType } from "lib/commonPropTypes";
import css from "styles/HUD.module.scss";
import OptionsNav from "./OptionsNav";
import IngredientsNav from "./IngredientsNav";
import { componentSettings } from "lib/componentSettings";

type HUDProps = {
    ingredients: JSX.Element[]
    focusState: numStateType
    nightState: boolStateType
    changeSettings: (params: componentSettings) => void
    clientRecipeData: object
};

export default function HUD(
    {
        ingredients, 
        focusState, 
        nightState, 
        changeSettings,
        clientRecipeData,
    }: HUDProps
) {
    return (
        <div className={ css.HUD }>
            <OptionsNav
                nightState={nightState}
            />
            <IngredientsNav
                ingredients={ingredients}
                focus={focusState.num}
                changeSettings={changeSettings}
                clientRecipeData={clientRecipeData}
            />
        </div>
    );
};
