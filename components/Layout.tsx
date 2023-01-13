import Meta from "./Meta";

export default function Layout({ children }: any) {
    return(<>
        <Meta />
        <div>{ children }</div>
    </>);
};
