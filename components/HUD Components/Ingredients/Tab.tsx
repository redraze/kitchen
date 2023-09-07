import type { stateType, voidFunc } from "lib/commonTypes";
import type { componentSettings } from "lib/settings";
import css from "styles/HUD/Ingredients/Tab.module.scss";
import { fridgeSettings, initSettings, pantrySettings } from "lib/settings";

type IngredientsTabProps = {
    ingredients: JSX.Element[]
    focus: number
    userInputState: stateType<string>
    changeSettings: voidFunc<componentSettings>
    dataListState: stateType<(JSX.Element | undefined)[]>
    reRender: stateType<number>
}

export default function IngredientsTab(
    { 
        ingredients,
        focus,
        userInputState,
        changeSettings,
        dataListState,
        reRender
    }: IngredientsTabProps
) {
    const {value: userInput, setValue: setUserInput} = userInputState;
    const {value: dataList, setValue: setDataList} = dataListState;
    
    const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
        changeSettings(initSettings);

        setDataList(
            ingredients.map((item: JSX.Element) => {
                if (item.props.ingredient.info.name.includes(
                    e.target.value.toLowerCase()
                )) {
                    return item;
                };
            })
        );
    };

    const concatClassName = (name: string) => {
        if (
            focus == fridgeSettings.focus
            || focus == pantrySettings.focus
            || userInput
        ) {
            return [css[name], css[name + '_focus']].join(' ');
        };
        return css[name];
    };

    return (
        <div onClick={() => reRender.setValue(reRender.value + 1)}>
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
        </div>
    );
};
