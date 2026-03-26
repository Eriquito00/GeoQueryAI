import {
    addMarkers,
    clearMarkers,
    initMap
} from './lib_leaflet/leaflet.js';

const input = document.getElementById(
    'geoQueryInput'
) as HTMLInputElement;
const button = document.getElementById(
    'geoQueryButton'
) as HTMLButtonElement;
const mapContainer = document.getElementById(
    'mapContainer'
) as HTMLElement;
const geoQueryResponses = document.getElementById(
    'geoQueryResponses'
) as HTMLDivElement;

document.addEventListener('DOMContentLoaded', () => {
    initMap(mapContainer);
});

button.addEventListener('click', () => sendQuery(input.value));

async function sendQuery(query: string) {
    try {
        const response = await fetch(
            'http://localhost:5000/geo-query-ai',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query })
            }
        );

        const data = await response.json();

        console.log(data);

        if (data.locations.error)
            showMessage(query, data.locations.error);
        else showMessage(query, data.message);

        clearMarkers();
        addMarkers(data.locations);

        input.value = '';
    } catch (e) {
        console.error(e);
        console.log('Server error');
    }
}

function showMessage(query: string, msg: string) {
    const p = document.createElement('p');
    p.textContent = `${query}: \n${msg}`;
    geoQueryResponses.appendChild(p);
}
