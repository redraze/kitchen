import type { IngredientType, clientDataType, updateDataParams } from "lib/commonTypes";
import { useState } from "react";
import css from 'styles/HUD/Ingredients/Card.module.scss';

type IngredientCardProps = {
    ingredient: IngredientType
    clientIngredientData: clientDataType
    updateData: (params: updateDataParams) => void
}

export default function IngredientCard(
    { 
        ingredient, 
        clientIngredientData, 
        updateData
    }: IngredientCardProps
) {
    const [active, setActive] = useState(clientIngredientData[ingredient._id])
    const handler = () => {
        updateData({
            id: ingredient._id, 
            recipes: ingredient.recipes,
            info: {
                container: ingredient.info.containerType,
                refrigerated: ingredient.info.refrigerated
            },
            value: !clientIngredientData[ingredient._id]
        });
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
