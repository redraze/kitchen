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

    if (focus === fridgeSettings.focus) {
        return (
            <div 
                className={ css.tab }
                style={{height: focus !== initSettings.focus ? '100%' : '0%'}}
            >
                {fridgeMap}
            </div>
        );
    } else if (focus === pantrySettings.focus) {
        return (
            <div 
                className={ css.tab }
                style={{height: focus !== initSettings.focus ? '100%' : '0%'}}
            >
                {pantryMap}
            </div>
        );
    } else {
        return (
            <div 
                className={ css.tab }
                style={{height: focus !== initSettings.focus ? '100%' : '0%'}}
            ></div>
        );
    };
};
