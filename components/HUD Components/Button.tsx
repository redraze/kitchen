import { stateType } from "lib/commonPropTypes";
import css from "styles/HUD/Button.module.scss";

type ButtonProps = {
    openState: stateType<boolean>
    left?: boolean
}

export default function Button({ openState, left }: ButtonProps) {
    const {value: open, setValue: setOpen} = openState;
    
    return (<>
        <div 
            className={ css.button } 
            onClick={() => setOpen(!open)}
            style={
                left ? 
                    { rotate: '180deg', left: '100%'} :
                    { rotate: '0deg' }}
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
        <div 
            className={ css.line }
            style={
                left ? 
                    { rotate: '180deg', left: 'calc(100% - 1px)', width: '1.5px'} :
                    { rotate: '0deg' }}
        ></div>
    </>);
};
