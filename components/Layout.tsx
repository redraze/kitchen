import type { ReactNode } from "react";
import Meta from "./Meta";

export default function Layout(props: { children?: ReactNode }) {
    return(<>
        <Meta />
        <div>{ props.children }</div>
    </>);
};
