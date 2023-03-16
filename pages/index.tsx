import css from "styles/Index.module.css";
import Nav from "components/Nav";
import Ingredients from "components/Ingredients";
import Kitchen from "components/KitchenComponents/Kitchen";
import { useState } from "react";

export default function Index() {
  const [night, setNight] = useState(false);
  return (
    <div className={ css.scene }>
      <Nav night={night} setNight={setNight} />
      <Ingredients />
      <Kitchen night={night} setNight={setNight} />
    </div>
  );
};
