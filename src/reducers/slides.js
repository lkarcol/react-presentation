const slideInitialState = {

};
export default function slide(state = slideInitialState, action) {
    switch (action.type) {
        case 'NEW_SLIDE':
            let newSlide = action.slide;
            let copy = Object.assign({}, state);
            copy[newSlide.sid] = newSlide;
            return copy;
        case 'UPDATE_CONTENT':
            let text = action.text;
            let sid = action.sid;
            let t = Object.assign({}, state);
            if (Object.keys(t).length != 0)
                t[sid].content = text;
            return t;
        case 'DELETE_SLIDE':
            sid = action.sid;
            let newState = Object.assign({}, state);
            delete newState[sid];
            return newState;
        case 'LOAD_FROM_SERVER':
            let presentation = action.slide;
            copy = Object.assign({}, state);
            copy = presentation;
            return copy;
        default:
            return state
    }
}