import type { ApolloError } from '@apollo/client';
import type { RecipeDataTypeOutput } from 'lib/typeDefsExports';
import type {
    stateType,
    filterType,
    voidFunc,
    clientDataType
} from 'lib/commonTypes';
import type { Dispatch, SetStateAction } from 'react';
import type { componentSettings } from 'lib/settings';
import { useEffect, useState } from 'react';
import { calcCookabilityScore, sortByCookabilityScore } from 'lib/functions';
import Image from 'next/image';
import css from 'styles/HUD/Recipes/Results.module.scss';
import RecipeDataCard from './Card';
import Spinner from './Spinner';
import Error from './Error';
import Filters from './Filters';

type ResultsProps = {
    clientRecipeData: clientDataType
    error?: ApolloError
    loading?: boolean
    data?: RecipeDataTypeOutput[] | undefined
    recipeDataVisibilityState: stateType<boolean>
    recipeResultsVisibilityState: stateType<boolean>
    setDisplayRecipe: Dispatch<SetStateAction<string>>
    changeSettings: voidFunc<componentSettings>
};

export default function Results(
    { 
        clientRecipeData, 
        error, 
        loading, 
        data,
        recipeDataVisibilityState,
        recipeResultsVisibilityState,
        setDisplayRecipe,
        changeSettings
    }: ResultsProps
) {
    const [dataMap, setDataMap] = useState<JSX.Element[] | JSX.Element | undefined>([]);
    const [filters, setFilters] = useState<filterType<string[]>>({ meal: [], cuisine: [] });
    const [activeFilters, setActiveFilters] = useState<filterType<string>>({ meal: '', cuisine: '' });

    useEffect(() =>{
        if (error) {
            setDataMap(<Error />);
            return;
        } else if (!error && !loading && data) {
            let tempFilters: filterType<{}> = { meal: {}, cuisine: {} };
            setDataMap(() => {
                return data.map((recipe: RecipeDataTypeOutput, idx: number) => {
                    Object.entries(recipe.filters).map(([filter, catagory]) => {
                        if (filter == '__typename') return;
                        // @ts-ignore
                        tempFilters[filter as keyof object][catagory as keyof object] = 1;
                    });

                    return (
                        <RecipeDataCard
                            key={idx}
                            recipe={recipe}
                            cookabilityScore={ calcCookabilityScore(
                                clientRecipeData[recipe.id as keyof object],
                                recipe.info.totalIngredients
                            )}
                            active={true}
                            setDisplayRecipe={setDisplayRecipe}
                            recipeDataVisibilityState={recipeDataVisibilityState}
                            recipeResultsVisibilityState={recipeResultsVisibilityState}
                            changeSettings={changeSettings}
                        />
                    );
                }).sort(sortByCookabilityScore);
            });

            setActiveFilters({ meal: '', cuisine: '' });
            setFilters(() => {
                let temp: filterType<string[]> = { meal: [], cuisine: [] }
                Object.entries(tempFilters).map(([filter, catagories]) => {
                    Object.entries(catagories).map(([catagory, _num]) => {
                        // @ts-ignore
                        temp[filter as keyof object] = [
                            ...temp[filter as keyof object],
                            catagory
                        ];
                    });
                });
                return temp;
            });
            return;
        };
        setDataMap(<Spinner />);
    }, [data]);

    const notFilteredOut = (recipeFilters: [filter: string, catagory: string][]) => {
        return recipeFilters.every(([filter, catagory]) => {
            if (
                filter == '__typename' 
                || activeFilters[filter as keyof object] == ''
                || activeFilters[filter as keyof object] == catagory
            ) return true;
            return false;
        });
    };

    const filterData = () => {
        setDataMap(() => {
            return data?.map((recipe: RecipeDataTypeOutput, idx: number) => {
                return (
                    <RecipeDataCard
                        key={idx}
                        recipe={recipe}
                        cookabilityScore={ calcCookabilityScore(
                            clientRecipeData[recipe.id as keyof object],
                            recipe.info.totalIngredients
                        )}
                        active={notFilteredOut(Object.entries(recipe.filters))}
                        setDisplayRecipe={setDisplayRecipe}
                        recipeDataVisibilityState={recipeDataVisibilityState}
                        recipeResultsVisibilityState={recipeResultsVisibilityState}
                        changeSettings={changeSettings}
                    />
                );
            }).sort(sortByCookabilityScore);
        });
    };

    const { value: resultsVis, setValue: setResultsVis } = recipeResultsVisibilityState;
    const [filterDisplay, setFilterDisplay] = useState(false);

    useEffect(() => {
        if (!resultsVis) setFilterDisplay(false);
        setActiveFilters({ meal: '', cuisine: '' });
        filterData();
    }, [resultsVis]);

    return (
        <div 
            style={ resultsVis ? { visibility: 'visible' } : { visibility: 'hidden' } }
            className={ css.data }
        >
            <div 
                className={ css.screen }
                onClick={ () => setResultsVis(!resultsVis) }
            ></div>
            <div
                className={ css.container }
                style={ !resultsVis ?
                    { width: '140px', height: '140px', transition: 'width 0s, height 0s' } :
                    { width: '80%', height: '90vh', transition: 'width 0.5s, height 0.5s' }
                }
            >
                <button
                    onClick={ () => setResultsVis(false) }
                    className={ css.closeButton }
                    style={ !resultsVis ? { display: 'none' } : {} }
                >
                    <Image
                        src={'/Icons/Close.png'}
                        alt='X'
                        height={35 * 3/2}
                        width={35 * 3/2}
                    />
                </button>
                <div
                    className={ !filterDisplay ?
                        css.filtersWrapper :
                        [css.filtersWrapper, css.filtersWrapperActive].join(' ')
                    }
                    style={ !resultsVis ? { display: 'none' } : {} }
                >
                    <button 
                        onClick={ () => setFilterDisplay(!filterDisplay) } 
                        className={ css.filterButton }
                    >
                        <Image
                            src={'/Icons/Filter.png'}
                            alt='Filters:'
                            height={35 * 3/2}    
                            width={35 * 3/2}    
                        />
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {
                            Object.entries(filters).map(([filter, catagories], idx) => {
                                return (
                                    <Filters
                                        key={idx}
                                        filter={filter}
                                        catagories={catagories}
                                        activeFilterState={{
                                            value: activeFilters,
                                            setValue: setActiveFilters
                                        }}
                                        filterData={filterData}
                                        active={filterDisplay}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
                <div 
                    className={ css.results } 
                    style={ recipeResultsVisibilityState.value ? 
                        {display: ''} : {display: 'none'}
                    }
                >
                    { dataMap }
                </div>
            </div>
        </div>
    );
};
