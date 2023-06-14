import type { stateType } from "lib/commonPropTypes";
import type { componentSettings } from "lib/componentSettings";
import css from "styles/HUD/Ingredients/Tab.module.scss";
import { initSettings } from "lib/componentSettings";

type IngredientsTabProps = {
    ingredients: JSX.Element[]
    focus: number
    userInputState: stateType<string>
    changeSettings: (params: componentSettings) => void
    dataListState: stateType<any>
}

export default function IngredientsTab(
    { 
        ingredients,
        focus,
        userInputState,
        changeSettings,
        dataListState
    }: IngredientsTabProps
) {
    const {value: userInput, setValue: setUserInput} = userInputState;
    const {value: dataList, setValue: setDataList} = dataListState;
    
    const handler = (e: any) => {
        setUserInput(e.target.value);
        changeSettings(initSettings);

        setDataList(() => {
            return ingredients.map(item => {
                if (item.props.ingredient.info.name.includes(
                    e.target.value.toLowerCase()
                )) {
                    return item;
                };
            });
        });
    };

    const concatClassName = (name: string) => {
        if (focus !== initSettings.focus || userInput) {
            return [css[name], css[name + '_focus']].join(' ')
        }
        return css[name]
    };

    return (<>
        <div className={ css.search }>
            <input 
                placeholder="Search all ingredients..."
                onChange={e => handler(e)}
                value={userInput}
            />
            <button onClick={() => setUserInput('')}>Clear</button>
        </div>
        <div 
            className={concatClassName('tab')}>
            <div className={concatClassName('data')}>
                <div className={ css.wrapper }>
                    {dataList}
                </div>
            </div>
        </div>
    </>);
};
