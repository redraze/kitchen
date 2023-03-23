import { IngredientType } from "lib/commonPropTypes";
import css from "styles/Ingredients.module.scss";

type IngredientsProps = {
    ingredients: IngredientType[]
};

export default function Ingredients({ ingredients }: IngredientsProps) {
    return(<div className={ css.ingredients }>
        
    </div>);
};
