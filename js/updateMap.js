
let previousLayer = "";
import map from "./createMap.js";
import METADATA from "./METADATA.js";

let currentMarker = null;

export default function updateLayer() {
    const type = document.querySelector(".legend-dropdown").value
    document.querySelector(".count span:nth-child(2)").textContent = METADATA[type].count;

    if (currentMarker) {
      currentMarker.remove();
      currentMarker = null;
  }
  let div = document.createElement('div');
  div.className = 'blue pin yellow-pin';
  let marker = new mapboxgl.Marker(div)
      .setLngLat(METADATA[type].averageCoord)
      .addTo(map);
  currentMarker = marker;
    
    
    document.querySelector(".location-description span:nth-child(2)").textContent = METADATA[type].description;
    
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