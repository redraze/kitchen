import { boolStateType } from "lib/commonPropTypes";
import css from "styles/Button.module.scss";

type ButtonProps = {
    openState: boolStateType
    left?: boolean
}

export default function Button({ openState, left }: ButtonProps) {
    const {bool: open, setBool: setOpen} = openState;
    const style = left ? 
        { rotate: '180deg', left: '100%' } :
        { rotate: '0deg' }
    
    return (
        <div 
            className={ css.button } 
            onClick={() => setOpen(!open)}
            style={style}
        >
            <div 
                className={ css.cross } 
                onClick={() => setOpen(!open)}
                style={{margin: open ? '0 30%' : '0 20%'}}
            >
                <div style={{rotate: open ? '-45deg' : '45deg'}}></div>
                <div style={{rotate: open ? '45deg' : '-45deg'}}></div>
            </div>
        </div>
    );
};
