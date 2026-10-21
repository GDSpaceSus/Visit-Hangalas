import { t } from '../i18n.js';

export function renderContactsPage() {
    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('contacts_title')}</h1>
            <p class="page-description">${t('contacts_subtitle')}</p>

            <div class="contact-table">
                <div class="contact-row"><div class="contact-label">📞 ${t('contacts_phone_label')}:</div><div class="contact-value">+7 (914) 104-46-46</div></div>
                <div class="contact-row"><div class="contact-label">📠 ${t('contacts_fax_label')}:</div><div class="contact-value">+7 (914) 104-46-46</div></div>
                <div class="contact-row"><div class="contact-label">✉️ ${t('contacts_email_label')}:</div><div class="contact-value">lenatour@internet.ru</div></div>
                <div class="contact-row"><div class="contact-label">🌐 ${t('contacts_web_label')}:</div><div class="contact-value">www.lena-tour-yakutia.ru</div></div>
                <div class="contact-row"><div class="contact-label">📍 ${t('contacts_address_label')}:</div><div class="contact-value">${t('contacts_address_value')}</div></div>
                <div class="contact-row"><div class="contact-label">🕒 ${t('contacts_hours_label')}:</div><div class="contact-value">${t('contacts_hours_value')}</div></div>
            </div>

            <div class="info-block" style="margin-top:1.5rem;">
                <h3>📱 ${t('contacts_social_title')}</h3>
                <p>📘 Instagram: @lenatour_ykt</p>
                <p>📖 Telegram: t.me/lenatour</p>
                <p>📌 ВКонтакте: vk.com/lenatour</p>
            </div>

            <div class="info-block">
                <h3>👥 ${t('contacts_center_title')}</h3>
                <p>${t('contacts_center_text')}</p>
                <p style="margin-top:1rem;"><strong>${t('contacts_hotline')}:</strong> +7 (914) 104-46-46 (${t('contacts_24h')})</p>
            </div>

            <div class="map-placeholder">
                <p>🏢 <strong>${t('contacts_how_to_find')}</strong></p>
                <p>${t('contacts_how_to_find_text')}</p>
            </div>
        </div>`;
}