
import averageCoords  from "./createMarkers.js";
import createLegendOptions from "./createPlaces.js";
import createLegendCells from "./createPopDensity.js";
import flyTo from "./flyTo.js";
import showLegendInfo from "./showLegendInfo.js";
import updateLayer from "./updateLayer.js";

mapboxgl.accessToken = 'pk.eyJ1IjoiZGlnaHQiLCJhIjoiY2p4ZW5nanRjMG9wMzNvczhxOXprMXl4NiJ9.fmrU8kIKNnTnb6KyJ9Y1Hw'//'pk.eyJ1IjoiZGlnaHQiLCJhIjoiY2p4ZW5nanRjMG9wMzNvczhxOXprMXl4NiJ9.fmrU8kIKNnTnb6KyJ9Y1Hw'

if (!mapboxgl.supported()) {alert('Your browser does not support Mapbox GL');}

export const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',//'mapbox://styles/dight/ckj41nuc91m7j19nztxq3vzp6', 
    center: [14.750297690342082, 58.112382521764154],
    zoom: 2,
    //attributionControl: false,
    //maxBounds: [[-5.994038888237595, 50.168382388177804], [38.07293243872676, 71.8192427469669]]
});

document.querySelector(".legend-dropdown").addEventListener('change', updateLayer)
document.getElementById("show-more-info").addEventListener('click', showLegendInfo)
createLegendOptions()
createLegendCells()

//create pin for average coordinate of ALL places
let div = document.createElement('div');
        div.className = 'pink pin yellow-pin';
        let marker = new mapboxgl.Marker(div)
            .setLngLat(averageCoords.average_of_ALL)
            .addTo(map);

//map.addControl(new mapboxgl.AttributionControl(), 'top-left');
map.addControl(new mapboxgl.NavigationControl());
map.on('load', function() {
    centerOfPop();
    flyTo(map);
})

function centerOfPop() {
    let div = document.createElement('div');
    div.className = 'green pin yellow-pin';
    let marker = new mapboxgl.Marker(div)
        .setLngLat([15.436389, 58.895833])
        .addTo(map);
}



