import React, { Component } from 'react'
import {connect} from 'react-redux'

import api from './features/api'

import './App.css'

class App extends Component {
  componentDidMount () {
    // Joke ID
    this.props.get(1)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Reducing React, Redux and Redux Saga boilerplate</h2>
        </div>
        <div className="App-intro">
          <api.components.ShowJoke action={api.actions.fetchJoke} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  get: api.actions.fetchJoke.run
}

export default connect(undefined, mapDispatchToProps)(App)
