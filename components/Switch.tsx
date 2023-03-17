import css from "styles/Switch.module.scss";

type SwitchProps ={
    night: boolean
};

export default function Switch({ night }: SwitchProps) {
    return (
        <label className={ css.toggle_control }>
            <input type="checkbox" checked={night} />
            <span className={ css.control }></span>
        </label>
    );
};
