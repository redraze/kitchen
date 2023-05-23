import css from "styles/HUD/Ingredients/Tab.module.scss";
import { 
    initSettings, 
    fridgeSettings, 
    pantrySettings, 
    componentSettings 
} from "lib/componentSettings";
import { useEffect, useRef, useState } from "react";
import { stateType } from "lib/commonPropTypes";

type IngredientsTabProps = {
    ingredients: JSX.Element[]
    focus: number
    userInputState: stateType<string>
    changeSettings: (params: componentSettings) => void
}

export default function IngredientsTab(
    { 
        ingredients, 
        focus,
        userInputState,
        changeSettings
    }: IngredientsTabProps
) {
    const fridgeMap = useRef<JSX.Element[]>([]);
    const pantryMap = useRef<JSX.Element[]>([]);
    useEffect(() => {
        fridgeMap.current = []
        pantryMap.current = []
        ingredients.map((ingredient: JSX.Element) => {
            ingredient.props.ingredient.info.refrigerated === true ? 
            fridgeMap.current.push(ingredient) :
            pantryMap.current.push(ingredient)
        });
    }, [ingredients]);

    const [dataList, setDataList] = useState([])
    const {value: userInput, setValue: setUserInput} = userInputState;
    const handler = (e: any) => {
        setUserInput(e.target.value);
        changeSettings(initSettings);

        //  TODO: compile ingredients search results
    };

    return (<>
        <div className={ css.search }>
            <form onSubmit={e => {e.preventDefault()}}>
                <input 
                    placeholder="Search all ingredients..."
                    onChange={e => handler(e)}
                    value={userInput}
                />
                <button onClick={() => setUserInput('')}>Clear</button>
            </form>
        </div>
        <div 
            className={ 
                focus !== initSettings.focus || userInput ? 
                    [css.tab, css.tab_focus].join(' ') : 
                    css.tab
            }
        >
            <div className={userInput !== '' ? css.focus : ''}>
                {dataList}
            </div>
            <div className={focus === fridgeSettings.focus ? css.focus : ''}>
                {fridgeMap.current}
            </div>
            <div className={focus === pantrySettings.focus ? css.focus : ''}>
                {pantryMap.current}
            </div>
        </div>
    </>);
};
