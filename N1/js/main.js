var myMap = L.map('mapId').setView([41.3879, 2.16992], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGl3aWIiLCJhIjoiY2tvOHB3Nzk2MGFncTJycW1mdXRrZGJxdiJ9.g9lsX_Twg3yCJATJXEUZcA'
}).addTo(myMap);

var marker = L.marker([41.386999, 2.1638557]).addTo(myMap);

marker.bindPopup("<b>Restaurant Centfocs</b><br>Restaurante mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona").openPopup(); 