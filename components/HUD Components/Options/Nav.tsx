import { stateType } from "lib/commonPropTypes";
import { useState } from "react";
import css from "styles/HUD/Options/Nav.module.scss";
import Button from "../Button";

type OptionsNavProps = {
    nightState: stateType<boolean>
};

export default function OptionsNav({ nightState }: OptionsNavProps) {
    const { value: night, setValue: setNight } = nightState;
    const [open, setOpen] = useState(false);

    return (
        <div 
            className={ css.nav } 
            style={{left: open ? '80%' : '100%'}}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}    
        >
            <Button openState={{value: open, setValue: setOpen}}/>
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
