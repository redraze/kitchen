import type { dragPropsType } from "lib/commonPropTypes"
import Box from "./Box";
import { initSettings } from "lib/componentSettings";

export default function StageGroup(props: { dragProps: dragPropsType }) {
    return (
        <group rotation={initSettings.rot} >
            <Box dragProps={props.dragProps} position={[0, 0.2, 0]} />
        </group>
    )
}