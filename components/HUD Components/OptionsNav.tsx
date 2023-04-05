import { boolStateType } from "lib/commonPropTypes";
import { useState } from "react";
import css from "styles/Nav.module.scss";
import Button from "./Button";

type OptionsNavProps = {
    nightState: boolStateType
};

export default function OptionsNav({ nightState }: OptionsNavProps) {
    const { bool: night, setBool: setNight } = nightState;
    const [open, setOpen] = useState(false);

    return (
        <div 
            className={ css.nav } 
            style={{left: open ? '80%' : '99.9%'}}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}    
        >
            <Button openState={{bool: open, setBool: setOpen}}/>
            <ul>
                <li><span>All Recipes</span></li>
                <li onMouseDown={() => setNight(!night)}>
                    <span>Toggle Dark Mode</span>
                </li>
                <li><span>Free Camera Mode</span></li>
                <li><span>About</span></li>
            </ul>
        </div>
    );
};
