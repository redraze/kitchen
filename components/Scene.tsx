import { boolStateType, numStateType } from "lib/commonPropTypes";
import { useState } from "react";
import { initSettings } from "lib/componentSettings";
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

    return(
        <div className={ css.scene }>
            <HUD 
                nightState={nightState}
                focusState={focusState}
                ingredients={ingredients}
            />
            <Kitchen 
                nightState={nightState}
                focusState={focusState}
                ingredients={ingredients}
            />
        </div>
    );
};
