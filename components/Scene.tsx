import type { clientDataType, containerDataType } from "lib/commonTypes";
import type { componentSettings } from "lib/settings";
import type { KeyboardEvent } from "react";
import { useState, useEffect, useRef } from "react";
import css from "styles/Scene.module.scss";
import HUD from "components/HUD Components/HUD";
import Kitchen from "components/Kitchen Components/Kitchen";
import { initSettings, fridgeSettings, pantrySettings } from "lib/settings";

type SceneProps = {
    ingredients: JSX.Element[]
    clientRecipeData: clientDataType
    clientContainerData: containerDataType
    resetData: () => void
};

export default function Scene(
    {
        ingredients,
        clientRecipeData,
        clientContainerData,
        resetData
    }: SceneProps
) {
    const [space, setSpace] = useState(false);
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

    const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
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

    const [dataList, setDataList] = useState<(JSX.Element | undefined)[]>([]);
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

    const [render, setRender] = useState(0);
    return (
        <div 
            className={ css.scene }
            onKeyDown={(e) => handleKeyPress(e)}
            tabIndex={-1}
        >
            <HUD 
                ingredients={ingredients}
                spaceState={{ value: space, setValue: setSpace }}
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
                reRender={{ value: render, setValue: setRender }}
                resetData={resetData}
            />
            <Kitchen 
                spaceState={{ value: space, setValue: setSpace }}
                focus={focus}
                pos={pos}
                rot={rot}
                changeSettings={changeSettings}
                clickHandler={clickHandler}
                clientContainerData={clientContainerData}
            />
        </div>
    );
};
