import dbConnect from 'config/dbConnect';
import Ingredient from 'models/Ingredient';
import { IngredientType } from 'lib/commonPropTypes';
import IngredientCard from 'components/HUD Components/IngredientCard';
import Scene from "components/Scene";
import { useRef } from 'react';

export async function getStaticProps() {
  await dbConnect();
  const data = await Ingredient.find();

  return {
    props: {
      ingredients: JSON.stringify(data)
    },
    revalidate: 86400
  };
}; 

type IndexProps = {
  ingredients: string
};

export default function Index({ ingredients }: IndexProps) {
  const parsed = JSON.parse(ingredients);
  // ts any usage here        -----------------------------
  const clientIngredientData: any = useRef([])
  const clientRecipeData = useRef({})

  //  TODO
  //  check browser cache for existing list of ingredient ID's
  //  iterate through ingredient ID's and re-compile recipeData

  const updateData = (id: string, value: boolean, recipes: string[]) => {
    if (value) {
      clientIngredientData.current.push(id)
      recipes.map((item: string) => {
        if (clientRecipeData.current[item as keyof object]) {
          clientRecipeData.current[item as keyof object]++
        } else {
          //  @ts-ignore
          clientRecipeData.current[item as keyof object] = 1
        }
      })
    } else {
      clientIngredientData.current = clientIngredientData.current.filter((item: any) => {
        return item !== id
      })
      recipes.map((item: string) => {
        if (clientRecipeData.current[item as keyof object] == 1) {
          delete clientRecipeData.current[item as keyof object]
        } else {
          clientRecipeData.current[item as keyof object]--
        }
      })
    }
    //  updateBrowserCache();
  }

  let ingredientsMap: JSX.Element[] = [];
  parsed.map((ingredient: IngredientType, idx: number) => {
    ingredientsMap = [
      ...ingredientsMap, 
      <IngredientCard 
        key={idx}
        ingredient={ingredient}
        active={ clientIngredientData[ingredient._id] ? true : false }
        updateData={updateData}
      ></IngredientCard>
    ];
  });

  return (
      <Scene 
        ingredients={ingredientsMap}
        clientIngredientData={clientIngredientData}
      />
  );
};
