export type IngredientType = {
  _id: string
  info: {
    name: string
    refrigerated: boolean
    containerType: string
  }
  recipes: [string]
};

export type boolStateType = {
  bool: boolean
  setBool: (params: boolean) => void
};

export type numStateType = {
  num: number
  setNum: (params: number) => void
};