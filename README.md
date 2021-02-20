# population-density-map

Live version <a>here</a> (should work)

This project is an attempt to show how and if the physical location of a selection of places in Sweden correlates with the population density of each munincipality.

Built with JavaScript, CSS, and Mapbox.
gps coordinates
mapbox for the overlay - the surrounding appearance and the choropleth map of Sweden. Mapbox

different ways of collecting and finding data: first manually which I quickly realized is a pain and not a practical or scalable approach > then looking for APIs, but which i unfortunately only found one for(polisen). Then i had a lightbulb moment where I realized that I can extract the JSON objects that are downloaded locally using the browser's networks tab (NETWORK REQUESTS). Later on, i also started extracting particular types of data directly from OSM.
And of course there was a little bit of cleaning and reformatting of the data that had to be done.

This project was conceived from a desire to work with and better understand Google Maps, OSM, and other web-based map solutions.

I was naive, more inexperienced, and thus worked backwards - I wanted to create a project involving maps and openstreetmap, and from there started thinking of ideas. I should've thought of the idea first, and then how to implement it - whether as a map or not.
The first version used OSM, mapbox, AND leaflet.
The project had poor performance though - it loaded slowly.
So, as a now more experienced and well-rounded developer, I thought of solutions. I looked into SVG maps, and that is definitely a great option, that I had not considered when I frst started this project. But I eventually decided to just go with OSM and Mapbox, and cut out Leaflet, because I needed the ease of access to the coordinate system that a map service like Mapbox and OSM offers. And it turned out that I didn't need Leaflet.

I learned two major things with this project: what the landscape looks like for web-based map solutions while also gaining some familiarity with some of them, notably OSM and Mapbox. And the other major thing is that data does not always come in an easy package, as an API or a dataset. Sometimes you have to be creative.

Resources I used to help create this project: https://www.openstreetmap.org/ https://leafletjs.com/ https://www.mapbox.com/ https://www.qlik.com/us/ https://mygeodata.cloud/


Of all the problems solved and lessons learned over the course of this project, I'd say there are three main ones:
Collecting all the data
Creating the Mapbox visuals
Understanding the map landscape
Creating the legend console.
What else?