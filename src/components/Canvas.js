import React, { Component, PropTypes } from 'react'
import { fabric } from 'fabric';
import { connect } from 'react-redux';
import Tools from './ToolsPanel';
import { updateTextPositon, newSlide, setSlide, newText, updateText, setForWriting as writing } from './../actions/slides';

class Platno extends Component {

    constructor(props) {
        super(props)

        this.sid = null;
        this.canvas = null;
    }

    componentWillReceiveProps(nextProps, nextState) {
        const {dispatch} = this.props;
        let sid = nextProps.app.activeSlide;
        let texts = nextProps.slide[sid];
        // console.log(sid);

        if (sid !== this.props.app.activeSlide) {
            this.sid = sid;
            let text;

            this.canvas.clear();

            this.canvas.backgroundColor = 'white';
            if (texts.length != 0) {

                texts.forEach((val) => {

                    text = new fabric.IText(val.text, {
                        top: val.y,
                        left: val.x,
                    });

                    Object.defineProperty(text, "tid", { value: val.tid })

                    text.on('changed', function () {
                        dispatch(updateText(this.text, this.tid, sid));
                    });

                    text.on('moving', function () {
                        let coor = {
                            top: this.top,
                            left: this.left
                        }
                        dispatch(updateTextPositon(this.tid, sid, coor));
                    });

                    this.canvas.add(text);
                    this.canvas.setActiveObject(text);

                    text.moveCursorWithoutShift(val.text.length);
                    text.enterEditing();
                });

            }
            //console.log(nextProps);
            return true;
        }
    }

    componentDidMount() {
        this.canvas = new fabric.Canvas('c', {
            width: this.refs.c.clientWidth,
            height: this.refs.c.clientHeight
        });

        this.canvas.on('mouse:down', this.writeSlideText.bind(this));

    }


    writeSlideText(e) {

        const {dispatch} = this.props;

        if (e.target)
            return;

        if (this.props.app.writing === true) {

            let tid = Math.floor((Math.random() * 1024) + 1);
            let sid = this.sid;
            const text = new fabric.IText('', {
                top: e.e.offsetY,
                left: e.e.offsetX
            });

            dispatch(newText({ tid: tid, text: "", y: e.e.offsetY, x: e.e.offsetX }, this.sid));

            Object.defineProperty(text, "tid", { value: tid })

            text.on('changed', function () {
                dispatch(updateText(this.text, this.tid, sid));
            });

            /*  text.on('selected', function (o) {
                  console.log(this);
              });*/
            dispatch(writing(false));
            this.canvas.add(text);
            this.canvas.setActiveObject(text);
            text.enterEditing();
        }


    }



    render() {

        return (

            <div>
                <Tools  {...this.props} />
                <canvas className="col-sm-12" ref="c" id="c"></canvas>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        slide: state.slide,
        app: state.appc
    }
}



export default connect(mapStateToProps)(Platno)                     