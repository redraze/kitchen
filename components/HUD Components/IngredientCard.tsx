import { IngredientType } from "lib/commonPropTypes";
import css from 'styles/IngredientCard.module.scss';

type IngredientCardType = {
    ingredient: IngredientType
};

export default function IngredientCard({ ingredient }: IngredientCardType) {
    return(<div className={ css.IngredientCard }>
        <label>
            <input
                type="checkbox"
                onClick={ () => {ingredient.setBool(!ingredient.bool)} }
                />
            <span>{ingredient.name}</span>
        </label>
    </div>);
};
