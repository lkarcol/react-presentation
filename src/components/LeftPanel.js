import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setSlide } from './../actions/slides';


import './../css/LeftPanel.css';

class LeftPanel extends Component {

    setSlide(val) {
        let {dispatch} = this.props;
        dispatch(setSlide(parseInt(val,10)));
    }

    generateThumb() {
        const slides = this.props.slide;

        let thumb = [];
        for (let val in slides) {

            let slideContent = slides[val].content;

            thumb.push(
                <div dangerouslySetInnerHTML={{__html:slideContent }} onClick={this.setSlide.bind(this, val)} className="thumb" key={val}>
                </div>
            );
        }
        return thumb;
    }

    render() {
        return (
            <div>{this.generateThumb()}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        slide: state.slide
    }
}
export default connect(mapStateToProps)(LeftPanel)