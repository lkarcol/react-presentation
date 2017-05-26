export  function newSlide(slide){
//console.log(slide);
    return {
        type:'NewSlide',
        slide
    }
};


export  function updateContent(text,sid){
//console.log(slide);
    return {
        type:'UpdateContent',
        text,
        sid
    }
}

export  function deleteSlide(sid){
//console.log(slide);
    return {
        type:'DELETE_SLIDE',
        sid
    }
}



export  function setSlide(sid){
//console.log(slide);
    return {
        type:'SetSlide',
        sid
    }
}

