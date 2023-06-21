import type { IngredientType, clientDataType } from 'lib/commonPropTypes';
import { useEffect, useRef, useState } from 'react';
import dbConnect from 'config/dbConnect';
import Ingredient from 'models/Ingredient';
import IngredientCard from 'components/HUD Components/Ingredients/Card';
import Scene from "components/Scene";

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
  const clientIngredientData = useRef<clientDataType>({});
  const clientRecipeData = useRef<clientDataType>({});

  const updateData = (id: string, recipes: string[], value: boolean) => {
    if (value) {
      clientIngredientData.current[id as keyof object] = 1;
      recipes.map((item: string) => {
        if (clientRecipeData.current[item as keyof object]) {
          clientRecipeData.current[item as keyof object]++;
        } else {
          clientRecipeData.current[item as keyof object] = 1;
        };
      });
    } else {
      delete clientIngredientData.current[id as keyof object];
      recipes.map((item: string) => {
        if (clientRecipeData.current[item as keyof object] == 1) {
          delete clientRecipeData.current[item as keyof object];
        } else {
          clientRecipeData.current[item as keyof object]--;
        };
      });
    };
    localStorage['ingredientData'] = JSON.stringify(clientIngredientData.current);
  };
  
  const [ingredientsMap, setIngredientsMap] = useState<JSX.Element[]>([]);
  useEffect(() => {
    let localData: clientDataType = {};
    try {
      localData = JSON.parse(localStorage['ingredientData']);
    } catch {
      delete localStorage['ingredientData'];
    };
    if (localData) clientIngredientData.current = localData;

    const parsed = JSON.parse(ingredients);
    let tempMap: JSX.Element[] = [];
    parsed.map((ingredient: IngredientType, idx: number) => {
      if (localData[ingredient._id as keyof object]) {
        ingredient.recipes.map((item: string) => {
          if (clientRecipeData.current[item as keyof object]) {
            clientRecipeData.current[item as keyof object]++;
          } else {
            clientRecipeData.current[item as keyof object] = 1;
          };
        })
      }

      tempMap = [
        ...tempMap,
        <IngredientCard
          key={idx}
          ingredient={ingredient}
          clientIngredientData={clientIngredientData.current}
          updateData={updateData}
        ></IngredientCard>
      ];
    });
    setIngredientsMap(tempMap);
  }, []);

  return (
    <Scene 
      ingredients={ingredientsMap}
      clientRecipeData={clientRecipeData.current}
    />
  );
};
