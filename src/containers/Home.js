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
      <div id="home">
        
        <div className="sidebar-menu">
          <Sidebar />
        </div>

        <div className="main-content">
          <Menu />
          <Map />
        </div>


      </div>
    )
  }
}

export default Home