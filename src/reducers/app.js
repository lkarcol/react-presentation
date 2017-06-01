const appInitialState = {
    activeSlide: "",
    slider: false,
    pid: null
}

export default function app(state = appInitialState, action) {
    switch (action.type) {
        case 'SET_SLIDE':
            let n = Object.assign({}, state);
            n.activeSlide = action.sid;
            console.log(n);
            return n;
        case 'SAVE_PRESENTATION':
            n = Object.assign({}, state);
            n.pid = action.key;
            return n;
        default:
            return state
    }
}

