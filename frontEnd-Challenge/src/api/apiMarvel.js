import axios from "axios";
import md5 from "md5";

const baseUrl = process.env.REACT_APP_BASE_URL;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const timestamp = new Date().getMilliseconds();
const hash = md5(timestamp + privateKey + publicKey);

const api = axios.create({
  baseURL: baseUrl,
  params: {
    apikey: publicKey,
    ts: timestamp,
    hash: hash,
  },
});

export async function characterMarvel(offset = 0, limit = 20) {
  const response = await api.get("characters", { params: { offset, limit }});
  return response.data.data;
}

export async function characterId(id) {  
  const response = await api.get("characters", { params: {id}});
  return response.data.data.results;
}
