export type IngredientType = {
  id: string
  name: string
  refrigerated: boolean
};

export type NightStateType = {
  night: boolean
  setNight: (params: boolean) => void
};