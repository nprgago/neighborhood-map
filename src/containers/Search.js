import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import Input from '../components/Input';
import '../styles/Search.css'

class Search extends Component {
  
  static proptypes = {
    setTerm: PropTypes.func.isRequired,
    removeAllMarkers: PropTypes.func.isRequired,
  }

  state = {
    query: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  applySearch = () => {
    this.props.setTerm(this.state.query)
  }

  render () {
  
    const { query } = this.state
    const { removeAllMarkers } = this.props
    
    return (
      <div className="search" role="search">
        <Input 
          query         = {query}
          handleChange  = {this.handleChange}
        />
        <Button 
          applySearch = {() => this.applySearch()}
          removeAllMarkers = {() => removeAllMarkers()}
        />
      </div>   
    )
  }
} 

export default Search