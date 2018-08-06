import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Menu from './Menu'
import Map from './Map'
import '../styles/home.css'

class Home extends Component {
  
  state = {
    isLoading: true,
    isToggled: false,
  }  
  
  toggle = () => {
    this.setState( (state) => ({
      isToggled: state.isToggled === true ? false : true
    }))
  }

  render () {
    
    const { isToggled } = this.state
    
    return (
      <div id="home">
        
        <div className="sidebar-menu">
          <Sidebar />
        </div>

        <div className="main-content">
          <Menu 
            isToggled = { isToggled }
            toggle = { this.toggle }
          />
          <Map />
        </div>


      </div>
    )
  }
}

export default Home