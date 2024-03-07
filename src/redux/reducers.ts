import { combineReducers } from 'redux';

type actionType = {
    type: string,
    payload: number,
};

const EstadoInicialJogos = {
    Pontos: 0,
    jogos: [],
};
const Jogos = (state = EstadoInicialJogos, action: actionType) => {
    const stateProvisorio = {...state};
    switch (action.type) {
        case "Ganhar_pontos":
            stateProvisorio.Pontos+= action.payload;
            break;
        default:
            break;
    }
    return stateProvisorio;
};

const Reducer = combineReducers({
    Jogos,
});

export default Reducer;
