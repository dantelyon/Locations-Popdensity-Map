
import map from "./createMap.js";
import METADATA from "./METADATA.js";
import {averageSelected} from "./createPins.js";

let previousLayer = "";
let previousPin = null;


export default function updateLayer() {
  const selectedPlace = document.querySelector(".legend-dropdown").value;

  document.querySelector(".count span:nth-child(2)").textContent = METADATA[selectedPlace].count;
  document.querySelector(".location-description span:nth-child(2)").innerHTML = METADATA[selectedPlace].description;

  const averagePin = averageSelected(METADATA[selectedPlace].averageCoord)

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