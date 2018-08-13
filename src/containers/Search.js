import React, { Component } from 'react'
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