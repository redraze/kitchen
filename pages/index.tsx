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
      ingredients: JSON.stringify(data)
    }
  };
}; 

type IndexProps = {
  ingredients: string
};

export default function Index({ ingredients }: IndexProps) {
  const parsed = JSON.parse(ingredients);
  let ingredientsMap: JSX.Element[] = [];
  parsed.map((ingredient: IngredientType, idx: number) => {
    ingredientsMap = [
      ...ingredientsMap, 
      <IngredientCard ingredient={ingredient} key={idx}></IngredientCard>
    ];
  });

  return (
      <Scene ingredients={ingredientsMap}/>
  );
};
