import css from "styles/Index.module.css";
import Nav from "components/Nav";
import Ingredients from "components/Ingredients";
import Kitchen from "components/KitchenComponents/Kitchen";

export default function Index() {
  return (
    <div className={ css.scene }>
      <Nav />
      <Ingredients />
      <Kitchen />
    </div>
  );
};
