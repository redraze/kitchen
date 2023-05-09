import { boolStateType } from "lib/commonPropTypes";
import { useState } from "react";
import css from "styles/OptionsNav.module.scss";
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
            style={{left: open ? '80%' : '100%'}}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}    
        >
            <Button openState={{bool: open, setBool: setOpen}}/>
            <ul>
                <li><span>All Recipes</span></li>
                <li onClick={() => setNight(!night)}>
                    <span>Toggle Dark Mode</span>
                </li>
                <li><span>Reset Ingredients</span></li>
                <li><span>Free Camera Mode</span></li>
                <li><span>About</span></li>
            </ul>
        </div>
    );
};
