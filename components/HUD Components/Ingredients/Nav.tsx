import { useEffect } from "react";
import css from "styles/HUD/Ingredients/Nav.module.scss";
import Button from "../Button";
import {
    componentSettings,
    fridgeSettings,
    initSettings,
    pantrySettings
} from "lib/componentSettings";
import IngredientsTab from "./Tab";
import { stateType } from "lib/commonPropTypes";

type IngredientsNavProps = {
    ingredients: JSX.Element[]
    focus: number
    changeSettings: (params: componentSettings) => void
    forceReRender: (params: void) => void
    ingredientsNavOpen: stateType<boolean>
    userInputState: stateType<string>
};

export default function IngredientsNav(
    { 
        ingredients, 
        focus, 
        changeSettings,
        forceReRender,
        ingredientsNavOpen,
        userInputState
    }: IngredientsNavProps
) {
    const toggleSettings = (settings: componentSettings) => {
        if (focus === settings.focus) {
            changeSettings(initSettings);
        } else {
            changeSettings(settings);
        };
    };

    const {value: open, setValue: setOpen} = ingredientsNavOpen;
    useEffect(() => {
        if (focus !== initSettings.focus) {
            setOpen(true);
        };
    }, [focus]);

    const {value: userInput, setValue: setUserInput} = userInputState;
    const handleClick = (settings: componentSettings) => {
        toggleSettings(settings);
        setUserInput('');
    };

    return (<>
        <div 
            className={ css.ingredientsNav } 
            style={{ left: open ? '0' : '-300px' }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => {
                if (focus === initSettings.focus && !userInput) {
                    setOpen(false);
                };
            }}
            onClick={() => forceReRender()}
        >
            <Button openState={ingredientsNavOpen} left/>
            <IngredientsTab 
                ingredients={ingredients}
                focus={focus}
                userInputState={userInputState}
                changeSettings={changeSettings}
            />
            <ul>
                <li onClick={() => handleClick(fridgeSettings)}>
                    <span>Refridgerated Ingredients</span>
                </li>
                <li onClick={() => handleClick(pantrySettings)}>
                    <span>Unrefrigerated Ingredients</span>
                </li>
            </ul>
        </div>
    </>);
};
