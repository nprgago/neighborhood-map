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
    loaded    : PropTypes.func.isRequired,
    setMap    : PropTypes.func.isRequired
  }

  state = {
    lng     : inital.coordinates.lng,
    lat     : inital.coordinates.lat,
    zoom    : inital.zoom,
  }

  componentDidMount() {

    const { lng, lat, zoom } = this.state
    const { loaded, setMap } = this.props
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
       
        // Store object in marker for reuse later
        marker.properties = object
        
        // Highlights Marker When Clicked
        popUp.on('open', () => {
          marker._element.classList.add('color')
          // In mobile devices, fly to location 
          if (window.innerWidth <= 500) {
            map.flyTo({center: [
              marker.properties.coordinates.lng,
              marker.properties.coordinates.lat
            ]})
          }
        })

        popUp.on('close', () => {
          marker._element.classList.remove('color')
        })

      // Push to array
      poi.push(marker)
    })
    
    loaded()
    setMap(map, poi)
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
