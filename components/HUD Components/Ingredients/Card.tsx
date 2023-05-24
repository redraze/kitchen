import { IngredientType } from "lib/commonPropTypes";
import { useState } from "react";
import css from 'styles/HUD/Ingredients/Card.module.scss';

type IngredientCardProps = {
    ingredient: IngredientType
    active: boolean | undefined
    updateData: (arg1: string, arg2: boolean, args3: string[]) => void
}

export default function IngredientCard({ ingredient, active, updateData }: IngredientCardProps) {
    const [bool, setBool] = useState(active ? true : false);
    const [className, setClassName] = useState(
        active ? 
            [css.ingredientCard , css.active].join(' ') :
            [css.ingredientCard , css.inactive].join(' ')
    );

    const handler = () => {
        setClassName(
            bool ?
                [css.ingredientCard , css.inactive].join(' ') :
                [css.ingredientCard , css.active].join(' ')
        );
        setBool(!bool);
        updateData(ingredient._id, !bool, ingredient.recipes);
    };

    return(
        <div 
            className={className}
            onClick={ () => handler() }
        >
            <span>{ingredient.info.name}</span>
        </div>
    );
};
