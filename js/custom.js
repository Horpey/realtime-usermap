if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    // Initialize the Google Maps API v3
    console.log(position);
  });

  //   Map Location
  var mymap = L.map('mapid').setView([6.5244, 3.3792], 13);

  //   Map Markers
  //   var marker = L.marker([6.4983, 3.3486]).addTo(mymap);

  //   Map Shape
  var circle = L.circle([6.5095, 3.3711], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(mymap);

  //   PopUps
  //   marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
  circle.bindPopup('I am a circle.');

  //   Events
  //   function onMapClick(e) {
  //     alert('You clicked the map at ' + e.latlng);
  //   }
  //   mymap.on('click', onMapClick);

  //   Custom Icon
  var greenIcon = L.icon({
    iconUrl: '../img/leaf-green.png',
    shadowUrl: '../img/leaf-shadow.png',

    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  var userOne = L.icon({
    iconUrl: '../img/user2.png',
    shadowUrl: '../img/pointer.svg',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [24, 35], // the same for the shadow
    shadowSize: [30, 40], // size of the shadow
    shadowAnchor: [14, 0], // the same for the shadow
    popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
  });

  var userTwo = L.icon({
    iconUrl: '../img/usertwo.png',
    shadowUrl: '../img/pointer.svg',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [24, 35], // the same for the shadow
    shadowSize: [30, 40], // size of the shadow
    shadowAnchor: [14, 0], // the same for the shadow
    popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
  });

  L.marker([6.5279, 3.3746], { icon: userOne })
    .addTo(mymap)
    .bindPopup('Hi, I am User 1');

  L.marker([6.4983, 3.3486], { icon: userTwo })
    .addTo(mymap)
    .bindPopup('Hi, I am User 2');

  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaG9ycGV5IiwiYSI6ImNqZXNrOHgweDN3ZHgycW1lNGd0MzY2NG8ifQ.iE72uu46mll2LzAIP2KRQA',
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      accessToken: 'your.mapbox.access.token'
    }
  ).addTo(mymap);
} else {
  alert('W3C Geolocation API is not available');
}
