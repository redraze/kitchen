import { useEffect, useState } from "react";
import css from "styles/IngredientsNav.module.scss";
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
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (focus !== initSettings.focus) {
            setOpen(true);
        };
    }, [focus]);

    return(
        <div 
            className={ css.ingredientsNav } 
            style={{right: open ? '80%' : '99.9%'}}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => {
                if (focus === initSettings.focus) {
                    setOpen(false);
                };
            }}
        >
            <Button openState={{bool: open, setBool: setOpen}} left/>
            <ul>
                <li className={
                    focus === fridgeSettings.focus ?
                    css.fridge_focus :
                    css.fridge
                }
                onMouseDown={() => toggleSettings(fridgeSettings)}
                >
                    <span>Refridgerated Ingredients</span>
                    <div>{fridgeMap}</div>
                </li>
                <li className={
                    focus === pantrySettings.focus ?
                    css.pantry_focus :
                    css.pantry
                }
                onMouseDown={() => toggleSettings(pantrySettings)}
                >
                    <span>Unrefrigerated Ingredients</span>
                    <div>{pantryMap}</div>
                </li>
            </ul>
        </div>
    );
};
