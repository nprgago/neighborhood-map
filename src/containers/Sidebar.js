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
   
  render () {
    
    const { searching, searchTerm } = this.state
    const { markers } = this.props
    
    return (
      <div className="sidebar">
        <h1 className="sidebar-title">Aveiro Locations</h1>
        <Search 
          setTerm = {(data) => this.setState({ searchTerm: data })}
          isSearching = {searching}
        />
        <div id="results">
          {searchTerm !== '' 
            ? (markers.filter(marker => findTerm(marker.properties.title, searchTerm)).map(marker => (
              <Result 
                key = {marker.properties.id}
                title = {marker.properties.title}
              />
            ))) : (markers.map(marker => (
              <Result 
                key = {marker.properties.id}
                title = {marker.properties.title}
              />
            )))
          }
        </div>
      </div>
    )
  }
}

export default Sidebar