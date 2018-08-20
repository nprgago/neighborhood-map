import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Result from './../components/Result'
import Search from './Search'
import { findTerm } from './../utils'
import '../styles/Sidebar.css'

class Sidebar extends Component {
  
  static proptypes = {
    map       : PropTypes.object.isRequired,
    markers   : PropTypes.array.isRequired,
    toggleMenu: PropTypes.func.isRequired
  }

  state = {
    searching: false,
    searchTerm: '',
  }   
  

  togglePopUp = (marker) => {
    marker.togglePopup() 

    // Close previous openned popup
    this.props.markers.map( obj => {
      if (obj.properties.id !== marker.properties.id) {
        if (obj._popup.isOpen())
          obj.togglePopup()        
      }
    })  
  }

  removeFromMap = (marker) => marker.remove()
  
  addToMap = (marker) => marker.addTo(this.props.map)
  
  removeAllMarkers = (markers) => {
    if (markers.length !== 0) {
      for (let marker of markers) {
        this.removeFromMap(marker)
      }
    }
  }
    
  addMarkers = (markers, data) => {
    markers.filter(marker => findTerm(marker.properties.title, data)).map(marker => {
      this.addToMap(marker)
    })
  }

  setTerm = (data, markers) => {
    this.addMarkers(markers, data)
    this.setState({ searchTerm: data })
  }

  render () {
    
    const { searching, searchTerm } = this.state
    const { markers, toggleMenu } = this.props
    
    return (
      <div className="sidebar">
        <h1 className="sidebar-title">Aveiro Locations</h1>
        <Search 
          setTerm = {(data) => this.setTerm(data, markers)}
          removeAllMarkers = {() => this.removeAllMarkers(markers)}
          isSearching = {searching}
        />
        <div id="results">
          {searchTerm !== '' 
            ? (markers.filter(marker => findTerm(marker.properties.title, searchTerm)).map(marker => (
              <Result 
                key = {marker.properties.id}
                title = {marker.properties.title}
                togglePopUp = {() => this.togglePopUp(marker)}
                toggleMenu = {() => toggleMenu()}
              />
            ))) : (markers.map(marker => (
              <Result 
                key = {marker.properties.id}
                title = {marker.properties.title}
                togglePopUp = {() => this.togglePopUp(marker)}
                toggleMenu = {() => toggleMenu()}
              />
            )))
          }
        </div>
      </div>
    )
  }
}

export default Sidebar