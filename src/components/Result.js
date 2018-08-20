import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MarkerIcon } from './../components/Icons'
import './../styles/Result.css'

class Result extends Component {

  static proptypes = {
    togglePopUp: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    toggleMenu : PropTypes.func.isRequired
  }
  
  handleClick = () => {
    this.props.togglePopUp()
    
    if (window.innerWidth <= 500) {
      this.props.toggleMenu()
    } 
  }

  render() {
    
    const { title } = this.props
        
    return (
      <div className="result">
        <MarkerIcon />
        <div 
          className="result-label"
          onClick={() => this.handleClick()}
        >{title}</div>
      </div>
    )
  }
}


export default Result