import type { ReactNode } from "react";
import Meta from "./Meta";

export type LayoutProps = {
    children?: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return(<>
        <Meta />
        <div>{ children }</div>
    </>);
};
