import React, { Component } from 'react'
import stopPlaySlider from './../../actions/slider';
import { Link} from 'react-router-dom'

class SliderPanel extends Component {

    //If slider is stopped , this function will start slider
    //else will stop
    _stopSlider() {
        let {dispatch} = this.props;
        console.log(this.props.slider);
        dispatch(stopPlaySlider(this.props.slider.mode));
    }


    // Mode 1: this.props.slider.mode === false  is if slider is stopped
    // Mode 2: this.props.slider.mode === true   is if slider is not stopped 
    setSliderModeButton() {

        if (this.props.slider.mode === false) {
            return (
                <button onClick={this._stopSlider.bind(this)} type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-play"></span>
                </button>
            )
        }

        return (
            <button onClick={this._stopSlider.bind(this)} type="button" className="btn btn-default">
                <span className="glyphicon glyphicon-stop"></span>
            </button>
        )
    }

    render() {
    
        return (
            <div>
                <div id="sliderPanel" style={{ marginBottom: 10 }}>
                    {this.setSliderModeButton()}
                    <button onClick = { () => this.props.prev()} type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-backward"></span>
                    </button>
                    <button onClick = { () => this.props.next()} type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-forward"></span>
                    </button>
                    <Link to="/"><button type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-off"></span>
                    </button></Link>
                
                </div>
            </div>
        )
    }
}

export default SliderPanel