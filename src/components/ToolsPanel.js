import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateTextPositon, newSlide, setSlide, newText, updateText, setForWriting as writing } from './../actions/slides';

class Tools extends Component {

    addSlide() {
        console.log(this.props);
        const {dispatch} = this.props;
        const sid = Math.floor((Math.random() * 2024) + 154);

        let slide = {
            sid: sid,
            sl: []
        };



        dispatch(writing(false));
        dispatch(newSlide(slide));
        dispatch(setSlide(sid));
    }


    setForWriting() {
        const {dispatch} = this.props;
        dispatch(writing(true));
    }

    render() {
        return (
            <div>
                <button onClick={this.addSlide.bind(this)} type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-plus"></span>
                </button>
                <button onClick={this.setForWriting.bind(this)} type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-pencil"></span>
                </button>
            </div>
        )
    }
}

export default Tools