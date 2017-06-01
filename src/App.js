import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


import Main from './components/Main';
import LP from './components/LeftPanel';
import Tools from './components/ToolsPanel';

class App extends Component {

  render() {
    return (
      <Container fluid={true}>
        <Tools />
        <div className="present">
          <Row>
            <Col className="left" xs="2" sm="2"><LP /></Col>
            <Col className="right" xs="10" sm={{ size: 8, offset: 1 }}>
              <Main {...this.props} />
            </Col>
          </Row>
        </div>

      </Container>
    );
  }
}

export default App;
