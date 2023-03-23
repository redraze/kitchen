import { client } from 'config/client';
import { GET_INGREDIENTS } from 'lib/queries';
import { IngredientType } from 'lib/commonPropTypes';
import { ApolloProvider } from '@apollo/client';
import Scene from "components/Scene";

export async function getStaticProps() {
  const { data } = await client.query({
      query: GET_INGREDIENTS
  });
  return {
    props: {
      ingredients: data.ingredients
    }
  }
}; 

type IndexProps = {
  ingredients: IngredientType[]
}

export default function Index({ ingredients }: IndexProps) {
  return (
    <ApolloProvider client={client}>
      <Scene ingredients={ingredients} />
    </ApolloProvider>
  );
};
