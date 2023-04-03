export type IngredientType = {
  id: string
  name: string
  refrigerated: boolean
};

export type boolStateType = {
  bool: boolean
  setBool: (params: boolean) => void
};

export type numStateType = {
  num: number
  setNum: (params: number) => void
};