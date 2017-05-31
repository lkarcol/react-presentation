const appInitialState = {
    activeSlide: "",
    slider:false
}

export default function app(state = appInitialState, action) {
    switch (action.type) {
        case 'SetSlide':
            let n = Object.assign({}, state);
            n.activeSlide = action.sid;
            return n;
        default:
            return state
    }
}

