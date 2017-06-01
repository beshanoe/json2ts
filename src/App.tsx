import * as React from 'react';
import styled from 'styled-components';
import { Json2Ts } from './utils/json2';
import { Button, Form, TextArea, Segment, Divider } from 'semantic-ui-react';

const AppWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 4;
  padding: 20px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
  padding-left: 0;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled(Form) `
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled(TextArea) `
  .ui.form.ui.form & {
    display: block;
    flex-grow: 1;
    resize: none;
    font-family: monospace;
    height: initial;
    max-height: initial;
    min-height: initial;
  }
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

  convertJsonToTs = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
        <Left>
          <StyledForm>
            <StyledTextArea onChange={this.onJsonInputChange} />
          </StyledForm>
          <Divider />
          <StyledForm>
            <StyledTextArea value={this.state.resultOutput} />
          </StyledForm>
        </Left>
        <Right>
          <Segment>
            <Options>
              <Form>
                <Form.Checkbox label="Prepend with I" toggle={true} />
                <Form.Checkbox label="Sort Aphabetically" toggle={true} />
                <Form.Checkbox label="Add export statement" toggle={true} />
                <Divider />
                <Form.Field>
                  <input placeholder="Interface prexix" />
                </Form.Field>
                <Form.Field>
                  <input placeholder="Root object name" />
                </Form.Field>
                <Divider />
                <Button onClick={this.convertJsonToTs}>Convert</Button>
                {this.state.errorMessage && (<div>{this.state.errorMessage}</div>)}
              </Form>
            </Options>
          </Segment>
        </Right>
      </AppWrapper>
    );
  }
}

export default App;
