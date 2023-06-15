import type { dragPropsType } from "lib/commonPropTypes"
import Box from "./Box";
import { initSettings } from "lib/componentSettings";

type StageGroupProps = {
    dragProps: dragPropsType
}

export default function StageGroup({ dragProps }: StageGroupProps) {
    return (
        <group rotation={initSettings.rot} >
            <Box dragProps={dragProps} position={[0, 0.2, 0]} />
        </group>
    )
}