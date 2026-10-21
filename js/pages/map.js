import { t } from '../i18n.js';

export function renderMapPage() {
    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('map_title')}</h1>
            <p class="page-description">${t('map_subtitle')}</p>
            <div id="map" style="width:100%;height:500px;border-radius:10px;margin-bottom:20px;"></div>
            <div class="info-block">
                <h3>${t('map_key_points_title')}</h3>
                <ul>
                    <li><strong>${t('map_point_center')}</strong> — ${t('map_point_center_desc')}</li>
                    <li><strong>🏛️ ${t('map_point_lena')}</strong> — ${t('map_point_lena_desc')}</li>
                    <li><strong>🏜️ ${t('map_point_tukulans')}</strong> — ${t('map_point_tukulans_desc')}</li>
                    <li><strong>🧊 ${t('map_point_buluus')}</strong> — ${t('map_point_buluus_desc')}</li>
                    <li><strong>🦁 ${t('map_point_zoo')}</strong> — ${t('map_point_zoo_desc')}</li>
                    <li><strong>💧 ${t('map_point_kuruluur')}</strong> — ${t('map_point_kuruluur_desc')}</li>
                </ul>
            </div>
            <div class="info-block">
                <h3>${t('map_how_to_get_title')}</h3>
                <p>${t('map_how_to_get_text')}</p>
            </div>
        </div>`;
    initMap();
}

function initMap() {
    const map = L.map('map').setView([61.3, 128.5], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap' }).addTo(map);

    const landmarks = [
        { name: t('map_marker_pokrovsk'), coords: [61.4842, 129.1467], desc: t('map_marker_pokrovsk_desc'), icon: '🏙️' },
        { name: t('map_marker_lena'), coords: [61.1069, 127.3617], desc: t('map_marker_lena_desc'), icon: '🏛️' },
        { name: t('map_marker_tukulans'), coords: [61.240282, 128.62152], desc: t('map_marker_tukulans_desc'), icon: '🏜️' },
        { name: t('map_marker_buluus'), coords: [61.3378, 129.0686], desc: t('map_marker_buluus_desc'), icon: '🧊' },
        { name: t('map_marker_zoo'), coords: [61.6794, 129.3519], desc: t('map_marker_zoo_desc'), icon: '🦁' },
        { name: t('map_marker_kuruluur'), coords: [61.3200, 129.5500], desc: t('map_marker_kuruluur_desc'), icon: '💧' },
        { name: t('attr_bison'), coords: [61.249538, 128.758442], desc: t('attr_bison_desc'), icon: '🦬' }
    ];

    landmarks.forEach(place => {
        const icon = L.divIcon({
            html: `<div style="font-size:30px;text-align:center;line-height:1;">${place.icon}</div>`,
            className: 'custom-marker',
            iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -40]
        });
        L.marker(place.coords, { icon }).addTo(map)
            .bindPopup(`<div style="text-align:center;"><strong style="font-size:16px;">${place.icon} ${place.name}</strong><br><span style="font-size:13px;color:#555;">${place.desc}</span></div>`);
    });

    L.circle([61.3, 128.5], { color: '#c28a5c', fillColor: '#c28a5c', fillOpacity: 0.05, radius: 150000 }).addTo(map);
}