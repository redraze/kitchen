const dev = process.env.NODE_ENV === 'production';
export const server = dev ? 
    'https://kitchen-lilac.vercel.app/' :
    'http://localhost:5000';
