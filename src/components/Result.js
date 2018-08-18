import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MarkerIcon } from './../components/Icons'
import './../styles/Result.css'

class Result extends Component {

  static proptypes = {
    togglePopUp: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }
   
  render() {
    
    const { togglePopUp, title } = this.props
    
    return (
      <div className="result">
        <MarkerIcon />
        <div 
          className="result-label"
          onClick={() => togglePopUp()}
        >{title}</div>
      </div>
    )
  }
}


export default Result