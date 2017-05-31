const slideInitialState = {
   
};
export default function slide(state = slideInitialState, action) {
    switch (action.type) {
        case 'NewSlide':
            let newSlide = action.slide;
            let copy = Object.assign({}, state);
            copy[newSlide.sid] = newSlide;
            return copy;
        case 'UpdateContent':
            let text = action.text;
            let sid = action.sid;
            let t = Object.assign({}, state);
            t[sid].content = text;
            return t;
        case 'DELETE_SLIDE':
             sid = action.sid;
             let newState = Object.assign({},state);
             delete newState[sid];
            return newState;
        default:
            return state
    }
}