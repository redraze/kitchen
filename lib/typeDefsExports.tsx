type recipeInfoOutput = {
    name: string
    description: string
    instructions: [string]
    totalIngredients: number
};

type recipeFiltersOutput = {
    meal: string
    cuisine: string
};

export type recipeIngredientsOutput = {
    id: string
    name: string
    amount: string
};

export type RecipeTypeOutput = {
    id: string
    info: recipeInfoOutput
    filters: recipeFiltersOutput
    ingredients: [recipeIngredientsOutput]
};

type ingredientInfoOutput = {
    name: string
    refrigerated: boolean
    containerType: string
};

export type IngredientTypeOutput = {
    id: string
    info: ingredientInfoOutput
    recipes: [string]
};

type RecipeSearchInfoOutput = {
    name: string
    description: string
    totalIngredients: number
};

export type RecipeDataTypeOutput = {
    id: string
    info: RecipeSearchInfoOutput
    filters: recipeFiltersOutput
};
