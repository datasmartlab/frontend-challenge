const INICIAL_STATE = {
    heros: ["aaaas"]
};

export default function hero(state = INICIAL_STATE, action){
    if(action.type === 'getHero'){
        return{
            ...state,
            heros: action.data
        }
    }

    return state;

}