import { Location } from './../types/Location';

let map: any;
let markers: any[] = [];
declare const L: any;

export function initMap(mapContainer: HTMLElement) {
    map = L.map(mapContainer).setView([41.5, 2.5], 10);

    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 19
        }
    ).addTo(map);
}

export function addMarkers(locations: Location[]) {
    const bounds = L.latLngBounds([]);

    locations.forEach((location) => {
        const marker = L.marker([
            location.latitud,
            location.longitud
        ])
            .addTo(map)
            .bindPopup(location.name);

        markers.push(marker);
        bounds.extend([location.latitud, location.longitud]);
    });

    map.fitBounds(bounds);
}

export function clearMarkers() {
    markers.forEach((marker) => {
        map.removeLayer(marker);
    });
    markers = [];
}
