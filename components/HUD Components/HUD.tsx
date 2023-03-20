import Nav from "./Nav";
import Ingredients from "./Ingredients";

type HUDProps = {
    night: boolean
    setNight: (params: boolean) => void
};

export default function HUD({ night, setNight }: HUDProps) {
    return(<>
        <Nav night={night} setNight={setNight} />
        <Ingredients />
    </>);
};
