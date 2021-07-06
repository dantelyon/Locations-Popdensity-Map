
if (!mapboxgl.supported()) alert('Your browser does not support Mapbox GL');

mapboxgl.accessToken = 'pk.eyJ1IjoiZGlnaHQiLCJhIjoiY2p4ZW5nanRjMG9wMzNvczhxOXprMXl4NiJ9.fmrU8kIKNnTnb6KyJ9Y1Hw';

const MAP_SETTINGS = {
    container: 'map',
    style: 'mapbox://styles/dight/ckj41nuc91m7j19nztxq3vzp6',
    center: [14.650297690342082, 59.112382521764154],
    zoom: 3,
}

const map = new mapboxgl.Map(MAP_SETTINGS);

map.addControl(new mapboxgl.NavigationControl());

export default map;
