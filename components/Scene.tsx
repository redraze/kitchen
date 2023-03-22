import { useState } from "react";
import css from "styles/Scene.module.scss";
import HUD from "components/HUD Components/HUD";
import Kitchen from "components/Kitchen Components/Kitchen";
import { useQuery } from '@apollo/client';
import { GET_INGREDIENTS } from 'lib/queries';

type SceneProps = {
    ingredients?: {
      id: string
      name: string
      refrigerated: boolean
    }[]
  };
  
export default function Scene({ ingredients }: SceneProps) {
    const [night, setNight] = useState(false);
    return(
        <div className={ css.scene }>
            <HUD night={night} setNight={setNight}/>
            <Kitchen night={night} setNight={setNight}/>
        </div>
    );
};

export async function getStaticProps() {
    const { loading, error, data } = useQuery(GET_INGREDIENTS);
    if (!loading && !error) return {
        props: {
            ingredients: data.ingredients
        }
    }
}
