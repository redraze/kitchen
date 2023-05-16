import { useEffect, useState } from "react";
import css from "styles/IngredientsNav.module.scss";
import Button from "../Button";
import {
    componentSettings,
    fridgeSettings,
    initSettings,
    pantrySettings
} from "lib/componentSettings";
import IngredientsTab from "./IngredientsTab";
import { boolStateType } from "lib/commonPropTypes";

type IngredientsNavProps = {
    ingredients: JSX.Element[]
    focus: number
    changeSettings: (params: componentSettings) => void
    forceReRender: (params: void) => void
    ingredientsNavOpen: boolStateType
};

export default function IngredientsNav(
    { 
        ingredients, 
        focus, 
        changeSettings,
        forceReRender,
        ingredientsNavOpen
    }: IngredientsNavProps
) {
    const toggleSettings = (settings: componentSettings) => {
        if (focus === settings.focus) {
            changeSettings(initSettings);
        } else {
            changeSettings(settings);
        };
    };

    const {bool: open, setBool: setOpen} = ingredientsNavOpen;
    useEffect(() => {
        if (focus !== initSettings.focus) {
            setOpen(true);
        };
    }, [focus, setOpen]);

    return (<>
        <div 
            className={ css.ingredientsNav } 
            style={{ right: open ? '80%' : '100%' }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => {
                if (focus === initSettings.focus) {
                    setOpen(false);
                };
            }}
            onClick={() => forceReRender()}
        >
            <Button openState={ingredientsNavOpen} left/>
            <ul>
                <li 
                    onClick={() => toggleSettings(fridgeSettings)}
                    style={{ borderLeft:
                        focus === fridgeSettings.focus ?
                            'solid 8px white' :
                            'solid 0px white'
                    }}
                >
                    <span>Refridgerated Ingredients</span>
                </li>
                <li
                    onClick={() => toggleSettings(pantrySettings)}
                    style={{ borderLeft:
                        focus === pantrySettings.focus ?
                            'solid 8px white' :
                            'solid 0px white'
                    }}
                >
                    <span>Unrefrigerated Ingredients</span>
                </li>
            </ul>
            <IngredientsTab 
                ingredients={ingredients}
                focus={focus}
            />
        </div>
    </>);
};
