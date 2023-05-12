import { useEffect, useState } from "react";
import css from "styles/IngredientsNav.module.scss";
import Button from "./Button";
import {
    componentSettings,
    fridgeSettings,
    initSettings,
    pantrySettings
} from "lib/componentSettings";
import IngredientsTab from "./IngredientsTab";
import RecipeRequestNav from "./RecipeRequestNav";

type IngredientsNavProps = {
    ingredients: JSX.Element[]
    focus: number
    changeSettings: (params: componentSettings) => void
    clientRecipeData: object
};

export default function IngredientsNav(
    { 
        ingredients, 
        focus, 
        changeSettings,
        clientRecipeData
    }: IngredientsNavProps
) {
    const toggleSettings = (settings: componentSettings) => {
        if (focus === settings.focus) {
            changeSettings(initSettings);
        } else {
            changeSettings(settings);
        };
    };

    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (focus !== initSettings.focus) {
            setOpen(true);
        };
    }, [focus]);

    //  Force RecipeRequestNav to re-render when clientRecipeData changes
    const [visible, setVisible] = useState(false);
    const forceReRender = () => {
        if (JSON.stringify(clientRecipeData) !== JSON.stringify({})) {
            setVisible(true);
        } else {
            setVisible(false);
        };
    };

    return (<>
        <div 
            className={ css.ingredientsNav } 
            style={{ right: open ? '80%' : '100%' }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => {
                if (focus === initSettings.focus) {
                    setOpen(false);
                };
            }}
            onClick={() => forceReRender()}
            // onKeyDown={(e) => handleKeyPress(e)}
        >
            <Button openState={{bool: open, setBool: setOpen}} left/>
            <ul>
                <li 
                    onClick={() => toggleSettings(fridgeSettings)}
                    style={{ borderLeft:
                        focus === fridgeSettings.focus ?
                            'solid 8px white' :
                            'solid 0px white'
                    }}
                >
                    <span>Refridgerated Ingredients</span>
                </li>
                <li
                    onClick={() => toggleSettings(pantrySettings)}
                    style={{ borderLeft:
                        focus === pantrySettings.focus ?
                            'solid 8px white' :
                            'solid 0px white'
                    }}
                >
                    <span>Unrefrigerated Ingredients</span>
                </li>
            </ul>
            <IngredientsTab 
                ingredients={ingredients}
                focus={focus}
            />
        </div>
        <RecipeRequestNav clientRecipeData={clientRecipeData} visible={visible} />
    </>);
};
