export function getHero(data){
    return{
        type: 'getHero',
        data
    }
};

export function handleLoading(isLoading){
    return{
        type: 'handleLoading',
        isLoading
    }
};