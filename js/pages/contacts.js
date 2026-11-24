import { t } from '../i18n.js';

export function renderContactsPage() {
    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('contacts_title')}</h1>
            <p class="page-description">${t('contacts_subtitle')}</p>

            <div class="contact-table">
                <div class="contact-row"><div class="contact-label">${t('contacts_phone_label')}:</div><div class="contact-value">8-41144-4-52-42<br>8-41144-4-50-46<br>8-41144-4-38-67</div></div>
                <div class="contact-row"><div class="contact-label">${t('contacts_fax_label')}:</div><div class="contact-value">8-41144-4-52-42</div></div>
                <div class="contact-row"><div class="contact-label">${t('contacts_email_label')}:</div><div class="contact-value">pk_pokrovsk@gov14.ru</div></div>
                <div class="contact-row"><div class="contact-label">${t('contacts_web_label')}:</div><div class="contact-value">https://hu-pk.obr.sakha.gov.ru</div></div>
                <div class="contact-row"><div class="contact-label">${t('contacts_hours_label')}:</div><div class="contact-value">${t('contacts_hours_value')}</div></div>
            </div>

            <div class="info-block" style="margin-top:1.5rem;">
                <h3>${t('contacts_social_title')}</h3>
                <p><a href="https://vk.ru/pokrcollege">ВКонтакте</a></p>
            </div>
        </div>`;
}