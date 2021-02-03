const INICIAL_STATE = {
    isLoading: true,
    heros: [null]
};

export default function hero(state = INICIAL_STATE, action){
    switch(action.type){
        case "getHero": return{
            ...state,
            heros: action.data
        }

        case "handleLoading": return{
            ...state,
            isLoading: action.isLoading
        }
        
        default: return state;
    }
}