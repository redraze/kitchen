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

    const [dataList, setDataList] = useState<JSX.Element[]>([]);
    const {value: userInput, setValue: setUserInput} = userInputState;
    const handler = (e: any) => {
        setUserInput(e.target.value);
        changeSettings(initSettings);

        let temp: JSX.Element[] = [];
        ingredients.map(item => {
            if (item.props.ingredient.info.name.includes(e.target.value)) {
                temp = [...temp, item];
            };
        });
        return temp;
    };

    return (<>
        <div className={ css.search }>
            <input 
                placeholder="Search all ingredients..."
                onChange={e => setDataList(handler(e))}
                value={userInput}
            />
            <button onClick={() => setUserInput('')}>Clear</button>
        </div>
        <div 
            className={ 
                focus !== initSettings.focus || userInput ? 
                    [css.tab, css.tab_focus].join(' ') : 
                    css.tab
            }
        >
            <div className={
                userInput !== '' ? 
                    [css.data, css.focus].join(' ') :
                    css.data
                }
            >
                <div className={ css.wrapper }>
                    {dataList}
                </div>
            </div>
            <div className={
                focus === fridgeSettings.focus ? 
                    [css.data, css.focus].join(' ') :
                    css.data
                }
            >
                <div className={ css.wrapper }>
                    {fridgeMap.current}
                </div>
            </div>
            <div className={
                focus === pantrySettings.focus ? 
                    [css.data, css.focus].join(' ') :
                    css.data
                }
            >
                <div className={ css.wrapper }>
                    {pantryMap.current}
                </div>
            </div>
        </div>
    </>);
};
