import type { 
  IngredientType, 
  clientDataType, 
  containerDataType 
} from 'lib/commonPropTypes';
import { useEffect, useRef, useState } from 'react';
import dbConnect from 'config/dbConnect';
import Ingredient from 'models/Ingredient';
import { containerLimit } from 'lib/componentSettings';
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

export default function Index({ ingredients }: { ingredients: string }) {
  const clientIngredientData = useRef<clientDataType>({});
  const clientRecipeData = useRef<clientDataType>({});
  const clientContainerData = useRef<containerDataType>({ 
    refrigerated: {}, 
    nonRefrigerated: {} 
  });

  const updateData = (
    id: string, 
    recipes: string[], 
    info: {
      container: string,
      refrigerated: boolean
    }, 
    value: boolean
  ) => {
    if (value) {
      clientIngredientData.current[id as keyof object] = 1;
      recipes.map((item: string) => {
        if (clientRecipeData.current[item as keyof object]) {
          clientRecipeData.current[item as keyof object]++;
        } else {
          clientRecipeData.current[item as keyof object] = 1;
        };
      });
      if (info.refrigerated) {
        const keys = Object.keys(clientContainerData.current.refrigerated);
        if (keys.length > containerLimit) {
          delete clientContainerData.current.refrigerated[keys[0] as keyof object];
        };
        clientContainerData.current.refrigerated[id as keyof object] = info.container;
      } else {
        const keys = Object.keys(clientContainerData.current.nonRefrigerated);
        if (keys.length > containerLimit) {
          delete clientContainerData.current.nonRefrigerated[keys[0] as keyof object];
        };
        clientContainerData.current.nonRefrigerated[id as keyof object] = info.container;
      };
    } else {
      delete clientIngredientData.current[id as keyof object];
      recipes.map((item: string) => {
        if (clientRecipeData.current[item as keyof object] == 1) {
          delete clientRecipeData.current[item as keyof object];
        } else {
          clientRecipeData.current[item as keyof object]--;
        };
      });
      if (info.refrigerated) {
        delete clientContainerData.current.refrigerated[id as keyof object];
      } else {
        delete clientContainerData.current.nonRefrigerated[id as keyof object];
      };
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
    let count = 0;
    parsed.map((ingredient: IngredientType, idx: number) => {
      if (localData[ingredient._id as keyof object]) {
        ingredient.recipes.map((item: string) => {
          if (clientRecipeData.current[item as keyof object]) {
            clientRecipeData.current[item as keyof object]++;
          } else {
            clientRecipeData.current[item as keyof object] = 1;
          };
        })

        if (count < containerLimit) {
          if (ingredient.info.refrigerated) {
            clientContainerData.current.refrigerated[
              ingredient._id as keyof object
            ] = ingredient.info.containerType;
          } else {
            clientContainerData.current.nonRefrigerated[
              ingredient._id as keyof object
            ] = ingredient.info.containerType;
          }
          count++
        }
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
      clientContainerData={clientContainerData.current}
    />
  );
};
