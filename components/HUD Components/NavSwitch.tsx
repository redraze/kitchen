import css from "styles/NavSwitch.module.scss";

type NavSwitchProps ={
    night: boolean
};

export default function NavSwitch({ night }: NavSwitchProps) {
    return (<>
        <label className={ css.toggle_control }>
            <input type="checkbox" checked={night} onChange={() => null} />
            <span className={ css.control }></span>
        </label>
    </>);
};
