import { IngredientType } from "lib/commonPropTypes";
import { useState } from "react";
import IngredientCard from "./IngredientCard";
import css from "styles/Ingredients.module.scss";
import NavButton from "./Button";

type IngredientsNavProps = {
    ingredients: IngredientType[]
};

export default function IngredientsNav({ ingredients }: IngredientsNavProps) {
    const [open, setOpen] = useState(false);
    // TS 'any' usage here              ---------------------------------
    let refrigeratedMap: any[] = [];
    let nonRefrigeratedMap: any[] = [];
    ingredients.map((ingredient, key) => {
        const card = <IngredientCard ingredient={ingredient} key={key}/>;
        ingredient.refrigerated === true ? 
        refrigeratedMap = [...refrigeratedMap, card] :
        nonRefrigeratedMap = [...nonRefrigeratedMap, card]
    });

    return(
        <div className={ css.ingredientsNav } style={{right: open ? '80%' : '100%'}}>
            <NavButton open={open} setOpen={setOpen} left/>
            <div className={ css.refrigerated }>
                {refrigeratedMap}
            </div>
            <div className={ css.nonRefrigerated }>
                {nonRefrigeratedMap}
            </div>
        </div>
    );
};
