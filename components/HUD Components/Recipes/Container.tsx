import type { ApolloError } from '@apollo/client';
import type { RecipeDataTypeOutput } from 'lib/typeDefsExports';
import type { stateType } from 'lib/commonTypes';
import css from 'styles/HUD/Recipes/Container.module.scss';
import RecipeDataCard from './Card';
import Spinner from './Spinner';
import Error from './Error';

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
    const calcDataMap = () => {
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
        } else {
            return <Error />
        };
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
                        { width: '140px', height: '140px', transition: '' } :
                        { width: '80%', height: '90vh', transition: 'width 0.5s, height 0.5s' }
                }
            >
                {/* <div className={ css.filters }>
                    TODO
                </div> */}
                <div className={ css.container }>
                    { calcDataMap() }
                </div>
            </div>
        </div>
    );
};
