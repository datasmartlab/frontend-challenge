import api from  '../services/api';

const getApiData =  (id) => {
    return  api.get(null,{
        params: {
            id: id,
        },
    });
}

export default getApiData;