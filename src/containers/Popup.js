import './../styles/Popup.css'

export const Popup = (marker) => (`
  <div class = "pop-container">
    
    <img src=${marker.src} alt=${marker.title} class = "pop-image">
    <h1 class = "pop-title" >${marker.title}</h1>
    <p class = "pop-description" >${marker.description}</p>
    <a class = "pop-website" href=${marker.website} target="_blank">Visite o website</a>
  
  </div>
`)
