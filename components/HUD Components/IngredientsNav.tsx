import { numStateType, IngredientType } from "lib/commonPropTypes";
import { useState } from "react";
import IngredientCard from "./IngredientCard";
import css from "styles/Ingredients.module.scss";
import Button from "./Button";

type IngredientsNavProps = {
    focusState: numStateType
    ingredients: IngredientType[]
};

export default function IngredientsNav({ focusState, ingredients }: IngredientsNavProps) {
    const [open, setOpen] = useState(false);
    let refrigeratedMap: JSX.Element[] = [];
    let nonRefrigeratedMap: JSX.Element[] = [];
    // let spicesMap: JSX.Element[] = [];
    ingredients.map((ingredient, key) => {
        const card = <IngredientCard ingredient={ingredient} key={key}/>;
        ingredient.refrigerated === true ? 
            refrigeratedMap = [...refrigeratedMap, card] :
            nonRefrigeratedMap = [...nonRefrigeratedMap, card]
    });

    return(
        <div className={ css.ingredientsNav } style={{right: open ? '80%' : '100%'}}>
            <Button openState={{bool: open, setBool: setOpen}} left/>
            <div className={ css.refrigerated }>
                {refrigeratedMap}
            </div>
            <div className={ css.nonRefrigerated }>
                {nonRefrigeratedMap}
            </div>
            {/* <div className={ css.spices }>
                {spicesMap}
            </div> */}
        </div>
    );
};
