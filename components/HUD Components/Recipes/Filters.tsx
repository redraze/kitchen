import type { catagoryType, stateType, filterType } from "lib/commonTypes";
import { useEffect, useState } from "react";
import css from 'styles/HUD/Recipes/Filters.module.scss';

type filtersType = {
    filter: string,
    catagories: catagoryType
    filterState: stateType<filterType>
    active: boolean
}

export default function Filters({ filter, catagories, filterState, active }: filtersType) {
    const toggleFilter = (catagory: string) => {
        let temp = filterState.value;
        const value = temp[filter as keyof object][catagory as keyof object];
        // @ts-ignore
        temp[filter as keyof object][catagory as keyof object] = !value;
        filterState.setValue(temp);
    };

    const [dropDown, setDropDown] = useState(false);
    useEffect(() => { setDropDown(false) }, [active]);

    return (
        <div
            className={ css.wrapper }
            style={
                active ?
                { opacity: 1, marginTop: '0px' } :
                { opacity: 0, marginTop: '10px' }
            }>
            <button onClick={ () => setDropDown(!dropDown) } >{ filter }</button>
            <ul style={ !dropDown ? {display: 'none'} : {} }>
                {
                    Object.entries(catagories).map((item, idx) => {
                        return (
                            <li key={idx} onClick={ () => toggleFilter(item[0]) }>
                                { item[0] }
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};