import { boolStateType, numStateType } from "lib/commonPropTypes";
import { useState } from "react";
import { initSettings, componentSettings } from "lib/componentSettings";
import css from "styles/Scene.module.scss";
import HUD from "components/HUD Components/HUD";
import Kitchen from "components/Kitchen Components/Kitchen";

type SceneProps = {
    ingredients: JSX.Element[]
};
  
export default function Scene({ ingredients }: SceneProps) {
    const [night, setNight] = useState(false);
    const nightState: boolStateType = {
        bool: night,
        setBool: setNight
    };
    const [focus, setFocus] = useState(initSettings.focus);
    const focusState: numStateType = {
        num: focus,
        setNum: setFocus
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
            changeSettings(initSettings);
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
            />
            <Kitchen 
                ingredients={ingredients}
                nightState={nightState}
                focus={focus}
                pos={pos}
                rot={rot}
                changeSettings={changeSettings}
            />
        </div>
    );
};
