import type { stateType, voidFunc } from "lib/commonTypes";
import { useEffect, useState } from "react";
import css from "styles/HUD/Ingredients/Nav.module.scss";
import Button from "../Button";
import IngredientsTab from "./Tab";
import {
    type componentSettings,
    initSettings,
    fridgeSettings,
    pantrySettings,
    stoveSettings
} from "lib/settings";

type IngredientsNavProps = {
    ingredients: JSX.Element[]
    focus: number
    changeSettings: voidFunc<componentSettings>
    forceReRender: voidFunc
    ingredientsNavOpenState: stateType<boolean>
    userInputState: stateType<string>
    dataListState: stateType<(JSX.Element | undefined)[]>
    updateSettings: voidFunc<componentSettings>
    reRender: stateType<number>
    recipeDataVisibility: boolean
};

export default function IngredientsNav(
    { 
        ingredients, 
        focus, 
        changeSettings,
        forceReRender,
        ingredientsNavOpenState,
        userInputState,
        dataListState,
        updateSettings,
        reRender,
        recipeDataVisibility,
    }: IngredientsNavProps
) {
    const {value: userInput} = userInputState;
    const {value: open, setValue: setOpen} = ingredientsNavOpenState;
    useEffect(() => {
        if (focus == fridgeSettings.focus || focus == pantrySettings.focus) {
            setOpen(true);
        };
    }, [focus]);

    const [offset, setOffset] = useState<string>('-350px');
    useEffect(() => {
        setTimeout(() => {
            setOffset('-300px');
        }, 2000);
    }, []);

    return (<>
        <div 
            className={ css.ingredientsNav }
            style={{ left: open ? '0px' : !recipeDataVisibility ? offset : '-400px' }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => {
                if (
                    (focus == initSettings.focus || focus == stoveSettings.focus)
                    && !userInput
                ) {
                    setOpen(false);
                };
            }}
            onClick={() => forceReRender()}
        >
            <Button openState={ingredientsNavOpenState} left />
            <IngredientsTab 
                ingredients={ingredients}
                focus={focus}
                userInputState={userInputState}
                changeSettings={changeSettings}
                dataListState={dataListState}
                reRender={reRender}
            />
            <ul>
                <li onClick={() => updateSettings(fridgeSettings)}>
                    <span>Refridgerated Ingredients</span>
                </li>
                <li onClick={() => updateSettings(pantrySettings)}>
                    <span>Unrefrigerated Ingredients</span>
                </li>
            </ul>
        </div>
    </>);
};
