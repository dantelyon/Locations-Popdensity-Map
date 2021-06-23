
import updateMap from "./updateMap.js";

mapboxgl.accessToken = process.env.TOKEN || 'pk.eyJ1IjoiZGlnaHQiLCJhIjoiY2p4ZW5nanRjMG9wMzNvczhxOXprMXl4NiJ9.fmrU8kIKNnTnb6KyJ9Y1Hw';

if (!mapboxgl.supported()) alert('Your browser does not support Mapbox GL');

const map = new mapboxgl.Map({
    container: 'map',
    //style: 'mapbox://styles/mapbox/streets-v11',
    style: 'mapbox://styles/dight/ckj41nuc91m7j19nztxq3vzp6', 
    center: [14.650297690342082, 59.112382521764154],
    zoom: 3,
}); 
export default map;

document.querySelector(".legend-dropdown").addEventListener('change', updateMap);
map.addControl(new mapboxgl.NavigationControl());

map.on('load', function() {
    const average_ALL_coord = [15.636830766913004, 59.26063787090151];
    let average_ALL_pin = document.createElement('div');
    average_ALL_pin.style.display = "none";
    average_ALL_pin.className = 'averageAll pin';
    new mapboxgl.Marker(average_ALL_pin).setLngLat(average_ALL_coord).addTo(map);

    const center_of_pop = [15.436389, 58.895833];
    let centerPop_pin = document.createElement('div');
    centerPop_pin.style.display = "none";
    centerPop_pin.className = 'centerPop pin';
    new mapboxgl.Marker(centerPop_pin).setLngLat(center_of_pop).addTo(map);

    map.flyTo({
        center: [14.650297690342082, 59.112382521764154],
        zoom: 4.8,
        bearing: 0,
        speed: 0.2,
        curve: 0.7,
        easing: (t) => t,
        essential: true
    });
})
