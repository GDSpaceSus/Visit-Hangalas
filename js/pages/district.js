import { t } from '../i18n.js';

export function renderDistrictPage() {
    const html = `
        <div class="page-container">
            <h1 class="page-title">${t('district_title')}</h1>

            <div class="intro-block">
                <p class="intro-lead">${t('district_subtitle')}</p>
                <div class="intro-more" id="introMore">
                    <p>${t('district_intro_p2')}</p>
                    <p>${t('district_intro_p3')}</p>
                    <p>${t('district_intro_p4')}</p>
                    <p>${t('district_intro_p5')}</p>
                </div>
                <button class="read-more-btn" id="readMoreBtn" type="button">
                    <span class="read-more-label">${t('read_more')}</span>
                    <span class="arrow">↓</span>
                </button>
            </div>

            <div class="info-block"><h3>${t('district_geo_title')}</h3><p>${t('district_geo_text')}</p></div>

            <div class="info-block">
                <h3>${t('district_climate_title')}</h3>
                <p>${t('district_climate_text')}</p>
                <ul>
                    <li><strong>${t('district_climate_temp_jan')}:</strong> ${t('district_climate_temp_jan_value')}</li>
                    <li><strong>${t('district_climate_temp_jul')}:</strong> ${t('district_climate_temp_jul_value')}</li>
                    <li><strong>${t('district_climate_annual')}:</strong> ${t('district_climate_annual_value')}</li>
                    <li><strong>${t('district_climate_record_low')}:</strong> ${t('district_climate_record_low_value')}</li>
                    <li><strong>${t('district_climate_record_high')}:</strong> ${t('district_climate_record_high_value')}</li>
                </ul>
            </div>

            <div class="info-block">
                <h3>${t('district_transport_title')}</h3>
                <p>${t('district_transport_text')}</p>
                <ul>
                    <li><strong>${t('district_transport_road')}:</strong> ${t('district_transport_road_value')}</li>
                    <li><strong>${t('district_transport_river')}:</strong> ${t('district_transport_river_value')}</li>
                    <li><strong>${t('district_transport_air')}:</strong> ${t('district_transport_air_value')}</li>
                    <li><strong>${t('district_transport_bus')}:</strong> ${t('district_transport_bus_value')}</li>
                </ul>
            </div>

            <div class="info-block">
                <h3>${t('district_history_title')}</h3>
                <p>${t('district_history_text')}</p>
                <a href="https://museum.yaguo.ru/" target="_blank" rel="noopener" class="more-link">${t('district_history_more')}</a>
            </div>

            <div class="info-block">
                <h3>${t('district_traditions_title')}</h3>
                <p>${t('district_traditions_text')}</p>
                <ul>
                    <li><strong>${t('district_tradition_1_name')}</strong> — ${t('district_tradition_1_desc')}</li>
                    <li><strong>${t('district_tradition_2_name')}</strong> — ${t('district_tradition_2_desc')}</li>
                    <li><strong>${t('district_tradition_3_name')}</strong> — ${t('district_tradition_3_desc')}</li>
                    <li><strong>${t('district_tradition_4_name')}</strong> — ${t('district_tradition_4_desc')}</li>
                    <li><strong>${t('district_tradition_5_name')}</strong> — ${t('district_tradition_5_desc')}</li>
                </ul>
            </div>

            <div class="info-block">
                <h3>${t('district_population_title')}</h3>
                <p>${t('district_population_text')}</p>
            </div>
        </div>
    `;
    document.getElementById('main-content').innerHTML = html;

    const btn = document.getElementById('readMoreBtn');
    const more = document.getElementById('introMore');
    if (btn && more) {
        btn.addEventListener('click', () => {
            const expanded = more.classList.toggle('expanded');
            btn.classList.toggle('expanded', expanded);
            btn.querySelector('.read-more-label').textContent =
                expanded ? t('read_less') : t('read_more');
        });
    }
}