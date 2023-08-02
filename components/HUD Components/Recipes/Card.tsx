import type { RecipeDataTypeOutput } from "lib/typeDefsExports";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link"
import css from 'styles/HUD/Recipes/Card.module.scss';
import { stateType } from "lib/commonTypes";

type RecipeDataCardProps = {
    recipe: RecipeDataTypeOutput
    cookabilityScore: string
    active: boolean
    setDisplayRecipe: Dispatch<SetStateAction<string>>
    recipeDataVisibilityState: stateType<boolean>,
    recipeResultsVisibilityState: stateType<boolean>
}

export default function RecipeDataCard(
    {
        recipe,
        cookabilityScore,
        active,
        setDisplayRecipe,
        recipeDataVisibilityState,
        recipeResultsVisibilityState
    }: RecipeDataCardProps
) {
    const ref = useRef<any>();
    const [height, setHeight] = useState<string>('min-height');
    useEffect(() => {
        if (ref.current) setHeight(ref.current.clientHeight);
    });
    
    const [onLoadOpacity, setonLoadOpacity] = useState(0);
    setTimeout(() => {
        setonLoadOpacity(1);
    }, 500);

    const handler = () => {
        setDisplayRecipe(recipe.id);
        recipeDataVisibilityState.setValue(true);
        recipeResultsVisibilityState.setValue(false);
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
            <Link
                ref={ref}
                className={ css.link }
                href={{
                    pathname: "/recipes/[id]",
                    query: {
                        id: recipe.id,
                    }
                }}
                target="_blank"
                rel="noopener noreferrer"
                style={ active ? {visibility: 'visible'} : {visibility: 'hidden'} }
                onClick={ (e) => { e.preventDefault(), handler() } }
            >
                <div className={ css.info }>
                    <h1>{recipe.info.name}</h1>
                    <h3 style={{ opacity: onLoadOpacity }}>{recipe.info.description}</h3>
                </div>
                <div className={ css.score }>
                    Cookability:
                    <span>{ cookabilityScore + '%' }</span>
                </div>
            </Link>
        </div>
    );
};
