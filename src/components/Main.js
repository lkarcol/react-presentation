import React, { Component } from 'react'
import { connect } from 'react-redux';
import Tools from './ToolsPanel';
import Slide from './Slide';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { loadSlideFromServer } from './../actions/slides';

class Main extends Component {


    componentWillMount(){
        let {dispatch , match} = this.props;
        console.log(this.props);
        let path = match.path;
        if( match.params.hash ){
            let key = match.params.hash;
            dispatch(loadSlideFromServer(key));
        }
    }

    slideRender() {
        const {app, slide} = this.props;
        if (Number.isInteger(app.activeSlide)) {

            let content = slide[app.activeSlide].content;
            return <Slide content={content} />
        }

        return "";
    }

    setShareLink() {
        if (this.props.app.pid != null) {
            return (
                <div id="link-window">
                    <InputGroup>
                        <InputGroupAddon>Share link</InputGroupAddon>
                        <Input placeholder="presentation link" value={window.location.host  + window.location.pathname + '#/load/' + this.props.app.pid} readOnly/>
                    </InputGroup>
                </div>
            );
        }

        return "";
    }

    render() {

        return (
            <div>
                {this.setShareLink()}
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