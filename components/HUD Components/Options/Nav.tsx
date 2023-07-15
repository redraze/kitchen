import type { stateType } from "lib/commonTypes";
import { useState } from "react";
import css from "styles/HUD/Options/Nav.module.scss";
import Button from "../Button";
import Link from "next/link";

type OptionsNavProps = {
    nightState: stateType<boolean>
    resetData: () => void
    spaceState: stateType<boolean>
};

export default function OptionsNav({ nightState, resetData, spaceState }: OptionsNavProps) {
    const { value: night, setValue: setNight } = nightState;
    const [open, setOpen] = useState(false);

    return (
        <div 
            className={ css.nav } 
            style={{right: open ? '0' : '-300px'}}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}    
        >
            <Button openState={{value: open, setValue: setOpen}}/>
            <ul>
                <li>
                    <Link
                        className={ css.link }
                        href={{ pathname: "/recipes/" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>All Recipes</span>
                    </Link>
                </li>
                <li onClick={() => resetData()}>
                    <span>Reset Ingredients</span>
                </li>
                <li onClick={() => setNight(!night)}>
                    <span>Toggle Dark Mode</span>
                </li>
                <li onClick={() => spaceState.setValue(!spaceState.value)}>
                    <span>SPACE???</span>
                </li>
                {/* <li><span>Free Camera Mode</span></li> */}
                <li>
                  <Link
                        className={ css.link }
                        href={{ pathname: "about" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>About</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};
