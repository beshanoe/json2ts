import * as React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
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

class App extends React.Component<{}, null> {
  render() {
    return (
      <AppWrapper>
        <TextWrapper>
          <TextArea />
        </TextWrapper>
        <Options>
          <button>Convert</button>
        </Options>
        <TextWrapper>
          <TextArea />
        </TextWrapper>
      </AppWrapper>
    );
  }
}

export default App;
