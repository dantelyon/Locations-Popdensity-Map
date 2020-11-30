
let markerGroup = L.layerGroup().addTo(map);

let circle = L.icon({ 
    iconUrl: 'circle.png',
    iconSize: [10, 10] 
});

function showLocations(place) {
    markerGroup.clearLayers();
    window[place + "Locations"].forEach(coordinates => 
        L.marker([coordinates[0], coordinates[1]], {icon: circle})
            .addTo(markerGroup)
    )
}

