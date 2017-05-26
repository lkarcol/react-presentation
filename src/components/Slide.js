import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import Tools from './ToolsPanel';
import TinyMCE from 'react-tinymce';
import { newSlide, setSlide, updateContent } from './../actions/slides';

class Slide extends React.Component {

  constructor(){
    super();
    this.tiny = null;
  }

  handleEditorChange(e){
    const {dispatch, app} = this.props;
    this.tiny = e.target;
    dispatch(updateContent(e.target.getContent(), app.activeSlide));
  }

  componentWillReceiveProps(nextProps) {
    const {app} = this.props;
    const sid = app.activeSlide;

    if (sid != nextProps.app.activeSlide && this.tiny != null) {
      this.tiny.setContent(nextProps.content);
    }
    return false;
  }

  render() {
    return (
      <TinyMCE
        content={this.props.content}
     
        config={{
          height : 420,
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright |  fontselect | code'
        }}
        onChange={this.handleEditorChange.bind(this)}
        />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    slide: state.slide,
    app: state.appc
  }
}



export default connect(mapStateToProps)(Slide)                     