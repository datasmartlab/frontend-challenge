import axios from "axios";
import md5 from "md5";

const baseURL = "http://gateway.marvel.com/v1/public/";
const publicKey = "0efb0564d15c2c570005c917136bcacb";
const privateKey = "afa40204a5b1766c14d1f00f14348ce9a922e9f0";

const timestamp = new Date().getMilliseconds();
const hash = md5(timestamp + privateKey + publicKey);

export async function getHeroes(offset=0,limite=20) {
  const api = axios.create({
    baseURL: baseURL,
    params: {
      apikey: publicKey,
      ts: timestamp,
      hash: hash,
      limit:limite,
      offset:offset,
    },
  });
  const resposta = await api.get("characters");
  return resposta.data.data.results;
}

export async function getCountHeroes() {
  const api = axios.create({
    baseURL: baseURL,
    params: {
      apikey: publicKey,
      ts: timestamp,
      hash: hash,
    },
  });
  const resposta = await api.get("characters");
  return resposta.data.data.total
}

export async function getHeroInfo(id:number){
  const api = axios.create({
    baseURL: baseURL,
    params: {
      apikey: publicKey,
      ts: timestamp,
      hash: hash,
    },
  });
  const resposta = await api.get(`characters/${id}`);
  return resposta.data.data.results;
}
