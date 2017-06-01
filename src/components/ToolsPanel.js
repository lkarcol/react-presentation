import React, { Component } from 'react'
import { connect } from 'react-redux';
import { newSlide, setSlide, deleteSlide, savePresentation } from './../actions/slides';
import { Redirect, withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import './../css/App.css';

class Tools extends Component {


    constructor(props) {
        super(props);
        this.iterator = 0;
    }

    _addSlide() {
        const {dispatch, slide} = this.props;
        this.iterator = Object.keys(slide).length;  // How many slides is current

        this.iterator += 1;

        let newSlideObject = {
            sid: this.iterator,
            content: ""
        };

        dispatch(newSlide(newSlideObject));
        dispatch(setSlide(this.iterator));  // Set as active slide
    }

    _removeSlide() {
        const {dispatch, app} = this.props;
        const activeSlide = app.activeSlide;

        dispatch(setSlide(this.nextSlide(activeSlide)));  // Set as active slide
        dispatch(deleteSlide(activeSlide));
    }

    _savePresentation() {
        const {slide, dispatch, app} = this.props;
        if(Object.keys(slide).length == 0){
            alert("Presentation is empty! Add a slide");
            return;
        }
        dispatch(savePresentation(slide, app.pid));
        return;
    }

    // set first slide as active
    nextSlide(key) {
        const {slide} = this.props;
        if (Object.keys(slide).length > 1) {
            for (let value in slide) {
                if (value != key) {
                    return parseInt(value, 10);
                }
            }
        }

        return null;
    }

    render() {
        return (
            <div id="tools" >
                <button onClick={this._addSlide.bind(this)} type="button" title="new slide" className="btn btn-default">
                    <span className="glyphicon glyphicon-plus"></span>
                </button>
                <button onClick={this._removeSlide.bind(this)} title="remove slide" type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-remove"></span>
                </button>
                <button onClick={this._savePresentation.bind(this)} type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-globe"></span>
                </button>
                <Link to="/slider"><button title="show presentation" type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-play"></span>
                </button></Link>
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

export default withRouter(connect(mapStateToProps)(Tools))  