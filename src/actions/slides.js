export  function newSlide(slide){

    return {
        type:'NewSlide',
        slide
    }
};


export  function updateContent(text,sid){

    return {
        type:'UpdateContent',
        text,
        sid
    }
}

export  function deleteSlide(sid){

    return {
        type:'DELETE_SLIDE',
        sid
    }
}



export  function setSlide(sid){
    return {
        type:'SetSlide',
        sid
    }
}

