import * as React from 'react';
import styled from 'styled-components';
import { Json2Ts } from './utils/json2';

const AppWrapper = styled.div`
  width: 60%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Options = styled.div`
  padding: 10px;
`;

const TextWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  display: block;
  flex-grow: 1;
  resize: none;
`;

interface IAppState {
  jsonInput: string;
  resultOutput: string;
  errorMessage: string;
}

class App extends React.Component<{}, IAppState> {

  state = {
    jsonInput: '',
    resultOutput: '',
    errorMessage: ''
  };

  convertJsonToTs = () => {
    const json2ts = new Json2Ts({});
    this.setState({
      errorMessage: ''
    });
    try {
      const json = JSON.parse(this.state.jsonInput);
      const resultOutput = json2ts.convert(json);
      this.setState({
        resultOutput
      });
    } catch (e) {
      this.setState({
        errorMessage: e.message
      });
    }
    
  }

  onJsonInputChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    this.setState({
      jsonInput: value
    });
  }

  render() {
    return (
      <AppWrapper>
        <TextWrapper>
          <TextArea onChange={this.onJsonInputChange} />
        </TextWrapper>
        <Options>
          <button onClick={this.convertJsonToTs}>Convert</button>
          <div>{this.state.errorMessage}</div>
        </Options>
        <TextWrapper>
          <TextArea value={this.state.resultOutput} />
        </TextWrapper>
      </AppWrapper>
    );
  }
}

export default App;
