import { boolStateType, IngredientType } from "lib/commonPropTypes";
import css from "styles/HUD.module.scss";
import Nav from "./Nav";
import IngredientsNav from "./IngredientsNav";

type HUDProps = {
    nightState: boolStateType
    ingredients: IngredientType[]
};

export default function HUD({ nightState, ingredients }: HUDProps) {
    return(
        <div className={ css.HUD }>
            <Nav nightState={nightState}/>
            <IngredientsNav ingredients={ingredients}/>
        </div>
    );
};
