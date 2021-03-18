
let currentMarkers = []
let previousLayer = ""

function addLayer(type) {
    removeMarkers();
    const parseData = JSON.parse(data[type])
    document.querySelector(".count").textContent = "Total/count: " + parseData.length;
    createAverageMarker(type);
    document.querySelector(".location-description").textContent = "Description: " + descriptions[type];
    
    if (map.getLayer(previousLayer)) {
        map.removeLayer(previousLayer);
    }

    if (map.getSource(previousLayer)) {
        map.removeSource(previousLayer);
    }

    previousLayer = type
    
    map.addLayer({
        id: `${type}`,
        type: 'circle',
        source: {
          type: 'geojson',
          data: `./data/${type}.geojson`
        },
        paint: {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['number', 3.5],
            3, 4
          ],
          'circle-opacity': 0.8
        }
      });
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
    el.className = 'blue pin yellow-pin';
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
    el.className = 'pink pin yellow-pin';
    var marker = new mapboxgl.Marker(el)
        .setLngLat([longitudeAllAverage, latitudeAllAverage])
        .addTo(map);
}

function centerOfPop() {
    var el = document.createElement('div');
    el.className = 'green pin yellow-pin';
    var marker = new mapboxgl.Marker(el)
        .setLngLat([15.436389, 58.895833])
        .addTo(map);
}

centerOfPop();
averageAllMarker();
