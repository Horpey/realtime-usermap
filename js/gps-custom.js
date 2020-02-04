var map = new L.Map('mapid', {
  zoom: 12,
  center: new L.latLng([41.57573, 13.002411])
});

map.addLayer(
  new L.TileLayer(
    'https://api.mapbox.com/styles/v1/horpey/ck68ctwxv02oa1incg8s1rc9d/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaG9ycGV5IiwiYSI6ImNqZXNrOHgweDN3ZHgycW1lNGd0MzY2NG8ifQ.iE72uu46mll2LzAIP2KRQA',
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      accessToken: 'your.mapbox.access.token'
    }
  )
); //base layer

var gps = new L.Control.Gps({
  autoActive: true,
  autoCenter: true
}); //inizialize control

gps
  .on('gps:located', function(e) {
    //	e.marker.bindPopup(e.latlng.toString()).openPopup()
    console.log(e.latlng, map.getCenter());
    let userLoc = e.latlng;

    var customUser = L.icon({
      iconUrl: '../img/customUser.png',
      shadowUrl: '../img/pointer.svg',
      iconSize: [50, 50], // size of the icon
      iconAnchor: [24, 35], // the same for the shadow
      shadowSize: [30, 40], // size of the shadow
      shadowAnchor: [14, 0], // the same for the shadow
      popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
    });

    L.marker([userLoc.lat, userLoc.lng], { icon: customUser })
      .addTo(map)
      .bindPopup('Hi, I am Custom User' + userLoc.lat);

    // Marker Drop
    var marker = new L.marker([8.7813728, 4.479555199999999], {
      // icon: customUser,
      draggable: true
    }).addTo(map);

    var circle = L.circle([8.781372, 4.479555199999999], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 1000
    }).addTo(map);

    //TEsting If Inside
    var d = map.distance(marker.getLatLng(), circle.getLatLng());
    var isInside = d < circle.getRadius();
    circle.setStyle({
      fillColor: isInside ? 'green' : '#f03'
    });

    //Even Drag If Inside
    marker.on('drag', function(e) {
      var d = map.distance(e.latlng, circle.getLatLng());
      var isInside = d < circle.getRadius();
      circle.setStyle({
        fillColor: isInside ? 'green' : '#f03'
      });
    });
  })
  .on('gps:disabled', function(e) {
    e.marker.closePopup();
  });

gps.addTo(map);
