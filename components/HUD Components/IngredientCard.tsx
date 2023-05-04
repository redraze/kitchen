import { IngredientType } from "lib/commonPropTypes";
import { useState } from "react";
import css from 'styles/IngredientCard.module.scss';

type IngredientCardProps = {
    ingredient: IngredientType
}

export default function IngredientCard({ ingredient }: IngredientCardProps) {
    const [bool, setBool] = useState(false);
    return(<div className={ css.IngredientCard }>
        <label>
            <span>{ingredient.info.name}</span>
            <input
                type="checkbox"
                onClick={() => setBool(!bool)}
            />
        </label>
    </div>);
};
