
import map from "./createMap.js";
import METADATA from "./METADATA.js";
import create_map_pin from "./createPin.js";

let previousLayer = "";
let previousPin = null;


export default function updateLayer() {
  const selectedPlace = document.querySelector(".legend-dropdown").value;

  let locationCount = document.querySelector(".count span:nth-child(2)")
  locationCount.textContent = METADATA[selectedPlace].count;

  let placeDescription = document.querySelector(".location-description span:nth-child(2)")
  placeDescription.innerHTML = METADATA[selectedPlace].description;

  const averagePin = create_map_pin('averageSelected', METADATA[selectedPlace].averageCoord)
  averagePin.addTo(map);
  
  if (previousPin) {
    previousPin.remove();
    previousPin = null;
  }
  previousPin = averagePin;
  
  if (map.getLayer(previousLayer)) map.removeLayer(previousLayer);
  if (map.getSource(previousLayer)) map.removeSource(previousLayer);
  previousLayer = selectedPlace;
  
  map.addLayer({
    id: `${selectedPlace}`,
    type: 'circle',
    source: {
      type: 'geojson',
      data: `./data/${selectedPlace}.geojson`
    },
    paint: {
      'circle-radius': [
        'interpolate',
        ['linear'],
        ['number', 3.5],
        3, 4
      ],
      'circle-opacity': 0.8
    }
  });
}