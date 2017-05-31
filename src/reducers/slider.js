const nameInitialState = {
    mode: false,
    current: 0,
}

export default function slider(state = nameInitialState, action) {
    switch (action.type) {
        case 'STOP__PLAY_SLIDER':
            let newState = Object.assign({}, state);
            newState.mode = action.mode;
            return newState
        default:
            return state
    }
}