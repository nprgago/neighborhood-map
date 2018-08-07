import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import Input from '../components/Input';
import '../styles/Search.css'

class Search extends Component {
  
  state = {
    query : '',
    searching : false
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  applySearch = (e) => {
    this.setState({
      searching: true
    })
  } 

  render () {
    console.log('query', this.state.query) //remove
    console.log('searching', this.state.searching) //remove
    return (
      <div className="search">
        <Input 
          query         = {this.state.query}
          handleChange  = {this.handleChange}
        />
        <Button 
          searching     = {this.state.searching}
          applySearch   = {this.applySearch}
        />
      </div>   
    )
  }
} 

export default Search