import type { catagoryType, stateType, filterType } from "lib/commonTypes";
import { CSSProperties, useEffect, useRef, useState } from "react";
import css from 'styles/HUD/Recipes/Filters.module.scss';

type filtersType = {
    filter: string,
    catagories: catagoryType
    filterState: stateType<filterType>
    active: boolean
    renderDataMap: () => void
}

export default function Filters({ filter, catagories, filterState, active, renderDataMap }: filtersType) {
    const [r, forceReRender] = useState(0);
    const toggleFilter = (catagory: string) => {
        let temp: filterType = filterState.value;
        const value = temp[filter as keyof object][catagory as keyof object];
        value ? temp.active-- : temp.active++;
        // @ts-ignore
        temp[filter as keyof object][catagory as keyof object] = !value;
        filterState.setValue(temp);
        forceReRender(r + 1);
        renderDataMap();
    };

    const [dropDown, setDropDown] = useState<boolean>(false);
    const buttonRef = useRef<any>();
    const [ulStyle, setUlStyle] = useState<CSSProperties | undefined>(undefined);

    useEffect(() => {
        !dropDown && buttonRef ?
            setUlStyle({ display: 'none' }) :
            setUlStyle({
                minWidth: buttonRef.current.clientWidth,
                transform: `translateY(${ buttonRef.current.clientHeight / 2 })`
            })
    }, [dropDown, buttonRef]);

    return (
        <div
            className={ css.wrapper }
            style={ active ?
                { opacity: 1, marginTop: '0px', transition: 'opacity 0.5s ease-in, margin-top 0.4s'} :
                { opacity: 0, marginTop: '10px', transition: 'opacity 0.1s, margin-top 1s'}
            }
            onMouseOver={ () => setDropDown(true) }
            onMouseOut={ () => setDropDown(false) }
        >
            <button 
                className={ dropDown ? css.buttonActive : '' }
                ref={buttonRef}
            >
                <div>
                    <span>{ filter }</span>
                    <img src={'/DropdownIcon.png'} alt='\/' />    
                </div>
            </button>
            <ul style={ ulStyle }>
                {
                    Object.entries(catagories).map((item, idx) => {
                        return (
                            <li 
                                key={idx}
                                onClick={ () => toggleFilter(item[0]) }
                                className={ item[1] ? css.liActive : '' }
                            >
                                { item[0] }
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};