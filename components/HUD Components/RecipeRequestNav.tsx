import { useMutation } from "@apollo/client";
import { RECIPE_SEARCH } from 'lib/mutations';
import css from 'styles/RecipeRequestNav.module.scss';
import RecipeData from "./RecipeData";

type RecipeRequestNavProps = {
    clientRecipeData: object
    visible: boolean
};

export default function RecipeRequestNav({ clientRecipeData, visible }: RecipeRequestNavProps) {
    //  useMutation is used here instead of useQuery in order to make
    //  available a function, recipeSearch, that can be called at will
    const [recipeSearch, { error, data, loading }] = useMutation(
        RECIPE_SEARCH, 
        { 
            variables: { 
                recipeData: Object.entries(clientRecipeData).map((item) => {
                    return ({id: item[0], amount: item[1]});
                })
            },
            onError: (error) => {
                console.log('type 0 error', JSON.stringify(error))
            },
            onCompleted: (data) => {
                console.log('success', data)
            }
        }
    );
    const handler = () => {
        try {
            recipeSearch();
        } catch {
            console.log('type 1 error', error);
        };
    };

    return (<>
        <button
            style={ visible ?
                {transform: 'translateX(-50%) translateY(-20%)'} :
                {transform: 'translateX(-50%) translateY(100%)'} }
            className={ css.search }
            onClick={() => handler()}
        >
            Find Recipes!
        </button>
        <RecipeData 
            error={error} 
            data={data} 
            loading={loading}
        />
    </>)
}