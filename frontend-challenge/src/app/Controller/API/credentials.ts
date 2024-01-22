import md5 from 'md5';

const ts =  new Date().getMilliseconds();
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const hash= md5(ts+ `${apiKey}` + process.env.NEXT_PUBLIC_API_PRIVATE_KEY)
export const credentials = `ts=${ts}&apikey=${apiKey}&hash=${hash}`;