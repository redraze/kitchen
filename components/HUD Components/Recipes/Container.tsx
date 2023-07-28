import type { ApolloError } from '@apollo/client';
import type { RecipeDataTypeOutput } from 'lib/typeDefsExports';
import type { stateType, filterType } from 'lib/commonTypes';
import { useEffect, useState } from 'react';
import css from 'styles/HUD/Recipes/Container.module.scss';
import RecipeDataCard from './Card';
import Spinner from './Spinner';
import Error from './Error';
import Filters from './Filters';

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
    const [filters, setFilters] = useState<filterType>({ active: 0, meal: {}, cuisine: {} });
    const [dataMap, setDataMap] = useState<JSX.Element[] | JSX.Element>([]);

    useEffect(() => {
        setDataMap(<Spinner />);
    }, [recipeDataVisibility]);

    useEffect(() =>{
        if (!error && !loading && data) {
            setFilters(() => {
                let temp: filterType = { active: 0, meal: {}, cuisine: {} };
                data.map((item: RecipeDataTypeOutput) => {
                    temp.cuisine[item.filters.cuisine as keyof object] = false;
                    temp.meal[item.filters.meal as keyof object] = false;
                });
                return temp;
            });
        };
        renderDataMap();
    }, [data]);

    const renderDataMap = () => {
        if (error) {
            setDataMap(<Error />);
            return;
        } else if (!error && !loading && data) {
            setDataMap(() => {
                let temp: JSX.Element[] = data.map((item: RecipeDataTypeOutput, idx: number) => {
                    const availableIngredients = clientRecipeData[item.id as keyof object];
                    const cookabilityScore = availableIngredients / item.info.totalIngredients * 100;

                    return (
                        <RecipeDataCard
                            key={idx}
                            recipe={item}
                            cookabilityScore={ cookabilityScore.toFixed(0) }
                            active={true}
                        />
                    );
                }).sort((a: JSX.Element, b: JSX.Element) => {
                    return b.props.cookabilityScore - a.props.cookabilityScore;
                });
                
                if (filters.active == 0) {
                    return temp;
                };
                
                return (
                    temp.map((recipeElement: JSX.Element, idx: number) => {
                        let active: boolean = false;
                        Object.entries(recipeElement.props.recipe.filters).map(recipeFilter => {
                            if (recipeFilter[0] == '__typename') {
                                return;
                            } else if (filters[recipeFilter[0] as keyof object][recipeFilter[1] as keyof object]) {
                                active = true;
                                return;
                            };
                        });

                        return(
                            <RecipeDataCard
                                key={idx}
                                recipe={recipeElement.props.recipe}
                                cookabilityScore={recipeElement.props.cookabilityScore}
                                active={active}
                            />
                        );
                    })
                );
            });
            return;
        };
        setDataMap(<Spinner />);
    };

    const [filterDisplay, setFilterDisplay] = useState(false);
    useEffect(() => {
        setFilterDisplay(false);
    }, [recipeDataVisibility.value]);

    return (
        <div 
            style={ recipeDataVisibility.value ?
                { visibility: 'visible' } :
                { visibility: 'hidden' } 
            }
            className={ css.data }
        >
            <div 
                className={ css.screen }
                onClick={ () => recipeDataVisibility.setValue(!recipeDataVisibility.value) }
            ></div>
            <div
                className={ css.container }
                style={ error || loading || !recipeDataVisibility.value ?
                    { width: '140px', height: '140px', transition: 'width 0s, height 0s' } :
                    { width: '80%', height: '90vh', transition: 'width 0.5s, height 0.5s' }
                }
            >
                <button
                    onClick={ () => recipeDataVisibility.setValue(false) }
                    className={ css.closeButton }
                    style={ error || loading || !recipeDataVisibility.value ? { display: 'none' } : {} }
                >
                    <img src={'/CloseIcon.png'} alt='X' />
                </button>
                <div
                    className={ !filterDisplay ?
                        css.filtersWrapper :
                        [css.filtersWrapper, css.filtersWrapperActive].join(' ')
                    }
                    style={ error || loading || !recipeDataVisibility.value ? { display: 'none' } : {} }
                >
                    <button 
                        onClick={ () => setFilterDisplay(!filterDisplay) } 
                        className={ css.filterButton }
                    >
                        <img src={'/FilterIcon.png'} alt='Filters:' />
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {
                            Object.entries(filters).map((item, idx) => {
                                if (typeof item[1] == 'number') return;
                                return (
                                    <Filters
                                        key={idx}
                                        filter={item[0]}
                                        catagories={item[1]}
                                        filterState={{ value: filters, setValue: setFilters }}
                                        active={filterDisplay}
                                        renderDataMap={renderDataMap}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
                <div className={ css.results }>
                    { dataMap }
                </div>
            </div>
        </div>
    );
};
