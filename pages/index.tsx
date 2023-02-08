import css from "styles/Home.module.css";
import Kitchen from "components/Kitchen";

export default function Home() {
  return (
    <div className={ css.scene }>
      <Kitchen />
    </div>
  );
};
