import type { IngredientType, clientDataType } from "lib/commonPropTypes";
import { useState } from "react";
import css from 'styles/HUD/Ingredients/Card.module.scss';

type IngredientCardProps = {
    ingredient: IngredientType
    clientIngredientData: clientDataType
    updateData: (arg1: string, arg2: string[], args3: boolean) => void
}

export default function IngredientCard(
    { 
        ingredient, 
        clientIngredientData, 
        updateData,
    }: IngredientCardProps
) {
    const [active, setActive] = useState(clientIngredientData[ingredient._id])
    const handler = () => {
        updateData(
            ingredient._id, 
            ingredient.recipes,
            !clientIngredientData[ingredient._id]
        );
        setActive(clientIngredientData[ingredient._id])
    };

    return(
        <div 
            className={
                active ?
                    [css.ingredientCard , css.active].join(' ') :
                    [css.ingredientCard , css.inactive].join(' ')
            }
            onClick={ () => handler() }
        >
            <span>{ingredient.info.name}</span>
        </div>
    );
};
