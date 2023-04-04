import { numStateType, boolStateType } from "lib/commonPropTypes";
import { useState } from "react";
import css from "styles/Nav.module.scss";
import Button from "./Button";
import { componentSettings } from "lib/componentSettings";

type NavProps = {
    focusState: numStateType
    nightState: boolStateType
    changeSettings: (params: componentSettings) => void
}

export default function Nav(
    { 
        focusState, 
        nightState, 
        changeSettings 
    }: NavProps
) {
    const {bool: night, setBool: setNight} = nightState;
    const [open, setOpen] = useState(false);

    return (
        <div className={ css.nav } style={{left: open ? '80%' : '100%'}}>
            <Button openState={{bool: open, setBool: setOpen}}/>
            <ul>
                <li onClick={() => setNight(!night)}>
                    <span>Toggle Dark Mode</span>
                </li>
                <li><span>All Recipes</span></li>
                <li><span>About</span></li>
            </ul>
        </div>
    );
};
