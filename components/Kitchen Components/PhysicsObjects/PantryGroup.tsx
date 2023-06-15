import type { dragPropsType } from "lib/commonPropTypes";
import Wall from "./Wall";
import Box from "./Box";
import { pantrySettings } from "lib/componentSettings";

type PantryGroupProps = {
    dragProps: dragPropsType
}

export default function PantryGroup({ dragProps }: PantryGroupProps) {
    return (
        <group 
            rotation={pantrySettings.rot} 
            position={[pantrySettings.pos.x, 0, pantrySettings.pos.z]}
        >
            {/* Pantry Boundaries */}
            <group visible={false} >
                <Wall args={[4.9, 0.05, 1.6]} position={[0, 0.05, 0]} />
                <Wall args={[4.9, 0.05, 1.6]} position={[0, 1.44, 0]} />
                <Wall args={[4.9, 0.05, 1.6]} position={[0, 2.7, 0]} />
                <Wall args={[4.9, 0.05, 1.6]} position={[0, 3.95, 0]} />
                <Wall args={[4.9, 0.05, 1.6]} position={[0, 5, 0]} />
                <Wall args={[0.05, 5.1, 1.6]} position={[-2.5, 2.45, 0]} />
                <Wall args={[0.05, 5.1, 1.6]} position={[2.45, 2.45, 0]} />
                <Wall args={[4.9, 5.1, 0.05]} position={[0, 2.45, 0.8]} />
                <Wall args={[4.9, 5.1, 0.05]} position={[0, 2.45, -0.8]} />
            </group>
            <Box dragProps={dragProps} position={[0, 0.4, 0]} />
        </group>
    )
}