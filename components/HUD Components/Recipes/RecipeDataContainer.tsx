import css from 'styles/RecipeDataContainer.module.scss';
import RecipeDataCard from './RecipeDataCard';
import { boolStateType } from 'lib/commonPropTypes';

type RecipeDataContainerProps = {
    clientRecipeData: object
    error?: any
    loading?: any
    data?: []
    recipeDataVisibility: boolStateType
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
                    recipeDataVisibility.bool ?
                        { visibility: 'visible' } :
                        { visibility: 'hidden' } 
                    }
                className={ css.data }
            >
                <div 
                    className={ css.screen }
                    onClick={ () => 
                        recipeDataVisibility.setBool(!recipeDataVisibility.bool)
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
