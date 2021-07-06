
import map from "./createMap.js";
import updateMap from "./updateMap.js";
import createLegend from "./createLegend.js";
import {averageALL, centerPop} from "./createPins.js";

document.querySelector(".legend-dropdown").addEventListener('change', updateMap);

createLegend()

map.on('load', function() {
    averageALL().addTo(map);
    centerPop().addTo(map)

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

