import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/menu.css'

class Menu extends Component {
  
  static propTypes = {
    toggle      : PropTypes.func.isRequired,
    isToggled   : PropTypes.bool.isRequired,
  }
  
  render () {
    
    const { toggle, isToggled } = this.props
    const animation = isToggled ? 'change' : ''

    return (
      <div className="menu">
        <div className={`burguer-icon ${animation}`} onClick={toggle}>
          <div className="bar-one"></div>
          <div className="bar-two"></div>
          <div className="bar-three"></div>
        </div>
      </div>
    )
  }
}

export default Menu