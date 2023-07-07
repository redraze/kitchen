import type { dragPropsType } from "lib/commonTypes"
import Box from "./Box";
import { initSettings } from "lib/settings";

export default function StageGroup(props: { dragProps: dragPropsType }) {
    return (
        <group rotation={initSettings.rot} >
            <Box dragProps={props.dragProps} position={[0, 0.2, 0]} />
        </group>
    )
}