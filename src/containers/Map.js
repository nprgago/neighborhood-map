import React, { Component } from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
import { inital, markers, popUps } from '../Map'
import {Popup} from './../containers/Popup'
import 'mapbox-gl/dist/mapbox-gl.css'
import '../styles/Map.css'

mapboxgl.accessToken = inital.token

class Map extends Component {
  
  static propTypes = {
    isLoading : PropTypes.bool.isRequired,
    loaded    : PropTypes.func.isRequired
  }

  state = {
    map     : '',
    lng     : inital.coordinates.lng,
    lat     : inital.coordinates.lat,
    zoom    : inital.zoom,
    markers : []
  }

  componentDidMount() {

    const { lng, lat, zoom } = this.state
    let poi = []

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: inital.style,
      center: [lat, lng],
      zoom: zoom
    })

    markers.map( object => {
      
      // Creat Popup
      let popUp = new mapboxgl.Popup(popUps)
        .setLngLat([object.coordinates.lng, object.coordinates.lat])
        .setHTML(Popup(object))
      
      // Create Markers
      let marker = new mapboxgl.Marker()
        .setLngLat([object.coordinates.lng, object.coordinates.lat])
        .setPopup(popUp)
        .addTo(map)
      
      // Push to array
      poi.push(marker)
    })
    
    this.props.loaded()
    this.setState({ map, markers : poi })
  }


  addToMap = (marker) => marker.addTo(this.state.map)
  removeFromMap = (marker) => marker.remove()
  togglePopUp = (marker) => marker.togglePopup()

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
