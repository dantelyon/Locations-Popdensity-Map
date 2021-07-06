
if (!mapboxgl.supported()) alert('Your browser does not support Mapbox GL');

const myToken = 'pk.eyJ1IjoiZGlnaHQiLCJhIjoiY2p4ZW5nanRjMG9wMzNvczhxOXprMXl4NiJ9.fmrU8kIKNnTnb6KyJ9Y1Hw'
const testToken = 'pk.eyJ1IjoiZGlnaHQiLCJhIjoiY2p4ZW5nanRjMG9wMzNvczhxOXprMXl4NiJ9.fmrU8kIKNnTnb6KyJ9Y1Hw'
const myStyle = 'mapbox://styles/dight/ckj41nuc91m7j19nztxq3vzp6'
const testStyle = 'mapbox://styles/mapbox/streets-v11'

mapboxgl.accessToken = testToken;

const MAP_SETTINGS = {
    container: 'map',
    style: testStyle,
    center: [14.650297690342082, 59.112382521764154],
    zoom: 3,
}

const map = new mapboxgl.Map(MAP_SETTINGS);

map.addControl(new mapboxgl.NavigationControl());

export default map;
