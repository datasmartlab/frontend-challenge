import axios from 'axios';
import md5 from 'md5';

const publicKey = '9e4f80bcd2d4a53abf1798ab7451767e';
const privateKey = 'dab38b7d7a751df582a3ccb558a2e998df2b2a0a';
const ts = Date.now();  


const api = axios.create({
    baseURL: `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${md5(`${ts}${privateKey}${publicKey}`)}`, 
    version: 'Cable',
});

export default api;