import type { 
  IngredientType, 
  clientDataType, 
  containerDataType 
} from 'lib/commonTypes';
import { useEffect, useRef, useState } from 'react';
import dbConnect from 'config/dbConnect';
import Ingredient from 'models/Ingredient';
import { containerLimit } from 'lib/settings';
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
    refrigerated: [], 
    nonRefrigerated: [] 
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
        for (let i = 0; i < containerLimit; i++) {
          if (clientContainerData.current.refrigerated[i]?.id == undefined) {
            clientContainerData.current.refrigerated[i] = {
              id: id,
              containerType: info.container
            };
            break;
          };
          if (i == containerLimit - 1) {
            clientContainerData.current.refrigerated[i] = {
              id: id,
              containerType: info.container
            };
          };
        }
      } else {
        for (let i = 0; i < containerLimit; i++) {
          if (clientContainerData.current.nonRefrigerated[i]?.id == undefined) {
            clientContainerData.current.nonRefrigerated[i] = {
              id: id,
              containerType: info.container
            };
            break;
          };
          if (i == containerLimit - 1) {
            clientContainerData.current.nonRefrigerated[i] = {
              id: id,
              containerType: info.container
            };
          };
        };
      }
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
        for (let i = 0; i < containerLimit; i++) {
          if (clientContainerData.current.refrigerated[i]?.id == id) {
            clientContainerData.current.refrigerated[i] = undefined
          } 
        }
      } else {
        for (let i = 0; i < containerLimit; i++) {
          if (clientContainerData.current.nonRefrigerated[i]?.id == id) {
            clientContainerData.current.nonRefrigerated[i] = undefined
          } 
        }
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
    parsed.map((ingredient: IngredientType, idx: number) => {
      if (localData[ingredient._id as keyof object]) {
        ingredient.recipes.map((item: string) => {
          if (clientRecipeData.current[item as keyof object]) {
            clientRecipeData.current[item as keyof object]++;
          } else {
            clientRecipeData.current[item as keyof object] = 1;
          };
        })

        if (
          ingredient.info.refrigerated 
          && clientContainerData.current.refrigerated.length < containerLimit
        ) {
          clientContainerData.current.refrigerated.push({ 
            id: ingredient._id,
            containerType: ingredient.info.containerType
          })
        } else if (
          !ingredient.info.refrigerated &&
          clientContainerData.current.nonRefrigerated.length < containerLimit
        ) {
          clientContainerData.current.nonRefrigerated.push({
            id: ingredient._id,
            containerType: ingredient.info.containerType
          })
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

    while (clientContainerData.current.refrigerated.length < containerLimit) {
      clientContainerData.current.refrigerated.push(undefined);
    };
    while (clientContainerData.current.nonRefrigerated.length < containerLimit) {
      clientContainerData.current.nonRefrigerated.push(undefined);
    };
  }, []);

  return (
    <Scene 
      ingredients={ingredientsMap}
      clientRecipeData={clientRecipeData.current}
      clientContainerData={clientContainerData.current}
    />
  );
};
