const dev = process.env.NODE_ENV === 'production';
export const server = dev ? 
    'https://tangerine-bienenstitch-846e2a.netlify.app/' :
    'http://localhost:5000';
