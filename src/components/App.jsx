import React, { Component } from 'react';
//importing components & context
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
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
        <LanguageContext.Provider
          value={this.state.language}
        >
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}
export default App;
