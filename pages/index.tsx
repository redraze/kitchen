import type {
  IngredientType,
  clientDataType,
  containerDataType,
  updateDataParams
} from 'lib/commonTypes';
import {
  updateIngredientData,
  updateRecipeData,
  updateContainerData
} from 'lib/functions';
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

export default function Index({ ingredients }: { ingredients: string }) {
  const clientIngredientData = useRef<clientDataType>({});
  const clientRecipeData = useRef<clientDataType>({});
  const clientContainerData = useRef<containerDataType>({ 
    refrigerated: [], 
    nonRefrigerated: [] 
  });

  const updateData = ({ id, recipes, info, value }: updateDataParams) => {
    clientIngredientData.current = updateIngredientData({
      data: clientIngredientData.current,
      id: id,
      action: value ? 'add' : 'remove'
    });

    clientRecipeData.current = updateRecipeData({
      data: clientRecipeData.current, 
      recipes: recipes,
      action: value ? 'add' : 'remove'
    });

    clientContainerData.current = updateContainerData({
      data: clientContainerData.current,
      container: {
        id: id,
        type: info.container
      },
      refrigerated: info.refrigerated,
      action: value ? 'add' : 'remove'
    });

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
        
        clientRecipeData.current = updateRecipeData({
          data: clientRecipeData.current,
          recipes: ingredient.recipes,
          action: 'add'
        });

        clientContainerData.current = updateContainerData({
          data: clientContainerData.current,
          container: {
            id: ingredient._id,
            type: ingredient.info.containerType
          },
          refrigerated: ingredient.info.refrigerated,
          action: 'push'
        });
      };

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

    clientContainerData.current = updateContainerData({
      data: clientContainerData.current,
      container: { id: 'undefined', type: 'undefined' },
      action: 'fillToLimit'
    });
  }, []);

  return (
    <Scene 
      ingredients={ingredientsMap}
      clientRecipeData={clientRecipeData.current}
      clientContainerData={clientContainerData.current}
    />
  );
};
