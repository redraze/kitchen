import type { ApolloError } from '@apollo/client';
import type { RecipeDataTypeOutput } from 'lib/typeDefsExports';
import type { stateType, filterType } from 'lib/commonTypes';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
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
    const [dataMap, setDataMap] = useState<JSX.Element[] | JSX.Element | undefined>([]);
    useEffect(() => {  }, [recipeDataVisibility]);
    const [filters, setFilters] = useState<filterType<string[]>>({ meal: [], cuisine: [] });
    const [activeFilters, setActiveFilters] = useState<filterType<string>>({ meal: '', cuisine: '' });
    const [uuidMap, setUuidMap] = useState<{[uid: string]: boolean}>({})

    useEffect(() =>{
        if (error) {
            setDataMap(<Error />);
            return;
        } else if (!error && !loading && data) {
            let tempFilters: filterType<{}> = { meal: {}, cuisine: {} };
            let tempDataMap: JSX.Element[] = [];
            let tempUuidMap: {[uid: string]: boolean} = {};

            data.map((item: RecipeDataTypeOutput) => {
                const uid = uuidv4();
                tempUuidMap[uid as keyof object] = true;

                const availableIngredients = clientRecipeData[item.id as keyof object];
                const cookabilityScore = availableIngredients / item.info.totalIngredients * 100;
                tempDataMap.push(
                    <RecipeDataCard
                        key={uid}
                        recipe={item}
                        cookabilityScore={ cookabilityScore.toFixed(0) }
                        // active={uuidMap[uid]}
                        active={true}
                    />
                );

                Object.entries(item.filters).map(([filter, catagory]) => {
                    if (filter == '__typename') return;
                    // @ts-ignore
                    tempFilters[filter as keyof object][catagory as keyof object] = 1;
                });
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
            setUuidMap(tempUuidMap);
            setDataMap(() => {
                return tempDataMap.sort((a: JSX.Element, b: JSX.Element) => {
                    return b.props.cookabilityScore - a.props.cookabilityScore;
                });
            });
            return;
        };
        setDataMap(<Spinner />);
    }, [data]);

    const filterData = () => {
        // TODO:    replace dataMap with a filtered dataMap
    };

    const [filterDisplay, setFilterDisplay] = useState(false);
    useEffect(() => { 
        setFilterDisplay(false);
        setDataMap(<Spinner />);
    }, [recipeDataVisibility]);

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
                    <Image
                        src={'/CloseIcon.png'}
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
                    style={ error || loading || !recipeDataVisibility.value ? { display: 'none' } : {} }
                >
                    <button 
                        onClick={ () => setFilterDisplay(!filterDisplay) } 
                        className={ css.filterButton }
                    >
                        <Image
                            src={'/FilterIcon.png'}
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
                <div className={ css.results }>
                    { dataMap }
                </div>
            </div>
        </div>
    );
};
