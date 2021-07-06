
import map from "./createMap.js";
import updateMap from "./updateMap.js";
import createLegend from "./createLegend.js";
import create_map_pin from "./createPin.js";

document.querySelector(".legend-dropdown").addEventListener('change', updateMap);

createLegend()

map.on('load', function() {
    create_map_pin('averageAll', [15.636830766913004, 59.26063787090151]).addTo(map);
    create_map_pin('centerPop', [15.436389, 58.895833]).addTo(map);

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

