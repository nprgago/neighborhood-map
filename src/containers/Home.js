import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Menu from './Menu'
import Map from './Map'
import '../styles/Home.css'

class Home extends Component {
  
  state = {
    isLoading: true,
    isToggled: false,
    map: {},
    markers: []
  }  
  
  toggle = () => {
    this.setState( (state) => ({
      isToggled: state.isToggled === true ? false : true
    }))
  }

  render () {
    
    const { isToggled, isLoading, map, markers} = this.state
    const toggleSidebar = isToggled ? 'sidebar-menu open' : 'sidebar-menu'
    const pushMain = isToggled ? 'main-content push' : 'main-content'

    return (
      <main id="home">
        
        <section aria-label="Aveiro Location Search" className={toggleSidebar}>
          <Sidebar 
            map = {map}
            markers = {markers}
            toggleMenu = {() => this.toggle()}
          />
        </section>

        <section aria-label="map content" className={pushMain}>
          <Menu 
            isToggled = { isToggled }
            toggle = { this.toggle }
          />
          <Map 
            isLoading = {isLoading}
            loaded = {() => this.setState({ isLoading: false })}
            setMap = {(map, markers) => this.setState({ map, markers })}
          />
        </section>

      </main>
    )
  }
}

export default Home