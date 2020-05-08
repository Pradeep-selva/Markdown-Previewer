import React, { Component } from 'react';
import './App.css';
import MarkedInput from '../Input/Index'
import styled from 'styled-components';
import MarkedResult from '../Result/index'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 60px;
  margin-bottom:1em;
  font-weight:700;
`;

const EditorContainer = styled.div`
  width:100%;
  height:100%;
  display: flex;
`;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: ''
    }

    this.setContent = this.setContent.bind(this);
  }

  setContent(event) {
    this.setState({ content: event.target.value });
  }

  render() {
    const { content } = this.state;

    return (
      <AppContainer>
        <Title>Markdown Previwer</Title>
        <EditorContainer>
          <MarkedInput
            onChange={this.setContent}
          />
          <MarkedResult
            content={content}
          />
        </EditorContainer>

      </AppContainer>

    );
  }
}

export default App;
