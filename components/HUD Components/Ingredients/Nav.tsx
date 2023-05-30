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
    dataListState: stateType<JSX.Element[]>
    clickHandler: (params: componentSettings) => void
};

export default function IngredientsNav(
    { 
        ingredients, 
        focus, 
        changeSettings,
        forceReRender,
        ingredientsNavOpen,
        userInputState,
        dataListState,
        clickHandler
    }: IngredientsNavProps
) {
    const {value: userInput} = userInputState;
    const {value: open, setValue: setOpen} = ingredientsNavOpen;
    useEffect(() => {
        if (focus !== initSettings.focus) {
            setOpen(true);
        };
    }, [focus]);

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
                dataListState={dataListState}
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
