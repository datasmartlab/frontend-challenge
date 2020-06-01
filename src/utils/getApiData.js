import api from  '../services/api';
import md5 from 'md5';

const publicKey = '9e4f80bcd2d4a53abf1798ab7451767e';
const privateKey = 'dab38b7d7a751df582a3ccb558a2e998df2b2a0a';
const ts = Date.now();  

const getApiData =  () => {
    return  api.get(`/characters?ts=${ts}&apikey=${publicKey}&hash=${md5(`${ts}${privateKey}${publicKey}`)}&limit=5`);
}

export default getApiData;