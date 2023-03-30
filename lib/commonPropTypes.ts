export type IngredientType = {
  id: string
  name: string
  refrigerated: boolean
  bool: boolean
  setBool: (params: boolean) => void
};

export type boolStateType = {
  bool: boolean
  setBool: (params: boolean) => void
};