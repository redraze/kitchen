import css from "styles/Button.module.scss";

type ButtonProps = {
    open: boolean
    setOpen: (params: boolean) => void
    left?: boolean
}

export default function Button({ open, setOpen, left }: ButtonProps) {
    return (
        <div 
            className={ css.button } 
            onClick={() => setOpen(!open)}
            style={{
                rotate: left ? '180deg' : '0deg',
                left: left ? '100%' : ''
            }}
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
