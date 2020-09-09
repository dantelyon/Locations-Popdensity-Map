
var mapboxAccessToken = 'pk.eyJ1IjoiZGlnaHQiLCJhIjoiY2p4ZW5nanRjMG9wMzNvczhxOXprMXl4NiJ9.fmrU8kIKNnTnb6KyJ9Y1Hw';

var map = L.map('map').setView([59.372, 14.767], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/dight/cjxstuxwc1p4e1cn9oki15fey/tiles/256/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 8, minZoom: 5,
}).addTo(map);

L.geoJson(statesData).addTo(map);

L.geoJson(statesData, {style: layer_style}).addTo(map);

function layer_style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 0.5,
        opacity: 1,
        color: 'white',
        fillOpacity: 1,
    };
}
function getColor(d) {
    return d > 1000 ? '#8c2d04' : 
           d > 200  ? '#d94801' :
           d > 100  ? '#f16913' :
           d > 50   ? '#fd8d3c' :
           d > 20   ? '#fdae6b' :
           d > 10   ? '#fdd0a2' :
                      '#feedde';
}

