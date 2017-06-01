import database from './../reducers/config';
import _ from 'lodash-uuid';

export function savePresentation(present, pid) {

    if (pid != null) {

        return dispatch => {
            database.ref('/').child('data').child(pid).set(present).then(() => {
                return dispatch({
                    type: 'SAVE_PRESENTATION',
                    key: pid
                });
            });
        }

    } else {

        return dispatch => {
            database.ref('/').child('data').push(present).then((printKey) => {
                return dispatch({
                    type: 'SAVE_PRESENTATION',
                    key: printKey.key
                });
            });
        }
    }
}

export function loadSlideFromServer(key) {
    console.log(key);
    return dispatch => {
        var presentation = database.ref('/').child('data').child(key);
        presentation.on('value', function (snapshot) {
            return dispatch({
                type: 'LOAD_FROM_SERVER',
                slide:snapshot.val()
            });
        });
    }
};

export function newSlide(slide) {

    return {
        type: 'NEW_SLIDE',
        slide
    }
};


export function updateContent(text, sid) {

    return {
        type: 'UPDATE_CONTENT',
        text,
        sid
    }
}

export function deleteSlide(sid) {

    return {
        type: 'DELETE_SLIDE',
        sid
    }
}



export function setSlide(sid) {

    return {
        type: 'SET_SLIDE',
        sid
    }
}

