import { numStateType, boolStateType } from "lib/commonPropTypes";
import css from "styles/HUD.module.scss";
import Nav from "./Nav";
import IngredientsNav from "./IngredientsNav";
import { componentSettings } from "lib/componentSettings";

type HUDProps = {
    ingredients: JSX.Element[]
    focusState: numStateType
    nightState: boolStateType
    changeSettings: (params: componentSettings) => void
};

export default function HUD(
    { 
        ingredients, 
        focusState, 
        nightState, 
        changeSettings 
    }: HUDProps
) {
    return (
        <div className={ css.HUD }>
            <Nav
                focusState={focusState}
                nightState={nightState}
                changeSettings={changeSettings}
            />
            <IngredientsNav
                ingredients={ingredients}
                focus={focusState.num}
                changeSettings={changeSettings}
            />
        </div>
    );
};
