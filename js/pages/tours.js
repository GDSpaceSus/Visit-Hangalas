import { t } from '../i18n.js';
import { card, bindCards } from '../components/detail-page.js';
import { navigateTo } from '../navigation.js';

const PLACES = [
    {
        id: 'lena-tour',
        cardImg: 'images/image_13.webp',
        nameKey: 'tour_lena_name',
        descKey: 'tour_lena_desc',
        pageTitleKey: 'lena_tour_title',
        pageSubtitleKey: 'lena_tour_subtitle',
        contacts: {
            phone: '+7 (924) 177-38-08',
            email: 'lenatour@internet.ru',
            web: 'lena-tour-yakutia.ru'
        },
        tabs: [
            {
                id: 'tab-lena-1',
                titleKey: 'tab_deer',
                img: 'images/thumb_1280_539788429.jpg',
                descKey: 'tour_deer_desc',
                info: [
                    { labelKey: 'tour_duration',  valueKey: 'tour_deer_duration' },
                    { labelKey: 'tour_season',    valueKey: 'tour_deer_season' },
                    { labelKey: 'tour_transport', valueKey: 'tour_deer_transport' },
                    { labelKey: 'tour_food',      valueKey: 'tour_deer_food' },
                    { labelKey: 'Запись',      valueKey: '<a href="https://lena-tour-yakutia.ru/avtobusnaya-poyezdka-na-lenskie-stolby-lena-tour-yakutia#podrobnee"><button id="tour-button">+</button></a>' }
                ],
                priceKey: 'tour_deer_price'
            },
            {
                id: 'tab-lena-2',
                titleKey: 'tab_sinsk',
                img: 'images/yakutia-sinskie-pillars-v1-1-1.jpg',
                descKey: 'tour_sinsk_desc',
                info: [
                    { labelKey: 'tour_duration',  valueKey: 'tour_sinsk_duration' },
                    { labelKey: 'tour_season',    valueKey: 'tour_sinsk_season' },
                    { labelKey: 'tour_transport', valueKey: 'tour_sinsk_transport' },
                    { labelKey: 'tour_food',      valueKey: 'tour_sinsk_food' }
                ],
                priceKey: 'tour_sinsk_price'
            },
            {
                id: 'tab-lena-3',
                titleKey: 'tab_winter_lena',
                img: 'images/images.jpeg',
                descKey: 'tour_winter_lena_desc',
                info: [
                    { labelKey: 'tour_duration',  valueKey: 'tour_winter_lena_duration' },
                    { labelKey: 'tour_season',    valueKey: 'tour_winter_lena_season' },
                    { labelKey: 'tour_transport', valueKey: 'tour_winter_lena_transport' },
                    { labelKey: 'tour_food',      valueKey: 'tour_winter_lena_food' }
                ],
                priceKey: 'tour_winter_lena_price'
            },
            {
                id: 'tab-lena-4',
                titleKey: 'tab_khandyga',
                img: 'images/142454_original.jpg',
                descKey: 'tour_khandyga_desc',
                info: [
                    { labelKey: 'tour_duration',  valueKey: 'tour_khandyga_duration' },
                    { labelKey: 'tour_season',    valueKey: 'tour_khandyga_season' },
                    { labelKey: 'tour_transport', valueKey: 'tour_khandyga_transport' },
                    { labelKey: 'tour_food',      valueKey: 'tour_khandyga_food' }
                ],
                priceKey: 'tour_khandyga_price'
            }
        ]
    },
    {
        id: 'inyakutia',
        cardImg: 'images/7mvB12D1I3U.jpg',
        nameKey: 'tour_inyakutia_name',
        descKey: 'tour_inyakutia_desc',
        pageTitleKey: 'inyakutia_title',
        pageSubtitleKey: 'inyakutia_subtitle',
        contacts: {
            phone: '+7 (914) 273-59-00, +7 (914) 274-88-33',
            email: 'go@inyakutia.ru',
            web: 'www.inyakutia.ru, www.inyakutia.com'
        },
        tabs: [
            {
                id: 'tab-inya-1',
                titleKey: 'tab_indigirka',
                img: 'images/o0g11jouribd6o44y04wzqk94zkz834x_1600x900_2.webp',
                descKey: 'tour_indigirka_desc',
                info: [
                    { labelKey: 'tour_duration',      valueKey: 'tour_indigirka_duration' },
                    { labelKey: 'tour_season',        valueKey: 'tour_indigirka_season' },
                    { labelKey: 'tour_transport',     valueKey: 'tour_indigirka_transport' },
                    { labelKey: 'tour_accommodation', valueKey: 'tour_indigirka_accommodation' }
                ],
                priceKey: 'tour_indigirka_price'
            },
            {
                id: 'tab-inya-2',
                titleKey: 'tab_oymyakon',
                img: 'images/image_20.webp',
                descKey: 'tour_oymyakon_desc',
                info: [
                    { labelKey: 'tour_duration',      valueKey: 'tour_oymyakon_duration' },
                    { labelKey: 'tour_season',        valueKey: 'tour_oymyakon_season' },
                    { labelKey: 'tour_transport',     valueKey: 'tour_oymyakon_transport' },
                    { labelKey: 'tour_accommodation', valueKey: 'tour_oymyakon_accommodation' }
                ],
                priceKey: 'tour_oymyakon_price'
            },
            {
                id: 'tab-inya-3',
                titleKey: 'tab_lena_raft',
                img: 'images/347446216715355.webp',
                descKey: 'tour_lena_raft_desc',
                info: [
                    { labelKey: 'tour_duration',  valueKey: 'tour_lena_raft_duration' },
                    { labelKey: 'tour_season',    valueKey: 'tour_lena_raft_season' },
                    { labelKey: 'tour_transport', valueKey: 'tour_lena_raft_transport' },
                    { labelKey: 'tour_food',      valueKey: 'tour_lena_raft_food' }
                ],
                priceKey: 'tour_lena_raft_price'
            },
            {
                id: 'tab-inya-4',
                titleKey: 'tab_sinyaya',
                img: 'images/image_22.webp',
                descKey: 'tour_sinyaya_desc',
                info: [
                    { labelKey: 'tour_duration',  valueKey: 'tour_sinyaya_duration' },
                    { labelKey: 'tour_season',    valueKey: 'tour_sinyaya_season' },
                    { labelKey: 'tour_transport', valueKey: 'tour_sinyaya_transport' },
                    { labelKey: 'tour_food',      valueKey: 'tour_sinyaya_food' }
                ],
                priceKey: 'tour_sinyaya_price'
            }
        ]
    }
];

