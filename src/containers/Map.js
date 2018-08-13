import React, { Component } from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
import { inital } from '../Map'
import '../styles/Map.css'

mapboxgl.accessToken = inital.token

class Map extends Component {
  
  static propTypes = {
    isLoading : PropTypes.bool.isRequired,
    loaded    : PropTypes.func.isRequired
  }

  state = {
    map: ''
  }

  componentDidMount() {

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: inital.style,
      center: [inital.coordinates.lat, inital.coordinates.lng],
      zoom: inital.zoom
    })

    this.props.loaded()
    this.setState({ map })
  }
  
  render () {

    const { isLoading } = this.props
    
    return (    
      <div className="map-container">
        {isLoading && <div>Loading Component</div>}
        <div id="map" ref={ el => this.mapContainer = el } />
      </div>
    )
  }
}

export default Map
