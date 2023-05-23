import { stateType } from "lib/commonPropTypes";
import { useState } from "react";
import { initSettings, componentSettings } from "lib/componentSettings";
import css from "styles/Scene.module.scss";
import HUD from "components/HUD Components/HUD";
import Kitchen from "components/Kitchen Components/Kitchen";

type SceneProps = {
    ingredients: JSX.Element[]
    clientRecipeData: object
};
  
export default function Scene({ ingredients, clientRecipeData }: SceneProps) {
    const [night, setNight] = useState(false);
    const nightState: stateType<boolean> = {
        value: night,
        setValue: setNight
    };
    const [focus, setFocus] = useState(initSettings.focus);
    const focusState: stateType<number> = {
        value: focus,
        setValue: setFocus
    };
    const [
        recipeDataVisibility, 
        setRecipeDataVisibility
    ] = useState(false);
    const recipeDataVisibilityState: stateType<boolean> = {
        value: recipeDataVisibility,
        setValue: setRecipeDataVisibility
    };
    const [
        ingredientsNavOpen, 
        setIngredientsNavOpen
    ] = useState(false);
    const ingredientsNavOpenState: stateType<boolean> = {
        value: ingredientsNavOpen,
        setValue: setIngredientsNavOpen
    };
    const [userInput, setUserInput] = useState('')
    const userInputState: stateType<string> = {
        value: userInput,
        setValue: setUserInput
    };

    // position and rotation for the control group component
    const [pos, setPos] = useState(initSettings.pos);
    const [rot, setRot] = useState(initSettings.rot);
    const changeSettings = (settings: componentSettings) => {
        setFocus(settings.focus)
        setPos(settings.pos)
        setRot(settings.rot)
    };

    // ts any usage here        -----------------------------
    const handleKeyPress = (e: any) => {
        if (e.key === 'Escape') {
            if (recipeDataVisibility) {
                setRecipeDataVisibility(false);
                return;
            };
            if (userInput) {
                setUserInput('');
                return;
            };
            if (focus !== initSettings.focus) {
                changeSettings(initSettings);
                return;
            };
            setIngredientsNavOpen(false);
        };
    };

    return (
        <div 
            className={ css.scene }
            onKeyDown={(e) => handleKeyPress(e)}
            tabIndex={-1}
        >
            <HUD 
                ingredients={ingredients}
                nightState={nightState}
                focusState={focusState}
                changeSettings={changeSettings}
                clientRecipeData={clientRecipeData}
                recipeDataVisibility={recipeDataVisibilityState}
                ingredientsNavOpen={ingredientsNavOpenState}
                userInputState={userInputState}
            />
            <Kitchen 
                ingredients={ingredients}
                nightState={nightState}
                focus={focus}
                pos={pos}
                rot={rot}
                changeSettings={changeSettings}
                userInputState={userInputState}
            />
        </div>
    );
};
