// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{
  location: [33.5276, -112.2626],
  name: "University of Phoenix Stadium",
  Attendance: "8,550,405"
},
{
  location: [33.7510, -84.4009],
  name: "Mercedes-Benz Stadium",
  population: "2,720,546"
},
{
  location: [39.17,	-76.37],
  name: "M&T Bank Stadium",
  population: "2,296,224"
},
{
  location: [42.54, -78.53 ],
  name: "New Era Field",
  population: "3,971,883"
},
{
  location: [35.14, -80.50],
  name: "Bank of America Stadium",
  population: "446,599"
},
{
  location: [41.53, -87.38],
  name: "Soldier Field",
  population: "2,720,546"
},
{
  location: [39.06, -84.31 ],
  name: "Paul Brown Stadium",
  population: "2,720,546"
},{
  location: [41.30, -81.41 ],
  name: "FirstEnergy Stadium",
  population: "2,720,546"
},{
  location: [32.47,	-96.48],
  name: "AT&T Stadium",
  population: "2,720,546"
},{
  location: [39.43, -105.01],
  name: "Empower Field at Mile High",
  population: "2,720,546"
},{
  location: [42.20, -83.03],
  name: "Ford Field",
  population: "2,720,546"
},{
  location: [44.30, -88.01],
  name: "Lambeau Field",
  population: "2,720,546"
},{
  location: [29.46, -95.22],
  name: "NRG Stadium",
  population: "2,720,546"
},{
  location: [39.46, -86.09],
  name: "Lucas Oil Stadium",
  population: "2,720,546"
},{
  location: [30.20, -81.40],
  name: "TIAA Bank Field",
  population: "2,720,546"
},{
  location: [39.06, -94.37],
  name: "	Arrowhead Stadium",
  population: "2,720,546"
},{
  location: [33.8644, -118.2611],
  name: "Dignity Health Sports Park",
  population: "2,720,546"
},{
  location: [34.0141, -118.2879],
  name: "Los Angeles Memorial Coliseum",
  population: "2,720,546"
},{
  location: [25.46, -80.12],
  name: "Hard Rock Stadium",
  population: "2,720,546"
},{
  location: [44.59, -93.13],
  name: "U.S. Bank Stadium",
  population: "2,720,546"
},{
  location: [42.21, -71.04],
  name: "Gillette Stadium",
  population: "2,720,546"
},{
  location: [29.58, -90.07],
  name: "Mercedes-Benz Superdome",
  population: "2,720,546"
},{
  location: [40.43, -74.01],
  name: "MetLife Stadium",
  population: "2,720,546"
},{
  location: [37.47, 122.13],
  name: "RingCentral Coliseum",
  population: "2,720,546"
},{
  location: [39.57, -75.07],
  name: "Lincoln Financial Field",
  population: "2,720,546"
},{
  location: [40.26, -80.00 ],
  name: "Heinz Field",
  population: "2,720,546"
},{
  location: [37.48, -122.24],
  name: "Levi's Stadium",
  population: "2,720,546"
},{
  location: [47.36, -122.20],
  name: "CenturyLink Field",
  population: "2,720,546"
},{
  location: [27.57, -82.27],
  name: "Raymond James Stadium",
  population: "2,720,546"
},{
  location: [36.09, -86.48],
  name: "Nissan Stadium",
  population: "2,720,546"
},{
  location: [38.54, -77.01],
  name: "FedExField",
  population: "2,720,546"
},{
  location: [41.8781, -87.6298],
  name: "Lincoln Financial Field",
  population: "2,720,546"
}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Attendance " + city.population + "</h3>")
    .addTo(myMap);
}
