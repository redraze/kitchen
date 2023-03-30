import { boolStateType } from "lib/commonPropTypes";
import { useState } from "react";
import css from "styles/Nav.module.scss";
import NavButton from "./Button";

type NavProps = {
    nightState: boolStateType
}

export default function Nav({ nightState }: NavProps) {
    const {bool: night, setBool: setNight} = nightState;
    const [open, setOpen] = useState(false);

    return (
        <div className={ css.nav } style={{left: open ? '80%' : '100%'}}>
            <NavButton open={open} setOpen={setOpen}/>
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
