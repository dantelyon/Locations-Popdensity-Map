
let previousLayer = ""
import PLACE_DESCRIPTIONS from "./placeDescriptions.js";
import COORDS_DATA from "./coordsData.js";
import averageCoords from "./createMarkers.js";
import { map } from "./createMap.js";

let currentMarker = null;

export default function updateLayer() {
    const type = document.querySelector(".legend-dropdown").value
    const parseData = JSON.parse(COORDS_DATA[type])
    document.querySelector(".count span:nth-child(2)").textContent = parseData.length;

    if (currentMarker) {
      currentMarker.remove();
      currentMarker = null;
  }
  let div = document.createElement('div');
  div.className = 'blue pin yellow-pin';
  let marker = new mapboxgl.Marker(div)
      .setLngLat(averageCoords[type])
      .addTo(map);
  currentMarker = marker;
    
    
    document.querySelector(".location-description span:nth-child(2)").textContent = PLACE_DESCRIPTIONS[type];
    
    if (map.getLayer(previousLayer)) {
        map.removeLayer(previousLayer);
    }

    if (map.getSource(previousLayer)) {
        map.removeSource(previousLayer);
    }

    previousLayer = type
    
    map.addLayer({
        id: `${type}`,
        type: 'circle',
        source: {
          type: 'geojson',
          data: `./data/${type}.geojson`
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