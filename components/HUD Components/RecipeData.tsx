import css from 'styles/RecipeData.module.scss';
// import Spinner from '...';

type RecipeDataProps = {
    error?: any
    loading?: any
    data?: any
};

export default function RecipeData({ error, loading, data }: RecipeDataProps) {
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
    } else {
        return (
            <div className={ css.data }>

            </div>
        );
    }
};
