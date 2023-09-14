import { voidFunc } from "lib/commonTypes";
import { type componentSettings, aboutSettings, initSettings } from "lib/settings";
import Image from "next/image";
import Link from "next/link";
import css from "styles/HUD/Options/AboutButtons.module.scss";

type AboutButtonsProps = {
    changeSettings: voidFunc<componentSettings>
    focus: number
};

export default function AboutButtons({ focus, changeSettings }: AboutButtonsProps) {
    return(<>
        <button
            name="Back"
            className={ [css.button, css.back].join(' ') }
            style={ focus == aboutSettings.focus ? {top: '20px'} : {top: '-100px'} }
            onClick={ () => changeSettings(initSettings) }
        >
            <div>
                <Image
                    src={'/Icons/Back.png'}
                    alt='Back'
                    height={30}
                    width={30}
                />    
            </div>
        </button>
        
        <Link
            href={'https://github.com/redraze/kitchen'}
            target="_blank"
            className={ [css.button, css.sourceCode].join(' ') }
            style={ focus == aboutSettings.focus ? {top: '20px'} : {top: '-100px'} }
        >
            <div>
                <Image
                    src={'/Icons/Source.png'}
                    alt='</>'
                    height={30}
                    width={30}
                />    
            </div>
        </Link>

        <Link
            href={'https://www.linkedin.com/in/ross-connor/'}
            target="_blank"
            className={ [css.button, css.LinkedIn].join(' ') }
            style={ focus == aboutSettings.focus ? {top: '20px'} : {top: '-100px'} }
        >
            <div>
                <Image
                    src={'/Icons/LinkedIn.png'}
                    alt='LinkedIn'
                    height={30}
                    width={30}
                />    
            </div>
        </Link>
    </>);
};
