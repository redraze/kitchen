import css from "styles/Nav.module.scss";

type NavButtonProps = {
    open: boolean
    setOpen: (params: boolean) => void
}

export default function NavButton({ open, setOpen }: NavButtonProps) {
    return (
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
    );
};
