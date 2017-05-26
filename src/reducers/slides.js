const slideInitialState = {};
export default function slide(state = slideInitialState, action) {
    switch (action.type) {
        case 'NewSlide':
            let newS = action.slide;
            let copy = Object.assign({}, state);
            copy[newS.sid] = newS.sl;
            // console.log(copy);
            return copy;
        case 'NewText':
            const text = action.text;
            let sid = action.sid;
            let c = Object.assign({}, state);
            //   console.log(c);
            //   console.log(c[sid]);
            c[sid].push(text);
            return c;
        case 'UpdateText':
            text = action.text;
            sid = action.sid;
            let tid = action.tid;

            let t = Object.assign({}, state);
            // console.log(t[sid]);
            console.log("sid" + sid);
            let index = t[sid].findIndex((t) => {
                return t.tid === tid;
            });

            t[sid][index].text = text;

            return t;
        case 'UpdateTextPositon':
            let {top, left} = action;
            sid = action.sid;
            tid = action.tid;

            t = Object.assign({}, state);
            // console.log(t[sid]);
            console.log("sid" + sid);
            index = t[sid].findIndex((t) => {
                return t.tid === tid;
            });

            t[sid][index].x = left;
            t[sid][index].y = top;

            return t;
        default:
            return state
    }
}