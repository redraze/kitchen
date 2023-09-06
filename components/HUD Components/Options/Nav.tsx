import type { stateType, voidFunc } from "lib/commonTypes";
import { type componentSettings, aboutSettings } from "lib/settings";
import { useState } from "react";
import css from "styles/HUD/Options/Nav.module.scss";
import Button from "../Button";
import Image from "next/image";

type OptionsNavProps = {
    resetData: voidFunc
    spaceState: stateType<boolean>
    changeSettings: voidFunc<componentSettings>
};

export default function OptionsNav(
    {
        resetData,
        spaceState,
        changeSettings
    }: OptionsNavProps
) {
    const [open, setOpen] = useState(false);
    const [resetCheck, setResetCheck] = useState<boolean>(false);
    const [top, setTop] = useState<number>(0)
    const [left, setLeft] = useState<number>(0)

    const resetHandler = (e: MouseEvent) => {
        setLeft(e.clientX)
        setTop(e.clientY)
        setResetCheck(true);
    };

    return (
        <div
            className={ css.nav }
            style={{ right: open ? '0' : '-300px' }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <Button openState={{value: open, setValue: setOpen}}/>
            <div
                className={ resetCheck ? 
                    [css.check, css.checkActive].join(' ') :
                    [css.check, css.checkInactive].join(' ')
                }
                style={ resetCheck ?
                    {display: 'initial', top: `${top}px`, left: `${left}px`} :
                    {display: 'none', top: `${top}px`, left: `${left}px`}
                }
                onMouseLeave={() => setResetCheck(false)}
            >
                <Image
                    src={'/Icons/BingChilling.gif'}
                    alt='Are you sure about that?'
                    height={35 * 3}
                    width={35 * 3}
                    className={ css.face }
                />
                <button 
                    className={ css.confirm }
                    onClick={() => resetData()}
                >
                    <Image
                        src={'/Icons/Confirm.png'}
                        alt='✓'
                        height={35 * 3/2}
                        width={35 * 3/2}
                    />
                </button>
                <button
                    className={ css.close }
                    onClick={() => setResetCheck(false)}
                >
                    <Image
                        src={'/Icons/Close.png'}
                        alt='X'
                        height={35 * 3/2}
                        width={35 * 3/2}
                    />
                </button>
            </div>
            <ul>
                <li
                    onClick={(e) => resetHandler(e.nativeEvent)}
                >
                    <span>Reset Ingredients</span>
                </li>
                <li onClick={ () => spaceState.setValue(!spaceState.value) }>
                    <span>Space!</span>
                </li>
                <li onClick={ () => changeSettings(aboutSettings) }>
                    <span>About</span>
                </li>
            </ul>
        </div>
    );
};
