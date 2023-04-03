import dbConnect from 'config/dbConnect';
import Ingredient from 'models/Ingredient';
import { IngredientType } from 'lib/commonPropTypes';
import IngredientCard from 'components/HUD Components/IngredientCard';
import Scene from "components/Scene";

export async function getStaticProps() {
  await dbConnect();
  const data = await Ingredient.find();

  return {
    props: {
      ingredients: JSON.parse(JSON.stringify(data))
    }
  };
}; 

type IndexProps = {
  ingredients: IngredientType[]
};

export default function Index({ingredients}: IndexProps) {
  let ingredientsMap: JSX.Element[] = [];
  ingredients.map((ingredient: IngredientType, idx: number) => {
    ingredientsMap = [
      ...ingredientsMap, 
      <IngredientCard ingredient={ingredient} key={idx}></IngredientCard>
    ];
  });

  return (
      <Scene ingredients={ingredientsMap}/>
  );
};
