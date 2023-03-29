import css from "styles/Button.module.scss";

type ButtonProps = {
    open: boolean
    setOpen: (params: boolean) => void
    left?: boolean
}

export default function Button({ open, setOpen, left }: ButtonProps) {
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
