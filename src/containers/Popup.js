import './../styles/Popup.css'

export const Popup = (marker) => (`
  <div role="dialog" aria-labelledby="label-${marker.id}" aria-describeby="description-${marker.id}" class = "pop-container">
    
    <img src=${marker.src} alt=${marker.title} class = "pop-image">
    <h1 id="label-${marker.id}" class = "pop-title" >${marker.title}</h1>
    <p id="description-${marker.id}" class = "pop-description" >${marker.description}</p>
    <a role="link" aria-label="read more about ${marker.title}" class = "pop-website" href=${marker.website} target="_blank">Visite o website</a>
  
  </div>
`)
