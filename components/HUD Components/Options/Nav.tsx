import type { stateType, voidFunc } from "lib/commonTypes";
import { useEffect, useState } from "react";
import css from "styles/HUD/Options/Nav.module.scss";
import Button from "../Button";
import Image from "next/image";
// import Link from "next/link";

type OptionsNavProps = {
    resetData: voidFunc
    spaceState: stateType<boolean>
};

export default function OptionsNav({ resetData, spaceState }: OptionsNavProps) {
    const [open, setOpen] = useState(true);

    const [offset, setOffset] = useState<string>('-350px');
    useEffect(() => {
        setTimeout(() => {
            setOffset('-300px');
        }, 2000);
    }, []);

    const [resetCheck, setResetCheck] = useState<boolean>(false);
    const [top, setTop] = useState<number>(0)
    const [left, setLeft] = useState<number>(0)

    const resetHandler = (e: MouseEvent) => {
        setLeft(e.clientX)
        setTop(e.clientY)
        setResetCheck(true);
    };

    const aboutHandler = () => {
        
    };

    return (
        <div
            className={ css.nav }
            style={{ right: open ? '0' : offset }}
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
                    src={'/BingChilling.gif'}
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
                        src={'/ConfirmIcon.png'}
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
                        src={'/CloseIcon.png'}
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
                <li onClick={ () => aboutHandler() }>
                    <span>About</span>
                </li>
            </ul>
        </div>
    );
};
