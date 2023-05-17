const dev = process.env.NODE_ENV === 'production';
export const server = dev ? 
    'https://kitchen-git-test-redraze.vercel.app/' :
    'http://localhost:5000';