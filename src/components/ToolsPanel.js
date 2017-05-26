import React, { Component } from 'react'
import { connect } from 'react-redux';
import { newSlide, setSlide, deleteSlide } from './../actions/slides';

class Tools extends Component {


    constructor() {
        super();
        this.iterator = 0;
    }

    addSlide() {
        const {dispatch} = this.props;
        this.iterator += 1;  // Interating slide id

        let slide = {
            sid: this.iterator,
            content: ""
        };

        dispatch(newSlide(slide));
        dispatch(setSlide(this.iterator));  // Set as active slide
    }

    removeSlide() {
        const {dispatch, app} = this.props;
        const activeSlide = app.activeSlide;

        dispatch(setSlide(this.nextSlide(activeSlide)));  // Set as active slide
        dispatch(deleteSlide(activeSlide));
    }

    //Nearest remove slide   , set next slide as active
    nextSlide(key) {
        const {slide} = this.props;
        for (let value in slide) {
            if (value != key){
                return  parseInt(value);
            }        
        }
    }

    render() {
        return (
            <div style={{ marginBottom: 10 }}>
                <button onClick={this.addSlide.bind(this)} type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-plus"></span>
                </button>
                <button onClick={this.removeSlide.bind(this)} type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-remove"></span>
                </button>
                <button type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-save"></span>
                </button>
                <button type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-edit"></span>
                </button>
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

export default connect(mapStateToProps)(Tools)  