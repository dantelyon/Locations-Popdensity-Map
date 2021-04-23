
import updateMap from "./updateMap.js";

mapboxgl.accessToken = 'pk.eyJ1IjoiZGlnaHQiLCJhIjoiY2p4ZW5nanRjMG9wMzNvczhxOXprMXl4NiJ9.fmrU8kIKNnTnb6KyJ9Y1Hw'//'pk.eyJ1IjoiZGlnaHQiLCJhIjoiY2p4ZW5nanRjMG9wMzNvczhxOXprMXl4NiJ9.fmrU8kIKNnTnb6KyJ9Y1Hw'

if (!mapboxgl.supported()) alert('Your browser does not support Mapbox GL');

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',//'mapbox://styles/dight/ckj41nuc91m7j19nztxq3vzp6', 
    center: [14.750297690342082, 58.112382521764154],
    zoom: 2,
    //attributionControl: false,
    //maxBounds: [[-5.994038888237595, 50.168382388177804], [38.07293243872676, 71.8192427469669]]
});
export default map

document.querySelector(".legend-dropdown").addEventListener('change', updateMap)


//create pin for average coordinate of ALL places
const averageALL = [15.636830766913004, 59.26063787090151]
let div = document.createElement('div');
        div.className = 'pink pin yellow-pin';
        let marker = new mapboxgl.Marker(div)
            .setLngLat(averageALL)
            .addTo(map);

//map.addControl(new mapboxgl.AttributionControl(), 'top-left');
map.addControl(new mapboxgl.NavigationControl());
map.on('load', function() {
    centerOfPop();
    map.flyTo({
        // These options control the ending camera position: centered at the target, at zoom level 9, and north up.
        center: [14.750297690342082, 58.112382521764154],
        zoom: 5,
        bearing: 0,
        // These options control the flight curve, making it move slowly and zoom out almost completely before starting to pan.
        speed: 0.2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
        // This can be any easing function: it takes a number between 0 and 1 and returns another number between 0 and 1.
        easing: function (t) {return t;},
        // this animation is considered essential with respect to prefers-reduced-motion
        essential: true
    });
})

function centerOfPop() {
    let div = document.createElement('div');
    div.className = 'green pin yellow-pin';
    let marker = new mapboxgl.Marker(div)
        .setLngLat([15.436389, 58.895833])
        .addTo(map);
}

