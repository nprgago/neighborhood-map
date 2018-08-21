import React, { Component } from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
import { inital, markers, popUps } from '../Map'
import {Popup} from './../containers/Popup'
import Loading from './../components/Loading'
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

    map.on('load', () => {  
      loaded()
    })   

    for (let obj of markers) {
      // Creat Popup
      let popUp = new mapboxgl.Popup(popUps)
        .setLngLat([obj.coordinates.lng, obj.coordinates.lat])
        .setHTML(Popup(obj))
      
      // Create Markers
      let marker = new mapboxgl.Marker()
        .setLngLat([obj.coordinates.lng, obj.coordinates.lat])
        .setPopup(popUp)
        .addTo(map)
       
        // Store object in marker for reuse later
        marker.properties = obj
        
        // Highlights Marker When Clicked
        popUp.on('open', () => {
          marker._element.classList.add('color')
          // In mobile devices, fly to location 
          if (window.innerWidth <= 500) {
            map.flyTo({center: [
              marker.properties.coordinates.lng,
              marker.properties.coordinates.lat
            ],
            zoom: this.state.zoom,
            speed: 0.5
          })
          }
        })
  
        popUp.on('close', () => {
          marker._element.classList.remove('color')
        })
  
      // Push to array
      poi.push(marker)
    }

    setMap(map, poi)
  }

  render () {

    const { isLoading } = this.props
    const blur = isLoading ? {filter: 'blur(5px)'} : {filter: 'none'} 

    return (    
      <div className="map-container" role="application" >
        {isLoading && <Loading />}
        <div id="map" style={blur} ref={ el => this.mapContainer = el } />
      </div>
    )
  }
}

export default Map
