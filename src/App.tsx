import * as React from 'react';
import './App.css';

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <div className="text-holder">
          <textarea className="usertext" id="from" />
        </div>
        <div className="options">
          <button id="convert">Convert</button>
        </div>
        <div className="text-holder">
          <textarea className="usertext" id="to" />
        </div>
      </div>
    );
  }
}

export default App;
