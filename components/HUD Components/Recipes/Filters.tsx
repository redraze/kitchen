import type {
    stateType,
    filterType,
    voidFunc
} from "lib/commonTypes";
import { CSSProperties, useEffect, useRef, useState } from "react";
import Image from "next/image";
import css from 'styles/HUD/Recipes/Filters.module.scss';

type FiltersProps = {
    filter: string,
    catagories: string[]
    activeFilterState: stateType<filterType<string>>
    filterData: voidFunc
    active: boolean
};

export default function Filters(
    {
        filter,
        catagories,
        activeFilterState,
        filterData,
        active,
    } : FiltersProps
) {
    const [r, forceReRender] = useState(0);
    const setCatagory = (catagory: string) => {
        const temp = activeFilterState.value;
        temp[filter as keyof object] == catagory ?
            // @ts-ignore
            temp[filter] = '' : temp[filter] = catagory
        activeFilterState.setValue(temp);
        filterData();
        forceReRender(r + 1);
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
                    <Image
                        src={'/DropdownIcon.png'}
                        alt='\/'
                        height={30}
                        width={30}
                    />    
                </div>
            </button>
            <ul style={ ulStyle }>
                {
                    catagories.map((catagory, idx) => {
                        return (
                            <li 
                                key={idx}
                                onClick={ () => setCatagory(catagory) }
                                className={ 
                                    activeFilterState.value[filter as keyof object] == catagory ? 
                                        css.liActive : '' 
                                }
                            >
                                {catagory}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};