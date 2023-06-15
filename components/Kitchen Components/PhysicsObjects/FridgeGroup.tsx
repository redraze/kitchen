import type { dragPropsType } from "lib/commonPropTypes";
import Wall from "./Wall";
import Box from "./Box";
import { fridgeSettings } from "lib/componentSettings";

type PantryGroupProps = {
    dragProps: dragPropsType
}

export default function PantryGroup({ dragProps }: PantryGroupProps) {
    return (
        <group 
            rotation={fridgeSettings.rot} 
            position={[fridgeSettings.pos.x, 0, fridgeSettings.pos.z]}
        >
            {/* Fridge Boundaries */}
            <group visible={true} >
                <Wall args={[2.6, 0.05, 1.8]} position={[0, 0.15, -0.15]} />
                <Wall args={[2.6, 0.05, 1.8]} position={[0, 1.58, -0.15]} />
                <Wall args={[2.6, 0.05, 1.8]} position={[0, 3.08, -0.15]} />
                <Wall args={[2.6, 0.05, 1.8]} position={[0, 4.6, -0.15]} />
                <Wall args={[0.05, 4.6, 1.8]} position={[-1.3, 2.25, -0.15]} />
                <Wall args={[0.05, 4.6, 1.8]} position={[1.3, 2.25, -0.15]} />
                <Wall args={[2.6, 4.6, 0.05]} position={[0, 2.3, -1.1]} />
                <Wall args={[2.6, 4.6, 0.05]} position={[0, 2.3, 0.8]} />
            </group>
            <Box dragProps={dragProps} position={[0, 1, 0]} />
        </group>
    )
}