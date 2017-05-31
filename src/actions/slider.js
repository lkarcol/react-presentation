export default function stopPlaySlider(mode){
    //Mode play = true , stop = false

    if(mode === false){
        mode = true;
    }else{
        mode = false;
    }


    return{
        type:'STOP__PLAY_SLIDER',
        mode: mode
    }
}