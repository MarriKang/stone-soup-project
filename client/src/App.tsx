import React from 'react';
import logo from './logo.svg';
import './App.css';

type MyProps = {  };
type MyState = { apiResponse: string };

class App extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = { 
      apiResponse: ""
     }
  }

  callAPI() {
    fetch("/api/users")
        .then(res => res.json())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    console.log(this.state.apiResponse[0])
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            uh
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
