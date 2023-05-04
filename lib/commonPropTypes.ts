export type IngredientType = {
  id: string
  info: {
    name: String
    refrigerated: Boolean
    containerType: String
  }
  recipes: [String]
};

export type boolStateType = {
  bool: boolean
  setBool: (params: boolean) => void
};

export type numStateType = {
  num: number
  setNum: (params: number) => void
};