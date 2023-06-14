import type { stateType } from 'lib/commonPropTypes';
import css from 'styles/HUD/Recipes/Container.module.scss';
import RecipeDataCard from './Card';

type RecipeDataContainerProps = {
    clientRecipeData: object
    error?: any
    loading?: any
    data?: []
    recipeDataVisibility: stateType<boolean>
};

export default function RecipeDataContainer(
    { 
        clientRecipeData, 
        error, 
        loading, 
        data,
        recipeDataVisibility
    }: RecipeDataContainerProps
) {
    if (data) {
        return (
            <div 
                style={ 
                    recipeDataVisibility.value ?
                        { visibility: 'visible' } :
                        { visibility: 'hidden' } 
                    }
                className={ css.data }
            >
                <div 
                    className={ css.screen }
                    onClick={ () => 
                        recipeDataVisibility.setValue(!recipeDataVisibility.value)
                    }
                ></div>
                <div className={ css.wrapper }>
                    <div className={ css.container }>{
                        data.map((item: any, idx: number) => {
                            return (
                                <RecipeDataCard
                                    key={idx}
                                    recipe={item}
                                    availableIngredients={
                                        clientRecipeData[item.id as keyof object]
                                    }
                                />
                            )
                        })
                    }</div>
                </div>
            </div>
        );
    } else {
        return (<></>)
    }
};
