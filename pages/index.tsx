import { useState } from "react";
import css from "styles/Index.module.css";
import HUD from "components/HUD Components/HUD";
import Scene from "components/Kitchen Components/Scene";
import { server } from 'config/index';

type IndexProps = {
  ingredients: {
    id: string
    name: string
    refrigerated: boolean
  }
};

export default function Index({ ingredients }: IndexProps) {
  const [night, setNight] = useState(false);
  return (
    <div className={ css.scene }>
      <HUD night={night} setNight={setNight} />
      <Scene night={night} setNight={setNight} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/ingredients`);
  const ingredients = await res.json();
  return {
    props: { ingredients }
  };
};
