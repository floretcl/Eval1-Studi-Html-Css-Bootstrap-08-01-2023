import "../../node_modules/bootstrap/dist/js/bootstrap.esm";


/* Leaflet - Contact Map */

const lon = 48.836210;
const lat = 2.351469;
const zoomLevel = 14;
const maxZoom = 19;
const minZoom = 10;

let leafletMap = L.map('leaflet-map').setView([lon, lat], zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: minZoom,
    maxZoom: maxZoom,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(leafletMap);

let roueLibrePlaceMarker = L.marker([lon, lat], {
    title: 'Roue Libre',
    alt: 'Marqueur'
}).addTo(leafletMap);