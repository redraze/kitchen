import dbConnect from 'config/dbConnect';
import Ingredient from 'models/Ingredient';
import { IngredientType } from 'lib/commonPropTypes';
import IngredientCard from 'components/HUD Components/Ingredients/Card';
import Scene from "components/Scene";
import { useEffect, useRef, useState } from 'react';

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
  const clientIngredientData: any = useRef({});
  const clientRecipeData: any = useRef({});

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
    let localData = {};
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
