import { useState } from "react";
import css from "styles/Nav.module.scss";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <div className={ css.nav } style={{left: open ? '80%' : '100%'}}>
            <div className={ css.button } onClick={() => setOpen(!open)}>
                <div 
                    className={ css.cross } 
                    onClick={() => setOpen(!open)}
                    style={{margin: open ? '0 30%' : '0 20%'}}
                >
                    <div style={{rotate: open ? '-45deg' : '45deg'}}></div>
                    <div style={{rotate: open ? '45deg' : '-45deg'}}></div>
                </div>
            </div>
            <ul>
                <li>Dark Mode</li>
                <li>All Recipes</li>
                <li>About</li>
            </ul>
        </div>
    );
};
