import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import '../styles/Button.css'

class Button extends Component {
  
  static propTypes = {
    applySearch      : PropTypes.func.isRequired,
    isSearching     : PropTypes.bool.isRequired
  }
  
  render () {
    
    const { applySearch } = this.props
    
    return (
      <div className="search-filter">
        <button onClick={applySearch}>
          <FontAwesomeIcon icon = {faFilter} />
          Filter
        </button>
      </div>   
    )
  }
} 

export default Button