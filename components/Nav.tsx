import { useState } from "react";
import css from "styles/Nav.module.scss";
import NavButton from "./NavButton";
import SimpleSwitch from "./Switch";

type NavProps = {
    night: boolean
    setNight: (param: boolean) => void
}

export default function Nav({ night, setNight }: NavProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className={ css.nav } style={{left: open ? '80%' : '100%'}}>
            <NavButton open={open} setOpen={setOpen} />
            <ul>
                <li className={ css.darkmode } onClick={() => setNight(!night)} >
                    <span>Toggle Dark Mode</span>
                    <SimpleSwitch night={night}/>
                </li>
                <li>All Recipes</li>
                <li>About</li>
            </ul>
        </div>
    );
};
