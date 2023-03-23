import { IngredientType } from "lib/commonPropTypes";
import { useState } from "react";
import css from "styles/Scene.module.scss";
import HUD from "components/HUD Components/HUD";
import Kitchen from "components/Kitchen Components/Kitchen";

type SceneProps = {
    ingredients: IngredientType[]
};
  
export default function Scene({ ingredients }: SceneProps) {
    const [night, setNight] = useState(false);
    return(
        <div className={ css.scene }>
            <HUD nightState={{night, setNight}} ingredients={ingredients}/>
            <Kitchen nightState={{night, setNight}} ingredients={ingredients}/>
        </div>
    );
};
