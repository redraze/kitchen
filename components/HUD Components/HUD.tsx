import { NightStateType, IngredientType } from "lib/commonPropTypes";
import css from "styles/HUD.module.scss";
import Nav from "./Nav";
import Ingredients from "./Ingredients";

type HUDProps = {
    nightState: NightStateType
    ingredients: IngredientType[]
};

export default function HUD({ nightState, ingredients }: HUDProps) {
    return(
        <div className={ css.HUD }>
            <Nav nightState={nightState}/>
            <Ingredients ingredients={ingredients}/>
        </div>
    );
};
