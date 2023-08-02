import type { stateType, voidFunc } from "lib/commonTypes";
import { useEffect, useState } from "react";
import css from "styles/HUD/Options/Nav.module.scss";
import Button from "../Button";
// import Link from "next/link";

type OptionsNavProps = {
    resetData: voidFunc
    spaceState: stateType<boolean>
};

export default function OptionsNav({ resetData, spaceState }: OptionsNavProps) {
    const [open, setOpen] = useState(false);

    const [offset, setOffset] = useState<string>('-350px');
    useEffect(() => {
        setTimeout(() => {
            setOffset('-300px');
        }, 2000);
    }, []);

    return (
        <div 
            className={ css.nav } 
            style={{ right: open ? '0' : offset }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}    
        >
            <Button openState={{value: open, setValue: setOpen}}/>
            <ul>
                {/* <li>
                    <Link
                        className={ css.link }
                        href={{ pathname: "/recipes/" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>All Recipes</span>
                    </Link>
                </li> */}
                <li onClick={() => resetData()}>
                    <span>Reset Ingredients</span>
                </li>
                <li onClick={() => spaceState.setValue(!spaceState.value)}>
                    <span>Space!</span>
                </li>
                <li>
                    {/* <Link
                        className={ css.link }
                        href={{ pathname: "about" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    > */}
                        <span>About</span>
                    {/* </Link> */}
                </li>
            </ul>
        </div>
    );
};
