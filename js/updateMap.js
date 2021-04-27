
import map from "./createMap.js";
import METADATA from "./METADATA.js";
let previousLayer = "";
let previousPin = null;

export default function updateLayer() {
  const selectedPlace = document.querySelector(".legend-dropdown").value;

  document.querySelector(".count span:nth-child(2)").textContent = METADATA[selectedPlace].count;
  document.querySelector(".location-description span:nth-child(2)").innerHTML = METADATA[selectedPlace].description;

  const averageCoordPin = document.createElement('div');
  averageCoordPin.className = 'averageSelected pin';
  const pin = new mapboxgl.Marker(averageCoordPin).setLngLat(METADATA[selectedPlace].averageCoord).addTo(map);
  
  if (previousPin) {
    previousPin.remove();
    previousPin = null;
  }
  previousPin = pin;
  
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