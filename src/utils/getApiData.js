import api from  '../services/api';


const getApiData =  (search) => {
    return  api.get(null,{
        params: {
            nameStartsWith: search,
        },
    });
}

export default getApiData;