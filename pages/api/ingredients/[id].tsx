import dbConnect from 'config/dbConnect';
import { client } from 'config/client';
import { GET_INGREDIENT } from 'lib/queries';

dbConnect();

export default async function handler({ query: { id } }: any, res: any) {
    const { error, data } = await client.query({
        query: GET_INGREDIENT,
        variables: { id }
    });

    if (!error) {
        return res.status(200).json({ success: true, data: data});
    };
    console.log(error);
    return res.status(400).json({ success: false, message: error})
};
