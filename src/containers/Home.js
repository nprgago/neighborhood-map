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
    
    const toggleSidebar = isToggled ? 'sidebar-menu open' : 'sidebar-menu'
    const pushMain = isToggled ? 'main-content push' : 'main-content'

    return (
      <main id="home">
        
        <section className={toggleSidebar}>
          <Sidebar />
        </section>

        <section className={pushMain}>
          <Menu 
            isToggled = { isToggled }
            toggle = { this.toggle }
          />
          <Map />
        </section>


      </main>
    )
  }
}

export default Home