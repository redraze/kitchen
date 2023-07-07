import type { stateType } from "lib/commonTypes";
import { useMutation } from "@apollo/client";
import { RECIPE_SEARCH } from 'lib/mutations';
import css from 'styles/HUD/Recipes/Nav.module.scss';
import RecipeDataContainer from "./Container";

type RecipeRequestTabProps = {
    clientRecipeData: object
    buttonVisibility: boolean
    recipeDataVisibility: stateType<boolean>
};

export default function RecipeRequestTab(
    { 
        clientRecipeData, 
        buttonVisibility,
        recipeDataVisibility
    }: RecipeRequestTabProps
) {
    //  useMutation is used here instead of useQuery in order to make
    //  available a function, recipeSearch, that can be called at will
    const [recipeSearch, { error, data, loading }] = useMutation(RECIPE_SEARCH);
    const handler = async () => {
        recipeDataVisibility.setValue(true)
        try {
            await recipeSearch({ 
                variables: { 
                    recipeData: Object.entries(clientRecipeData).map((item) => {
                        return ({id: item[0], amount: item[1]});
                    })
                },
                onError: (error) => {
                    console.log('type 0 error', JSON.stringify(error))
                },
                // onCompleted: (data) => {
                //     console.log('success', data)
                // }
            });
        } catch {
            console.log('type 1 error', error);
        };
    };

    return (<>
        <button
            style={ buttonVisibility ?
                {transform: 'translateX(-50%) translateY(-20%)'} :
                {transform: 'translateX(-50%) translateY(100%)'} }
            className={ css.search }
            onClick={() => handler()}
        >
            <span>Find Recipes!</span>
        </button>
        <RecipeDataContainer
            clientRecipeData={clientRecipeData}
            error={error}
            data={data?.recipeSearch}
            loading={loading}
            recipeDataVisibility={recipeDataVisibility}
        />
    </>)
}