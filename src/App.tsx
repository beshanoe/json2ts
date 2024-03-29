import * as React from 'react';
import styled from 'styled-components';
import { Json2Ts, IJson2TsConfig } from './utils/json2';
import { Button, Form, TextArea, Segment, Divider, Icon } from 'semantic-ui-react';

const AppWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin-bottom: 20px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 4;
  margin-right: 20px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 25%;
  padding-left: 0;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled(Form) `
  flex-grow: ${props => props.flex || 1};
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

const ErrorMessage = styled.div`
  margin-top: 10px;
  color: red;
`;

interface IAppState {
  jsonInput: string;
  resultOutput: string;
  errorMessage: string;
  config: IJson2TsConfig;
}

class App extends React.Component<{}, IAppState> {

  constructor() {
    super();
    this.state = {
      jsonInput: '',
      resultOutput: '',
      errorMessage: '',
      config: {
        prependWithI: true,
        sortAlphabetically: false,
        addExport: false,
        useArrayGeneric: false,
        optionalFields: false,
        prefix: '',
        rootObjectName: 'RootObject'
      }
    };
  }

  convertJsonToTs = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const json2ts = new Json2Ts(this.state.config);
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

  onOptionsFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>, data: { name?: string, checked?: boolean } | undefined = void 0) => {
    const target = e.target;
    const value = data ? data.checked : target.value;
    const name = data ? data.name : target.name;
    if (name) {
      this.setState({
        config: {
          ...this.state.config,
          [name]: value
        }
      });
    }
  }

  render() {
    const { resultOutput, errorMessage, config } = this.state;
    return (
      <AppWrapper>
        <Header>
          <div>
            <h3>json => ts</h3>
          </div>
          <a target="_blank" href="https://github.com/beshanoe/json2ts">
            <Icon name="github square" color="pink" size="large" link={true} />
          </a>
        </Header>
        <Main>
          <Left>
            <StyledForm flex={1}>
              <StyledTextArea placeholder="Put your JSON here" onChange={this.onJsonInputChange} />
            </StyledForm>
            <Divider />
            <StyledForm flex={3}>
              <StyledTextArea placeholder="See result here" value={resultOutput} />
            </StyledForm>
          </Left>
          <Right>
            <Segment>
              <Options>
                <Form onSubmit={this.convertJsonToTs}>
                  <Form.Checkbox
                    name="prependWithI"
                    checked={config.prependWithI}
                    label="Prepend with I"
                    onChange={this.onOptionsFieldChange}
                    toggle={true}
                  />
                  <Form.Checkbox
                    name="sortAlphabetically"
                    checked={config.sortAlphabetically}
                    label="Sort Aphabetically"
                    onChange={this.onOptionsFieldChange}
                    toggle={true}
                  />
                  <Form.Checkbox
                    name="addExport"
                    checked={config.addExport}
                    label="Add export statement"
                    onChange={this.onOptionsFieldChange}
                    toggle={true}
                  />
                  <Form.Checkbox
                    name="useArrayGeneric"
                    checked={config.useArrayGeneric}
                    label="Use Array<> notation"
                    onChange={this.onOptionsFieldChange}
                    toggle={true}
                  />
                  <Form.Checkbox
                    name="optionalFields"
                    checked={config.optionalFields}
                    label="Optional fields"
                    onChange={this.onOptionsFieldChange}
                    toggle={true}
                  />
                  <Divider />
                  <Form.Field>
                    <input
                      name="prefix"
                      value={config.prefix}
                      onChange={this.onOptionsFieldChange}
                      placeholder="Interface prexix"
                    />
                  </Form.Field>
                  <Form.Field>
                    <input
                      name="rootObjectName"
                      value={config.rootObjectName}
                      onChange={this.onOptionsFieldChange}
                      placeholder="Root object name"
                    />
                  </Form.Field>
                  <Divider />
                  <Button onClick={this.convertJsonToTs}>Convert</Button>
                  {errorMessage && (
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                  )}
                </Form>
              </Options>
            </Segment>
          </Right>
        </Main>
      </AppWrapper>
    );
  }
}

export default App;
