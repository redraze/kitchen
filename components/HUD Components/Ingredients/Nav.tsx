import type { stateType, voidFunc } from "lib/commonTypes";
import {
    type componentSettings,
    initSettings,
    fridgeSettings,
    pantrySettings,
    stoveSettings
} from "lib/settings";
import { useEffect } from "react";
import css from "styles/HUD/Ingredients/Nav.module.scss";
import Button from "../Button";
import IngredientsTab from "./Tab";
import Image from "next/image";

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
        reRender
    }: IngredientsNavProps
) {
    const {value: userInput} = userInputState;
    const {value: open, setValue: setOpen} = ingredientsNavOpenState;
    useEffect(() => {
        if (focus == fridgeSettings.focus || focus == pantrySettings.focus) {
            setOpen(true);
        };
    }, [focus]);

    return (
        <div 
            className={ css.ingredientsNav }
            style={{ left: open ? '0px' : '-300px' }}
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
            <button 
                className={ 
                    focus == fridgeSettings.focus || focus == pantrySettings.focus ? 
                    css.buttonActive : css.buttonInactive
                }
                onClick={ () => changeSettings(initSettings) }
            >
                <div>
                    <Image
                        src={'/Icons/Back.png'}
                        alt='Back'
                        height={30}
                        width={30}
                    />    
                </div>
            </button>
        </div>
    );
};
