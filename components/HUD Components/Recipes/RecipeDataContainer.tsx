import css from 'styles/RecipeDataContainer.module.scss';
import RecipeDataCard from './RecipeDataCard';
import { useState } from 'react';
import { boolStateType } from 'lib/commonPropTypes';
// import Spinner from '...';

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
    if (error) {
        return (
            <div className={ css.error }>

            </div>
        )
    } else if (loading) {
        return (
            <div className={ css.loading }>
                {/* <Spinner/> */}
            </div>
        );
    } else if (data) {
        return (
            <div 
                className={ css.data }
                style={ recipeDataVisibility.bool ?
                    { visibility: 'visible' } :
                    { visibility: 'hidden' } }
            >
                <div className={ css.container }>{
                    data.map((item: any, idx: number) => {
                        return (
                            <RecipeDataCard
                                key={idx}
                                recipe={item}
                                availableIngredients={clientRecipeData[item.id as keyof object]}
                            />
                        )
                    })
                }</div>
            </div>
        );
    } else {
        return (<></>)
    }
};
