import type { RecipeDataTypeOutput } from "lib/typeDefsExports";
import { useState } from "react";
import Link from "next/link"
import css from 'styles/HUD/Recipes/Card.module.scss';

type RecipeDataCardProps = {
    recipe: RecipeDataTypeOutput
    cookabilityScore: string
}

export default function RecipeDataCard({ recipe, cookabilityScore }: RecipeDataCardProps) {
    const [opacity, setOpacity] = useState(0);
    setTimeout(() => {
        setOpacity(1);
    }, 500);

    return (<>
        <Link
            className={ css.link } 
            href={{
                pathname: "/recipes/[id]",
                query: {
                    id: recipe.id,
                }
            }}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className={ css.info }>
                <h1>{recipe.info.name}</h1>
                <h3 style={{ opacity: opacity }}>{recipe.info.description}</h3>
            </div>
            <div className={ css.score }>
                Cookability:
                <span>{ cookabilityScore + '%' }</span>
            </div>
        </Link>
    </>)
}