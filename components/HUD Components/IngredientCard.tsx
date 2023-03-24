import { IngredientType } from "lib/commonPropTypes";
import css from 'styles/IngredientCard.module.scss';

type IngredientCardType = {
    ingredient: IngredientType
};

export default function IngredientCard({ ingredient }: IngredientCardType) {
    const handleClick = () => {
        ingredient.setBool(!ingredient.bool);
        console.log(ingredient.name, !ingredient.bool)
    };

    return(<div className={ css.IngredientCard } onClick={() => handleClick()}>
        <label>
            <input
                type="checkbox"
                checked={ingredient.bool}
                onChange={() => {}}
                />
            <span>{ingredient.name}</span>
        </label>
    </div>);
};
