import type { componentSettings } from "lib/componentSettings";
import { useState, useEffect, useRef } from "react";
import css from "styles/Scene.module.scss";
import HUD from "components/HUD Components/HUD";
import Kitchen from "components/Kitchen Components/Kitchen";
import { initSettings, fridgeSettings, pantrySettings } from "lib/componentSettings";

type SceneProps = {
    ingredients: JSX.Element[]
    clientRecipeData: object
};
  
export default function Scene({ ingredients, clientRecipeData }: SceneProps) {
    const [night, setNight] = useState(false);
    const [focus, setFocus] = useState(initSettings.focus);
    const [recipeDataVisibility, setRecipeDataVisibility] = useState(false);
    const [ingredientsNavOpen, setIngredientsNavOpen] = useState(false);
    const [userInput, setUserInput] = useState('')

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

    const fridgeMap = useRef<JSX.Element[]>([]);
    const pantryMap = useRef<JSX.Element[]>([]);
    useEffect(() => {
        fridgeMap.current = []
        pantryMap.current = []
        ingredients.map((ingredient: JSX.Element) => {
            ingredient.props.ingredient.info.refrigerated === true ? 
            fridgeMap.current.push(ingredient) :
            pantryMap.current.push(ingredient)
        });
    }, [ingredients]);

    const [dataList, setDataList] = useState<JSX.Element[]>([]);
    const clickHandler = (settings: componentSettings) => {
        setUserInput('');
        if (focus === settings.focus) {
            changeSettings(initSettings);
        } else {
            changeSettings(settings);
        };

        if (settings === fridgeSettings) setDataList(fridgeMap.current);
        if (settings === pantrySettings) setDataList(pantryMap.current);
    }

    return (
        <div 
            className={ css.scene }
            onKeyDown={(e) => handleKeyPress(e)}
            tabIndex={-1}
        >
            <HUD 
                ingredients={ingredients}
                nightState={{value: night, setValue: setNight}}
                focusState={{value: focus, setValue: setFocus}}
                changeSettings={changeSettings}
                clientRecipeData={clientRecipeData}
                recipeDataVisibility={{
                    value: recipeDataVisibility, 
                    setValue: setRecipeDataVisibility
                }}
                ingredientsNavOpen={{
                    value: ingredientsNavOpen,
                    setValue: setIngredientsNavOpen
                }}
                userInputState={{value: userInput, setValue: setUserInput}}
                dataListState={{value: dataList, setValue: setDataList}}
                clickHandler={clickHandler}
            />
            <Kitchen 
                nightState={{value: night, setValue: setNight}}
                focus={focus}
                pos={pos}
                rot={rot}
                changeSettings={changeSettings}
                clickHandler={clickHandler}
            />
        </div>
    );
};
