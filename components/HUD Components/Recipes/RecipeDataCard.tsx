import Link from "next/link"
import css from 'styles/RecipeDataCard.module.scss';

type RecipeDataCardProps = {
    recipe: any
    availableIngredients: number
}

export default function RecipeDataCard({ recipe, availableIngredients }: RecipeDataCardProps) {
    const cookabilityScore = availableIngredients/recipe.info.totalIngredients*100
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
                <h3>{recipe.info.description}</h3>
            </div>
            <div className={ css.score }>
                Cookability: { parseFloat(cookabilityScore.toString()).toFixed(0) + '%' }
            </div>
        </Link>
    </>)
}