export function renderToursPage() {
    const cards = PLACES.map(item =>
        card({
            id: item.id,
            img: item.cardImg,
            name: t(item.nameKey),
            desc: t(item.descKey)
        })
    ).join('');

    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('tours_title')}</h1>
            <p class="page-description">${t('tours_subtitle')}</p>
            <div class="cards-grid">${cards}</div>
        </div>`;

    bindCards();
}

export function renderTourDetail(id) {
    const item = PLACES.find(p => p.id === id);
    if (!item) return;

    const tabHeaders = item.tabs.map((tab, i) =>
        `<div class="tab-header ${i === 0 ? 'active' : ''}" data-tab="${tab.id}">${t(tab.titleKey)}</div>`
    ).join('');

    const tabContents = item.tabs.map((tab, i) => `
        <div class="tab-content ${i === 0 ? 'active' : ''}" id="${tab.id}">
            <div class="tour-detail">
                <img src="${tab.img}" class="tour-detail-img" alt="">
                <div class="tour-detail-info">
                    <h3>${t(tab.titleKey)}</h3>
                    <p>${t(tab.descKey)}</p>
                    <ul>
                        ${tab.info.map(row =>
                            `<li><strong>${t(row.labelKey)}:</strong> ${t(row.valueKey)}</li>`
                        ).join('')}
                    </ul>
                    <p class="tour-price"><strong>${t('tour_price')}:</strong> ${t(tab.priceKey)}</p>
                </div>
            </div>
        </div>
    `).join('');

    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t(item.pageTitleKey)}</h1>
            <p class="page-description">${t(item.pageSubtitleKey)}</p>

            <div class="info-block" style="margin-bottom:1.5rem;">
                <h3>📞 ${t('contacts_title')}</h3>
                <p><strong>${t('contacts_phone_label')}:</strong> ${item.contacts.phone}</p>
                <p><strong>${t('contacts_email_label')}:</strong> ${item.contacts.email}</p>
                <p><strong>${t('contacts_web_label')}:</strong> ${item.contacts.web}</p>
            </div>

            <div class="tab-headers">${tabHeaders}</div>
            <div class="tab-contents">${tabContents}</div>

            <button class="back-btn" style="margin-top:2rem;padding:10px 20px;background:#007bff;color:white;border:none;cursor:pointer;border-radius:5px;">${t('back_btn')}</button>
        </div>`;

    const headers = document.querySelectorAll('.tab-header');
    const contents = document.querySelectorAll('.tab-content');
    headers.forEach(header => header.addEventListener('click', function () {
        const tabId = this.getAttribute('data-tab');
        headers.forEach(h => h.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    }));

    document.querySelector('.back-btn')?.addEventListener('click', () => navigateTo('tours'));
}