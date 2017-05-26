export  function newSlide(slide){
//console.log(slide);
    return {
        type:'NewSlide',
        slide
    }
};

export  function newText(text,sid){
//console.log(slide);
    return {
        type:'NewText',
        text,
        sid
    }
}

export  function updateText(text,tid,sid){
//console.log(slide);
    return {
        type:'UpdateText',
        text,
        sid,
        tid
    }
}

export  function updateTextPositon(tid,sid,coor){
//console.log(slide);
    return {
        type:'UpdateTextPositon',
        sid,
        tid,
        top:coor.top,
        left:coor.left
    }
}

export  function setSlide(sid){
//console.log(slide);
    return {
        type:'SetSlide',
        sid
    }
}

export  function setForWriting(s){
//console.log(slide);
    return {
        type:'Writing',
        w:s
    }
}