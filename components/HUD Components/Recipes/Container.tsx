import type { ApolloError } from '@apollo/client';
import type { RecipeDataTypeOutput } from 'lib/typeDefsExports';
import type { stateType, filterType } from 'lib/commonTypes';
import css from 'styles/HUD/Recipes/Container.module.scss';
import RecipeDataCard from './Card';
import Spinner from './Spinner';
import Error from './Error';
import Filters from './Filters';
import { useEffect, useState } from 'react';

type RecipeDataContainerProps = {
    clientRecipeData: object
    error?: ApolloError
    loading?: boolean
    data?: RecipeDataTypeOutput[] | undefined
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
    const [filters, setFilters] = useState<filterType>({ meal: {}, cuisine: {} })
    useEffect(() =>{
        setFilters(() => {
            let temp: filterType = { meal: {}, cuisine: {} };
            data?.map((item: RecipeDataTypeOutput) => {
                temp.cuisine[item.filters.cuisine as keyof object] = false;
                temp.meal[item.filters.meal as keyof object] = false;
            });
            return temp;
        });
    }, [data]);
        
    const dataMap = () => {
        if (!error && loading) {
            return <Spinner />
        } else if (!error && !loading && data) {
            return data?.map((item: RecipeDataTypeOutput, idx: number) => {
                const availableIngredients = clientRecipeData[item.id as keyof object];
                const cookabilityScore = availableIngredients / item.info.totalIngredients * 100;

                return (
                    <RecipeDataCard
                        key={idx}
                        recipe={item}
                        cookabilityScore={cookabilityScore.toFixed(0)}
                    />
                );
            }).sort((a: JSX.Element, b: JSX.Element) => {
                return b.props.cookabilityScore - a.props.cookabilityScore;
            });
            // TODO: filter dataMap
        };
        return <Error />;
    };

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
            <div
                className={ css.wrapper }
                style={
                    error || loading || !recipeDataVisibility.value ?
                        { width: '140px', height: '140px', transition: 'width 0s, height 0s' } :
                        { width: '80%', height: '90vh', transition: 'width 0.5s, height 0.5s' }
                }
            >
                <div className={ css.filters }>
                    { 
                        !error && !loading && data ?
                            Object.entries(filters).map((item, idx) => {
                                return (
                                    <Filters 
                                        key={idx} 
                                        filter={item[0]} 
                                        catagories={item[1]}
                                        filterState={{ value: filters, setValue: setFilters}}
                                    />
                                );
                            }) :
                            <></>
                    }
                </div>
                <div className={ css.container }>
                    { dataMap() }
                </div>
            </div>
        </div>
    );
};
