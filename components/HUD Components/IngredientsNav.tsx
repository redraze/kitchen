import { useState } from "react";
import css from "styles/Ingredients.module.scss";
import Button from "./Button";
import { componentSettings, fridgeSettings, initSettings, pantrySettings } from "lib/componentSettings";

type IngredientsNavProps = {
    ingredients: JSX.Element[]
    focus: number
    changeSettings: (params: componentSettings) => void
};

export default function IngredientsNav(
    { 
        ingredients, 
        focus, 
        changeSettings 
    }: IngredientsNavProps
) {
    const [open, setOpen] = useState(false);
    let fridgeMap: JSX.Element[] = [];
    let pantryMap: JSX.Element[] = [];
    ingredients.map((ingredient: JSX.Element) => {
        ingredient.props.ingredient.refrigerated === true ? 
            fridgeMap = [...fridgeMap, ingredient] :
            pantryMap = [...pantryMap, ingredient]
    });

    const toggleSettings = (settings: componentSettings) => {
        if (focus === settings.focus) {
            changeSettings(initSettings);
        } else {
            changeSettings(settings);
        };
    };

    return(
        <div className={ css.ingredientsNav } style={{right: open ? '80%' : '100%'}}>
            <Button openState={{bool: open, setBool: setOpen}} left/>
            <ul>
                <li className={
                    focus === fridgeSettings.focus ?
                    css.fridge_focus :
                    css.fridge
                }
                onClick={() => toggleSettings(fridgeSettings)}
                >
                    <span>Refridgerated Ingredients</span>
                    <div>{fridgeMap}</div>
                </li>
                <li className={
                    focus === pantrySettings.focus ?
                    css.pantry_focus :
                    css.pantry
                }
                onClick={() => toggleSettings(pantrySettings)}
                >
                    <span>Non-refrigerated Ingredients</span>
                    <div>{pantryMap}</div>
                </li>
            </ul>
        </div>
    );
};
