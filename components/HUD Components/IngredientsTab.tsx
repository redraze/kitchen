import css from "styles/IngredientsTab.module.scss";
import { initSettings, fridgeSettings, pantrySettings } from "lib/componentSettings";

type IngredientsTabProps = {
    ingredients: JSX.Element[]
    focus: number
}

export default function IngredientsTab({ ingredients, focus }: IngredientsTabProps) {
    let fridgeMap: JSX.Element[] = [];
    let pantryMap: JSX.Element[] = [];
    ingredients.map((ingredient: JSX.Element) => {
        ingredient.props.ingredient.refrigerated === true ? 
        fridgeMap = [...fridgeMap, ingredient] :
        pantryMap = [...pantryMap, ingredient]
    });

    return (
        <div 
            className={ css.tab }
            style={{height: focus !== initSettings.focus ? '100%' : '0%'}}
        >
            <div className={focus === fridgeSettings.focus ? css.focus : ''}>
                {fridgeMap}
            </div>
            <div className={focus === pantrySettings.focus ? css.focus : ''}>
                {pantryMap}
            </div>
        </div>
    );
};
