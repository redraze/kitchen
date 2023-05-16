import css from "styles/IngredientsTab.module.scss";
import { initSettings, fridgeSettings, pantrySettings } from "lib/componentSettings";
import { useEffect, useRef, useState } from "react";

type IngredientsTabProps = {
    ingredients: JSX.Element[]
    focus: number
}

export default function IngredientsTab({ ingredients, focus }: IngredientsTabProps) {
    const [render, setRender] = useState(0);
    const fridgeMap = useRef<JSX.Element[]>([]);
    const pantryMap = useRef<JSX.Element[]>([]);
    useEffect(() => {
        setRender(render + 1)
        fridgeMap.current = []
        pantryMap.current = []
        ingredients.map((ingredient: JSX.Element) => {
            ingredient.props.ingredient.info.refrigerated === true ? 
            fridgeMap.current.push(ingredient) :
            pantryMap.current.push(ingredient)
        });
    }, [ingredients]);

    return (
        <div 
            className={ css.tab }
            style={{height: focus !== initSettings.focus ? '100%' : '0%'}}
        >
            <div className={focus === fridgeSettings.focus ? css.focus : ''}>
                {fridgeMap.current}
            </div>
            <div className={focus === pantrySettings.focus ? css.focus : ''}>
                {pantryMap.current}
            </div>
        </div>
    );
};
