
let currentMarkers = [];

function addMarkers(type) {
    removeMarkers();
    const parseData = JSON.parse(data[type])
    parseData.forEach(location => {
        var el = document.createElement('div');
        el.className = 'black-marker';
        var marker = new mapboxgl.Marker(el)
            .setLngLat(location)
            .addTo(map);
        currentMarkers.push(marker);
    })
    document.getElementById("count").textContent = parseData.length;
    createAverageMarker(type);
    centerOfPop();
    averageAllMarker();
}

function removeMarkers() {
    if (currentMarkers!==null) {
        for (var i = currentMarkers.length - 1; i >= 0; i--) {
            currentMarkers[i].remove();
        }
    }
}

function getAverageOfOne(type) {
    let longitudeSum = 0;
    let latitudeSum = 0;
    const parseData = JSON.parse(data[type])
    parseData.forEach(coord => longitudeSum += coord[0]);
    parseData.forEach(coord => latitudeSum += coord[1]);
    let longitudeAverage = longitudeSum / parseData.length;
    let latitudeAverage = latitudeSum / parseData.length;
    return [longitudeAverage, latitudeAverage];
}

function createAverageMarker(type) {
    var el = document.createElement('div');
    el.className = 'average-marker';
    var marker = new mapboxgl.Marker(el)
        .setLngLat(getAverageOfOne(type))
        .addTo(map);
    currentMarkers.push(marker);
}

function averageAllMarker() {
    let dataLength = 0;
    let longitudeAllSum = 0;
    let latitudeAllSum = 0;
    for (item in data) {
        const average = getAverageOfOne(item)
        longitudeAllSum += average[0];
        latitudeAllSum += average[1];
        dataLength++
    }
    let longitudeAllAverage = longitudeAllSum / dataLength;
    let latitudeAllAverage = latitudeAllSum / dataLength;
    var el = document.createElement('div');
    el.className = 'averageAll-marker';
    var marker = new mapboxgl.Marker(el)
        .setLngLat([15.694669, 59.341366])
        .addTo(map);
    currentMarkers.push(marker);
}

function centerOfPop() {
    var el = document.createElement('div');
    el.className = 'centerPop-marker';
    var marker = new mapboxgl.Marker(el)
        .setLngLat([15.436389, 58.895833])
        .addTo(map);
    currentMarkers.push(marker);
}
