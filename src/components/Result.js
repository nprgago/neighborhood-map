import React from 'react'
import { MarkerIcon } from './../components/Icons'
import './../styles/Result.css'

const Result = props => (
  <div className="result">
    <MarkerIcon />
    <div className="result-label">{props.title}</div>
  </div>
)

export default Result