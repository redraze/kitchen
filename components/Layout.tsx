import Meta from "./Meta";
import { ReactNode } from "react";

export type LayoutProps = {
    children?: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return(<>
        <Meta />
        <div>{ children }</div>
    </>);
};
