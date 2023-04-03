import { numStateType } from "lib/commonPropTypes";
import { useState } from "react";
import css from "styles/Ingredients.module.scss";
import Button from "./Button";

type IngredientsNavProps = {
    focusState: numStateType
    ingredients: JSX.Element[]
};

export default function IngredientsNav({ focusState, ingredients }: IngredientsNavProps) {
    const [open, setOpen] = useState(false);
    let refrigeratedMap: JSX.Element[] = [];
    let nonRefrigeratedMap: JSX.Element[] = [];
    // let spicesMap: JSX.Element[] = [];
    ingredients.map((ingredient: JSX.Element) => {
        ingredient.props.ingredient.refrigerated === true ? 
            refrigeratedMap = [...refrigeratedMap, ingredient] :
            nonRefrigeratedMap = [...nonRefrigeratedMap, ingredient]
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
