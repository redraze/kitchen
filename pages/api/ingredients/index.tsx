import dbConnect from 'config/dbConnect';
import { client } from 'config/client';
import { GET_INGREDIENTS } from 'lib/queries';

dbConnect();

export default async function handler(_req: any, res: any) {
    const { error, data } = await client.query({
        query: GET_INGREDIENTS  
    });

    if (!error) {
        return res.status(200).json({ success: true, data: data});
    };
    console.log(error);
    return res.status(400).json({ success: false, message: error})
};
