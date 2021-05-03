var myMap = L.map('mapId').setView([41.3879, 2.16992], 15);
var popup = L.popup();
var marker = null;

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGl3aWIiLCJhIjoiY2tvOHB3Nzk2MGFncTJycW1mdXRrZGJxdiJ9.g9lsX_Twg3yCJATJXEUZcA'
}).addTo(myMap);

var mapIcon = L.icon({
    iconUrl: 'img/dragon.png',
    iconSize:     [50, 50],
});
 
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Mis coordenadas son:<br> Lat: " + e.latlng.lat.toString() +"<br>Lng: " + e.latlng.lng.toString())
        .openOn(myMap);

        if(marker){
            myMap.removeLayer(marker);
        }
        marker = L.marker([e.latlng.lat, e.latlng.lng], {icon: mapIcon}).addTo(myMap);
        myMap.setView([e.latlng.lat, e.latlng.lng], myMap.getMaxZoom());
}
myMap.on('click', onMapClick); 