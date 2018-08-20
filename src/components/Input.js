import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/Input.css'

class Input extends Component {
  
  static propTypes = {
    query         : PropTypes.string.isRequired,
    handleChange  : PropTypes.func.isRequired
  }
  
  render () {
    
    const { 
      query, 
      handleChange 
    } = this.props
    
    return (
      <div className="search-input">
        <input 
          id = 'query'
          value = { query }
          onChange = {handleChange}
          placeholder = {`Station Location`}
          type= "text"
          aria-label="What's the desirable Aveiro Location?"
          tabIndex='2'
        />
      </div>   
    )
  }
} 

export default Input