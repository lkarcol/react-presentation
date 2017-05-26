import React, { Component } from 'react'
import { connect } from 'react-redux';
import Tools from './ToolsPanel';
import Slide from './Slide';

class Main extends Component {

    slideRender() {
        const {app, slide} = this.props;

        if (Number.isInteger(app.activeSlide)) {
            let content = slide[app.activeSlide].content;
            return <Slide content={content} />
        }
    }

    render() {
        return (
            <div>
                <Tools />
                {this.slideRender()}
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

export default connect(mapStateToProps)(Main)    