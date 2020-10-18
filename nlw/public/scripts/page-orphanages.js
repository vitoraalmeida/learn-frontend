// cria mapa
const map = L.map('mapid').setView([-14.8510146, -40.8592232], 13);

// cria e adiciona tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

//cria icone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [33, 68],
    popupAnchor: [170, 2]
});

//cria popup
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>');

// cria e adiciona marcador
var marker = L.marker([-14.8510146, -40.8592232], {icon: icon})
    .addTo(map)
    .bindPopup(popup)
