
var markerGroup = L.layerGroup().addTo(map);

var circle = L.icon({ 
    iconUrl: 'circle.png',
    iconSize: [10, 10] 
});

// Two options for creating markers.

const planes = [
    [55.5845792,13.064336899999999],
    [55.717121,13.3430599],
    [55.5065149,13.233914],
    [55.5458446,13.9458591]
]
function myFunction1(){
    markerGroup.clearLayers();
    for (var i = 0; i < planes.length; i++) {
                marker = new L.marker([planes[i][0],planes[i][1]], {icon: circle})
                    .bindPopup(planes[i][0])
                    .addTo(markerGroup); }; 
}
            
function myFunction2(){
    markerGroup.clearLayers();
    for (var i = 0; i < maxrest.length; i++) {
        L.marker([maxrest[i][0],maxrest[i][1]], {icon: circle}).addTo(markerGroup); }; 
}

