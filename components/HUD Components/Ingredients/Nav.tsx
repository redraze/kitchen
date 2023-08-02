import type { stateType, voidFunc } from "lib/commonTypes";
import type { componentSettings } from "lib/settings";
import { useEffect, useState } from "react";
import css from "styles/HUD/Ingredients/Nav.module.scss";
import Button from "../Button";
import IngredientsTab from "./Tab";
import { fridgeSettings, initSettings, pantrySettings } from "lib/settings";

type IngredientsNavProps = {
    ingredients: JSX.Element[]
    focus: number
    changeSettings: voidFunc<componentSettings>
    forceReRender: voidFunc
    ingredientsNavOpenState: stateType<boolean>
    userInputState: stateType<string>
    dataListState: stateType<(JSX.Element | undefined)[]>
    clickHandler: voidFunc<componentSettings>
    reRender: stateType<number>
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
        clickHandler,
        reRender
    }: IngredientsNavProps
) {
    const {value: userInput} = userInputState;
    const {value: open, setValue: setOpen} = ingredientsNavOpenState;
    useEffect(() => {
        if (focus !== initSettings.focus) {
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
            style={{ left: open ? '0px' : offset }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => {
                if (focus === initSettings.focus && !userInput) {
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
                <li onClick={() => clickHandler(fridgeSettings)}>
                    <span>Refridgerated Ingredients</span>
                </li>
                <li onClick={() => clickHandler(pantrySettings)}>
                    <span>Unrefrigerated Ingredients</span>
                </li>
            </ul>
        </div>
    </>);
};
