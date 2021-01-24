import React, { Component } from 'react';
//importing components
import UserCreate from './UserCreate';
//app component
class App extends Component {
  //component level state
  state = { language: 'english' };
  //changing language
  onLanguageChange = language => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('english')}
          ></i>
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange('dutch')}
          ></i>
        </div>
        <UserCreate />
      </div>
    );
  }
}
export default App;
