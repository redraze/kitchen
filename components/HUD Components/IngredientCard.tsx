import { IngredientType } from "lib/commonPropTypes";
import { useState } from "react";
import css from 'styles/IngredientCard.module.scss';

type IngredientCardProps = {
    ingredient: IngredientType
    active: boolean
    updateData: (arg1: string, arg2: boolean, args3: string[]) => void
}

export default function IngredientCard({ ingredient, active, updateData}: IngredientCardProps) {
    const [bool, setBool] = useState(active);

    return(<div className={ css.IngredientCard }>
        <label>
            <span>{ingredient.info.name}</span>
            <input
                type="checkbox"
                defaultChecked={bool}
                onClick={() => { 
                    setBool(!bool),
                    updateData(ingredient._id, !bool, ingredient.recipes)
                }}
            />
        </label>
    </div>);
};
