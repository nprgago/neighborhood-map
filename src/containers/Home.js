import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Menu from './Menu'
import Map from './Map'
import '../styles/home.css'

class Home extends Component {
  
  state = {
    isLoading: true
  }  
    
  render () {
    return (
      <div className="home">
        <Sidebar />
        <Menu />
        <Map />
      </div>
    )
  }
}

export default Home