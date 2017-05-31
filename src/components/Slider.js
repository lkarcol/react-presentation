import React, { Component } from 'react'
import { connect } from 'react-redux';

import SliderPanel from './slider/SliderPanel';

import './../css/App.css';

class Slider extends Component {


    constructor() {
        super();

        this.timer = null;
        this.iterator = 0;

        this.state = {
            slides: [],
            current: null
        }
    }

    componentWillReceiveProps(nextProps) {
        const {slider} = this.props;
        const mode = nextProps.slider.mode;

        if (mode !== true) {
            this.stopSlider();
            return;
        }
        this.startSlideTimer();
    }

    componentWillMount() {
        this.slideGenerator();
        this.setState({ current: this.state.slides[0] });
        if (this.props.slider.mode === true)
            this.startSlideTimer();
    }

    startSlideTimer() {
        this.timer = setInterval(() => {
            this.setState({ current: this.state.slides[this.iterator] });
            this.iterator++;
            if (this.iterator > this.state.slides.length-1) {
                this.iterator = 0;
            }
        }, 1000);
    }

    componentWillUnmount() {
        this.stopSlider();
    }

    stopSlider() {
        clearInterval(this.timer);
    }

    slideGenerator() {
        const slides = this.props.slide;

        let sliderContent = this.state.slides;

        for (let val in slides) {

            let slideContent = slides[val].content;

            sliderContent.push(
                <div id="sliderSlide" dangerouslySetInnerHTML={{ __html: slideContent }} key={val}>
                </div>
            );
        }

        this.setState({ slides: sliderContent });
    }

    nextSlide() {
        this.iterator++;
        if (this.iterator > this.state.slides.length-1) {
            this.iterator = 0;
        }
        this.setState({ current: this.state.slides[this.iterator] });
    }

    prevSlide() {
        this.iterator--;
        if (this.iterator < 0) {
            this.iterator = this.state.slides.length-1;
        }
        this.setState({ current: this.state.slides[this.iterator] });
    }

    render() {
        return (
            <div id="slider" ref="slider">
                {this.state.current}
                <SliderPanel next={this.nextSlide.bind(this)} prev={this.prevSlide.bind(this)} {...this.props} />
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        slide: state.slide,
        slider: state.slider
    }
}

export default connect(mapStateToProps)(Slider)     