const appInitialState = {
    activeSlide: 0,
    writing: false,
    fontSize: 15
}

export default function app(state = appInitialState, action) {
    switch (action.type) {
        case 'SetSlide':
            let n = Object.assign({}, state);
            n.activeSlide = action.sid;
            return n;
        case 'Writing':
            let w = Object.assign({}, state);
            w.writing = action.w;
            return w;
        default:
            return state
    }
}

