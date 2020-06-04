import api from  '../services/api';


const getApiData =  () => {
    return  api.get(null,{
        params: {
            nameStartsWith: 'spi',
        },
    });
}

export default getApiData;