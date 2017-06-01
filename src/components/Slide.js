import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import TinyMCE from 'react-tinymce';
import { updateContent } from './../actions/slides';

class Slide extends Component {

  constructor(props) {
    super(props);
    this.tiny = null;
  }

  _handleEditorChange(e) {
    const {dispatch,app} = this.props;
    //console.log(this.props);
   
    dispatch(updateContent(e.target.getContent(), app.activeSlide));
  }

  _init(e) {
    console.log("init");
    this.tiny = e.target;
    this.tiny.setContent(this.props.content);
  }

  componentWillReceiveProps(nextProps) {
    let sid = this.props.app.activeSlide;
    let nextSid = nextProps.app.activeSlide;
     if(sid != nextSid)
      this.tiny.setContent(nextProps.content);
  }

  render() {

    return (
      <TinyMCE
        content=""

        config={{
          height: 420,
          theme: 'modern',
          plugins: [
            'advlist autolink lists link image charmap print preview hr anchor pagebreak',
            'searchreplace wordcount visualblocks visualchars code fullscreen',
            'insertdatetime media nonbreaking save table contextmenu directionality',
            'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help'
          ],
          toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
          toolbar2: 'print preview media | forecolor backcolor | fontsizeselect  | emoticons | codesample help',
          image_advtab: true,
          templates: [
            { title: 'Test template 1', content: 'Test 1' },
            { title: 'Test template 2', content: 'Test 2' }
          ],
          fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt'
        }}
        onChange={this._handleEditorChange.bind(this)}
        onInit={this._init.bind(this)}

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