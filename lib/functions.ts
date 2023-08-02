import type { clientDataType, containerDataType } from "./commonTypes";
import { containerLimit } from "./settings";

type updateRecipeType = {
    data: clientDataType
    recipes: string[]
    action: string
};

export const updateRecipeData = ({ data, recipes, action }: updateRecipeType) => {
    switch (action) {
        case 'add':
            recipes.map((item: string) => {
                if (data[item as keyof object]) {
                    data[item as keyof object]++;
                } else {
                    data[item as keyof object] = 1;
                };
            });
            return data
        case 'remove':
            recipes.map((item: string) => {
                if (data[item as keyof object] == 1) {
                  delete data[item as keyof object];
                } else {
                  data[item as keyof object]--;
                };
            });
            return data;
        default:
            return data;
    };
};

type updateContainerDataType = {
    data: containerDataType,
    container: {
        id: string,
        type: string
    },
    refrigerated?: boolean,
    action: string
}

export const updateContainerData = ({ data, container, refrigerated, action}: updateContainerDataType) => {
    switch (action) {
        //  Filling an undefined 'hole' in the clientContainerData array instead of just
        //  pushing a new element prevents already rendered objects from jumping around
        case 'add':
            if (refrigerated) {
                for (let i = 0; i < containerLimit; i++) {
                    if (data.refrigerated[i]?.id == undefined) {
                        data.refrigerated[i] = {
                            id: container.id,
                            containerType: container.type
                        };
                        break;
                    };
                    if (i == containerLimit - 1) {
                        const idx = Math.floor(Math.random() * containerLimit + 0.5);
                        data.refrigerated[idx] = {
                            id: container.id,
                            containerType: container.type
                        };
                    };
                };
            } else {
                for (let i = 0; i < containerLimit; i++) {
                    if (data.nonRefrigerated[i]?.id == undefined) {
                        data.nonRefrigerated[i] = {
                            id: container.id,
                            containerType: container.type
                        };
                        break;
                    };
                    if (i == containerLimit - 1) {
                        const idx = Math.floor(Math.random() * containerLimit + 0.5);
                        data.nonRefrigerated[idx] = {
                            id: container.id,
                            containerType: container.type
                        };
                    };
                };
            };
            return data;
        case 'remove':
            if (refrigerated) {
                for (let i = 0; i < containerLimit; i++) {
                    if (data.refrigerated[i]?.id == container.id) {
                        data.refrigerated[i] = undefined;
                    };
                };
            } else {
                for (let i = 0; i < containerLimit; i++) {
                    if (data.nonRefrigerated[i]?.id == container.id) {
                        data.nonRefrigerated[i] = undefined;
                    };
                };
            };
            return data;
        //  pushes new container data without checking for undefined 'holes'
        case 'push':
            if (
                refrigerated 
                && data.refrigerated.length < containerLimit
            ) {
                data.refrigerated.push({ 
                    id: container.id,
                    containerType: container.type
                });
            } else if (
                !refrigerated
                && data.nonRefrigerated.length < containerLimit
            ) {
                data.nonRefrigerated.push({ 
                    id: container.id,
                    containerType: container.type
                });
            };
            return data;
        case 'fill':
            while (data.refrigerated.length < containerLimit) {
                data.refrigerated.push(undefined);
            };
            while (data.nonRefrigerated.length < containerLimit) {
                data.nonRefrigerated.push(undefined);
            };
            return data;
        default:
            return data;
    };
};

type updateIngredientDataType = {
    data: clientDataType,
    id: string,
    action: string
};

export const updateIngredientData = ({ data, id, action }: updateIngredientDataType) => {
    switch (action) {
        case 'add':
            data[id as keyof object] = 1;
            return data;
        case 'remove':
            delete data[id as keyof object];
            return data;
        default:
            return data;
    };
};

export const calcCookabilityScore = (available: number, total: number) => {
    const score = available / total * 100;
    return score.toFixed(0)
};

export const sortByCookabilityScore = (a: JSX.Element, b: JSX.Element) => {
    return b.props.cookabilityScore - a.props.cookabilityScore;
};
