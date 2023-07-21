import type { catagoryType, stateType, filterType } from "lib/commonTypes"

type filtersType = {
    filter: string,
    catagories: catagoryType
    filterState: stateType<filterType>
}

export default function Filters({ filter, catagories, filterState }: filtersType) {
    const handler = (catagory: string) => {
        // TODO:    toggle state for clicked filter
    };

    return (<>
        <span>{ filter }</span>
        <ul>
            {
                Object.entries(catagories).map((item, idx) => {
                    return (
                        <li key={idx} onClick={ () => handler(item[0]) }>
                            { item[0] }
                        </li>
                    );
                })
            }
        </ul>
    </>);
};