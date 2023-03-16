import css from "styles/SimpleSwitch.module.scss";

type SimpleSwitchProps ={
    night: boolean
};

export default function SimpleSwitch({ night }: SimpleSwitchProps) {
    return (
        <label className={ css.toggle_control }>
            <input type="checkbox" checked={night} />
            <span className={ css.control }></span>
        </label>
    );
};
