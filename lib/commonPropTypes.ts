export type IngredientType = {
  _id: string
  info: {
    name: string
    refrigerated: boolean
    containerType: string
  }
  recipes: [string]
};

export type stateType<T> = {
  value: T
  setValue: (params: T) => void
};