import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import RepoList from './components/repo_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { repos: [] };
  }

  componentWillMount() {
    axios.get('https://api.github.com/users/axecopfire/repos')
    .then(response => this.setState({repos: response.data}));
  }

  render() {
    return (
      <div>
        <RepoList  repos={this.state.repos}/>
      </div>
    );
  }
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));

});