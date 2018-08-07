import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Search from './Search'
import '../styles/sidebar.css'

class Sidebar extends Component {
  
  state = {
    results: [],
  }
  
  render () {
    return (
      <div className="sidebar">
        <h1 className="sidebar-title">Aveiro Locations</h1>
        <Search />
      </div>
    )
  }
}

export default Sidebar