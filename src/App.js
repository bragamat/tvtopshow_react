import React, { Component } from 'react'
import './App.css'
import Navbar from './navbar/navbar'
import Shows from './shows/shows'
class App extends Component {

  render() {
    return (
      <div> 
        <Navbar />
        <Shows />
      </div>
    )
  }
}

export default App;
