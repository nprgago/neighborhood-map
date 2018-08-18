import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Result from './../components/Result'
import Search from './Search'
import { findTerm } from './../utils'
import '../styles/Sidebar.css'

class Sidebar extends Component {
  
  static proptypes = {
    map     : PropTypes.object.isRequired,
    markers : PropTypes.array.isRequired
  }

  state = {
    searching: false,
    searchTerm: '',
  }   
  

  togglePopUp = (marker) => marker.togglePopup()
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
    const { markers } = this.props
    
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
              />
            ))) : (markers.map(marker => (
              <Result 
                key = {marker.properties.id}
                title = {marker.properties.title}
                togglePopUp = {() => this.togglePopUp(marker)}
              />
            )))
          }
        </div>
      </div>
    )
  }
}

export default Sidebar