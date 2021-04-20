
let previousLayer = ""
import DESCRIPTIONS from "./descriptions.js";
import COORDS_DATA from "./coordsData.js";
import {createAverageMarker} from "./createMarkers.js";
import {map} from "./createMap.js";

export default function updateLayer() {
    const type = document.querySelector(".legend-dropdown").value
    const parseData = JSON.parse(COORDS_DATA[type])
    document.querySelector(".count span:nth-child(2)").textContent = parseData.length;
    createAverageMarker(type);
    document.querySelector(".location-description span:nth-child(2)").textContent = DESCRIPTIONS[type];
    
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