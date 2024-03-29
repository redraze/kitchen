import type { RecipeDataTypeOutput } from "lib/typeDefsExports";
import type { stateType, voidFunc } from "lib/commonTypes";
import {
    type Dispatch, type SetStateAction,
    useEffect, useRef, useState
} from "react";
import { stoveSettings, type componentSettings } from "lib/settings";
import css from 'styles/HUD/Recipes/Card.module.scss';

type RecipeDataCardProps = {
    recipe: RecipeDataTypeOutput
    cookabilityScore: string
    active: boolean
    setDisplayRecipe: Dispatch<SetStateAction<string>>
    recipeDataVisibilityState: stateType<boolean>,
    recipeResultsVisibilityState: stateType<boolean>
    changeSettings: voidFunc<componentSettings>
}

export default function RecipeDataCard(
    {
        recipe,
        cookabilityScore,
        active,
        setDisplayRecipe,
        recipeDataVisibilityState,
        recipeResultsVisibilityState,
        changeSettings
    }: RecipeDataCardProps
) {
    const ref = useRef<any>();
    const [height, setHeight] = useState<string>('min-height');
    useEffect(() => {
        if (ref.current) setHeight(ref.current.clientHeight);
    }, []);
    
    const [onLoadOpacity, setonLoadOpacity] = useState(0);
    setTimeout(() => {
        setonLoadOpacity(1);
    }, 500);

    const handler = () => {
        setDisplayRecipe(recipe.id);
        recipeDataVisibilityState.setValue(true);
        recipeResultsVisibilityState.setValue(false);
        changeSettings(stoveSettings);
    };

    return (
        <div
            style={ active ?
                {
                    opacity: '1',
                    height: height,
                    transition: 'height 0.25s, opacity 0.25s cubic-bezier(0.95, 0.05, 0.795, 0.035)'
                } :
                {
                    opacity: '0',
                    height: '0px',
                    transition: 'height 0.25s, opacity 0.25s cubic-bezier(0.075, 0.82, 0.165, 1)'
                }
            }
        >
            <div
                ref={ref}
                className={ css.link }
                style={ active ? {visibility: 'visible'} : {visibility: 'hidden'} }
                onClick={ () => handler() }
            >
                <div className={ css.info }>
                    <h1>{recipe.info.name}</h1>
                    <h3 style={{ opacity: onLoadOpacity }}>{recipe.info.description}</h3>
                </div>
                <div className={ css.score }>
                    Cookability:
                    <span>{ cookabilityScore + '%' }</span>
                </div>
            </div>
        </div>
    );
};
