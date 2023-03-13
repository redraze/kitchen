import css from "styles/Nav.module.scss";

export default function Nav() {
    return (
        <div className={ css.nav }>
            <div className={ css.one }></div>
            <div className={ css.two }></div>
            <div className={ css.three }></div>
        </div>
    );
};
