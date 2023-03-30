import { numStateType, boolStateType, IngredientType } from "lib/commonPropTypes";
import css from "styles/HUD.module.scss";
import Nav from "./Nav";
import IngredientsNav from "./IngredientsNav";

type HUDProps = {
    focusState: numStateType
    nightState: boolStateType
    ingredients: IngredientType[]
};

export default function HUD({ focusState, nightState, ingredients }: HUDProps) {
    return(
        <div className={ css.HUD }>
            <Nav
                focusState={focusState}
                nightState={nightState}
            />
            <IngredientsNav
                focusState={focusState}
                ingredients={ingredients}
            />
        </div>
    );
};
