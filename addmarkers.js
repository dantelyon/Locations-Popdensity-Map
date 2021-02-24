
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
           averageMarker(type);
       }
       
       function removeMarkers() {
           if (currentMarkers!==null) {
               for (var i = currentMarkers.length - 1; i >= 0; i--) {
                   currentMarkers[i].remove();
               }
           }
       }
       
       function averageMarker(type) {
           let longitudeSum = 0;
           let latitudeSum = 0;
           const parseData = JSON.parse(data[type])
           parseData.forEach(coord => longitudeSum += coord[0]);
           parseData.forEach(coord => latitudeSum += coord[1]);
           let longitudeAverage = longitudeSum / parseData.length;
           let latitudeAverage = latitudeSum / parseData.length;
           var el = document.createElement('div');
               el.className = 'average-marker';
               var marker = new mapboxgl.Marker(el)
               .setLngLat([longitudeAverage, latitudeAverage])
               .addTo(map);
               currentMarkers.push(marker);
       }