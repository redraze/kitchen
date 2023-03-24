import { client } from 'config/client';
import { GET_INGREDIENTS } from 'lib/queries';
import { IngredientType } from 'lib/commonPropTypes';
import { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import Scene from "components/Scene";

export async function getStaticProps() {
  const { data } = await client.query({
      query: GET_INGREDIENTS
  });

  return {
    props: {
      ingredientProps: data.ingredients
    }
  };
}; 

type IndexProps = {
  ingredientProps: IngredientType[]
};

export default function Index({ ingredientProps }: IndexProps) {
  let ingredients: any = [];
  ingredientProps.map((ingredient: any) => {
    const [bool, setBool] = useState(false)
    ingredients = [...ingredients, {...ingredient, bool, setBool}]
  });

  return (
    <ApolloProvider client={client}>
      <Scene ingredients={ingredients}/>
    </ApolloProvider>
  );
};
