
import COORDS_DATA from "./coordsData.js";
import {map} from "./createMap.js";

function getAverageOfOne(type) {
    let longitudeSum = 0;
    let latitudeSum = 0;
    const parseData = JSON.parse(COORDS_DATA[type])
    parseData.forEach(coord => longitudeSum += coord[0]);
    parseData.forEach(coord => latitudeSum += coord[1]);
    let longitudeAverage = longitudeSum / parseData.length;
    let latitudeAverage = latitudeSum / parseData.length;
    return [longitudeAverage, latitudeAverage];
}

let currentMarker = null
export function createAverageMarker(type) {
    if (currentMarker) {
        currentMarker.remove()
        currentMarker = null
    }
    var el = document.createElement('div');
    el.className = 'blue pin yellow-pin';
    var marker = new mapboxgl.Marker(el)
        .setLngLat(getAverageOfOne(type))
        .addTo(map);
    currentMarker = marker
}

export function averageAllMarker() {
    let dataLength = 0;
    let longitudeAllSum = 0;
    let latitudeAllSum = 0;
    for (let item in COORDS_DATA) {
        const average = getAverageOfOne(item)
        longitudeAllSum += average[0];
        latitudeAllSum += average[1];
        dataLength++
    }
    let longitudeAllAverage = longitudeAllSum / dataLength;
    let latitudeAllAverage = latitudeAllSum / dataLength;
    var el = document.createElement('div');
    el.className = 'pink pin yellow-pin';
    var marker = new mapboxgl.Marker(el)
        .setLngLat([longitudeAllAverage, latitudeAllAverage])
        .addTo(map);
}

export function centerOfPop() {
    var el = document.createElement('div');
    el.className = 'green pin yellow-pin';
    var marker = new mapboxgl.Marker(el)
        .setLngLat([15.436389, 58.895833])
        .addTo(map);
}

