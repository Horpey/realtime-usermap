var mymap = L.map('mapid', {
  center: [50.895763, -1.150556],
  zoom: 16
});

L.tileLayer(
  'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic3RldmVuc2F0Y2giLCJhIjoiY2p5eDR6MWgzMHRvbjNocnJkN2d2MjRwaSJ9.wd0OtBUQQfUtNxdduQA3lg',
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
  }
).addTo(mymap);

var marker = new L.marker([50.896422, -1.148444], {
  draggable: true,
  autoPan: true
}).addTo(mymap);

var circle = L.circle([50.895763, -1.150556], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 100
}).addTo(mymap);
console.log(circle.getLatLng());

marker.on('drag', function(e) {
  var d = mymap.distance(e.latlng, circle.getLatLng());
  var isInside = d < circle.getRadius();
  circle.setStyle({
    fillColor: isInside ? 'green' : '#f03'
  });
});
