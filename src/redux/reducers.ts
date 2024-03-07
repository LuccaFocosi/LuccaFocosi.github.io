import { combineReducers } from 'redux';

type actionType = {
    type: string,
    payload: number,
};

const EstadoInicialJogos: {pontos: number, jogos: string[]} = {
    pontos: 0,
    jogos: [],
};
const Jogos = (state = EstadoInicialJogos, action: actionType) => {
    const stateProvisorio = {...state};
    switch (action.type) {
        case "Ganhar_pontos":
            stateProvisorio.pontos+= action.payload;
            break;
        default:
            break;
    }
    return stateProvisorio;
};

const rootReducer = combineReducers({
    Jogos,
});

export default rootReducer;
