const appInitialState = {
    activeSlide: ""
}

export default function app(state = appInitialState, action) {
    switch (action.type) {
        case 'SetSlide':
            let n = Object.assign({}, state);
            n.activeSlide = action.sid;
            console.log("Aktiv: "+n.activeSlide);
            return n;
        default:
            return state
    }
}

