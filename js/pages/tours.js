import { t } from '../i18n.js';
import { navigateTo } from '../navigation.js';

export function renderToursPage() {
    const tours = [
        { name: t('tour_lena_name'),     desc: t('tour_lena_desc'),     img: "images/image_13.webp", page: 'lena-tour' },
        { name: t('tour_inyakutia_name'), desc: t('tour_inyakutia_desc'), img: "images/7mvB12D1I3U.jpg", page: 'inyakutia' }
    ];

    const cards = tours.map(item => `
        <div class="card" data-page="${item.page}" style="cursor:pointer;">
            <img src="${item.img}" alt="${item.name}" class="card-img">
            <div class="card-content">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-text">${item.desc}</p>
                <p class="card-more">${t('card_more')} →</p>
            </div>
        </div>`).join('');

    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('tours_title')}</h1>
            <p class="page-description">${t('tours_subtitle')}</p>
            <div class="cards-grid">${cards}</div>
        </div>`;

    document.querySelectorAll('.card[data-page]').forEach(card => {
        card.addEventListener('click', function () {
            const page = this.getAttribute('data-page');
            if (page) navigateTo(page);
        });
    });
}

function bindTabs() {
    const headers = document.querySelectorAll('.tab-header');
    const contents = document.querySelectorAll('.tab-content');
    headers.forEach(header => header.addEventListener('click', function () {
        const id = this.getAttribute('data-tab');
        headers.forEach(h => h.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(id).classList.add('active');
    }));
}

const bindBackToTours = () => {
    document.querySelector('.back-btn')?.addEventListener('click', () => navigateTo('tours'));
};

export function renderLenaTourPage() {
    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('lena_tour_title')}</h1>
            <p class="page-description">${t('lena_tour_subtitle')}</p>

            <div class="info-block" style="margin-bottom:1.5rem;">
                <h3>📞 ${t('contacts_title')}</h3>
                <p><strong>${t('contacts_phone_label')}:</strong> +7 (924) 177-38-08</p>
                <p><strong>${t('contacts_email_label')}:</strong> lenatour@internet.ru</p>
                <p><strong>${t('contacts_web_label')}:</strong> lena-tour-yakutia.ru</p>
            </div>

            <div class="tab-headers">
                <div class="tab-header active" data-tab="tab-lena-1">${t('tab_deer')}</div>
                <div class="tab-header" data-tab="tab-lena-2">${t('tab_sinsk')}</div>
                <div class="tab-header" data-tab="tab-lena-3">${t('tab_winter_lena')}</div>
                <div class="tab-header" data-tab="tab-lena-4">${t('tab_khandyga')}</div>
            </div>

            <div class="tab-contents">
                <div class="tab-content active" id="tab-lena-1">
                    <div class="tour-detail">
                        <img src="images/thumb_1280_539788429.jpg" class="tour-detail-img" alt="">
                        <div class="tour-detail-info">
                            <h3>${t('tab_deer')}</h3>
                            <p>${t('tour_deer_desc')}</p>
                            <ul>
                                <li><strong>${t('tour_duration')}:</strong> ${t('tour_deer_duration')}</li>
                                <li><strong>${t('tour_season')}:</strong> ${t('tour_deer_season')}</li>
                                <li><strong>${t('tour_transport')}:</strong> ${t('tour_deer_transport')}</li>
                                <li><strong>${t('tour_food')}:</strong> ${t('tour_deer_food')}</li>
                            </ul>
                            <p class="tour-price"><strong>💰 ${t('tour_price')}:</strong> ${t('tour_deer_price')}</p>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="tab-lena-2">
                    <div class="tour-detail">
                        <img src="images/yakutia-sinskie-pillars-v1-1-1.jpg" class="tour-detail-img" alt="">
                        <div class="tour-detail-info">
                            <h3>${t('tab_sinsk')}</h3>
                            <p>${t('tour_sinsk_desc')}</p>
                            <ul>
                                <li><strong>${t('tour_duration')}:</strong> ${t('tour_sinsk_duration')}</li>
                                <li><strong>${t('tour_season')}:</strong> ${t('tour_sinsk_season')}</li>
                                <li><strong>${t('tour_transport')}:</strong> ${t('tour_sinsk_transport')}</li>
                                <li><strong>${t('tour_food')}:</strong> ${t('tour_sinsk_food')}</li>
                            </ul>
                            <p class="tour-price"><strong>💰 ${t('tour_price')}:</strong> ${t('tour_sinsk_price')}</p>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="tab-lena-3">
                    <div class="tour-detail">
                        <img src="images/images.jpeg" class="tour-detail-img" alt="">
                        <div class="tour-detail-info">
                            <h3>${t('tab_winter_lena')}</h3>
                            <p>${t('tour_winter_lena_desc')}</p>
                            <ul>
                                <li><strong>${t('tour_duration')}:</strong> ${t('tour_winter_lena_duration')}</li>
                                <li><strong>${t('tour_season')}:</strong> ${t('tour_winter_lena_season')}</li>
                                <li><strong>${t('tour_transport')}:</strong> ${t('tour_winter_lena_transport')}</li>
                                <li><strong>${t('tour_food')}:</strong> ${t('tour_winter_lena_food')}</li>
                            </ul>
                            <p class="tour-price"><strong>💰 ${t('tour_price')}:</strong> ${t('tour_winter_lena_price')}</p>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="tab-lena-4">
                    <div class="tour-detail">
                        <img src="images/142454_original.jpg" class="tour-detail-img" alt="">
                        <div class="tour-detail-info">
                            <h3>${t('tab_khandyga')}</h3>
                            <p>${t('tour_khandyga_desc')}</p>
                            <ul>
                                <li><strong>${t('tour_duration')}:</strong> ${t('tour_khandyga_duration')}</li>
                                <li><strong>${t('tour_season')}:</strong> ${t('tour_khandyga_season')}</li>
                                <li><strong>${t('tour_transport')}:</strong> ${t('tour_khandyga_transport')}</li>
                                <li><strong>${t('tour_food')}:</strong> ${t('tour_khandyga_food')}</li>
                            </ul>
                            <p class="tour-price"><strong>💰 ${t('tour_price')}:</strong> ${t('tour_khandyga_price')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <button class="back-btn" style="margin-top:2rem;padding:10px 20px;background:#007bff;color:white;border:none;cursor:pointer;border-radius:5px;">${t('back_btn')}</button>
        </div>`;
    bindTabs();
    bindBackToTours();
}

export function renderInYakutiaPage() {
    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('inyakutia_title')}</h1>
            <p class="page-description">${t('inyakutia_subtitle')}</p>

            <div class="info-block" style="margin-bottom:1.5rem;">
                <h3>📞 ${t('contacts_title')}</h3>
                <p><strong>${t('contacts_phone_label')}:</strong> +7 (914) 273-59-00, +7 (914) 274-88-33</p>
                <p><strong>${t('contacts_email_label')}:</strong> go@inyakutia.ru</p>
                <p><strong>${t('contacts_web_label')}:</strong> www.inyakutia.ru, www.inyakutia.com</p>
            </div>

            <div class="tab-headers">
                <div class="tab-header active" data-tab="tab-inya-1">${t('tab_indigirka')}</div>
                <div class="tab-header" data-tab="tab-inya-2">${t('tab_oymyakon')}</div>
                <div class="tab-header" data-tab="tab-inya-3">${t('tab_lena_raft')}</div>
                <div class="tab-header" data-tab="tab-inya-4">${t('tab_sinyaya')}</div>
            </div>

            <div class="tab-contents">
                <div class="tab-content active" id="tab-inya-1">
                    <div class="tour-detail">
                        <img src="images/o0g11jouribd6o44y04wzqk94zkz834x_1600x900_2.webp" class="tour-detail-img" alt="">
                        <div class="tour-detail-info">
                            <h3>${t('tab_indigirka')}</h3>
                            <p>${t('tour_indigirka_desc')}</p>
                            <ul>
                                <li><strong>${t('tour_duration')}:</strong> ${t('tour_indigirka_duration')}</li>
                                <li><strong>${t('tour_season')}:</strong> ${t('tour_indigirka_season')}</li>
                                <li><strong>${t('tour_transport')}:</strong> ${t('tour_indigirka_transport')}</li>
                                <li><strong>${t('tour_accommodation')}:</strong> ${t('tour_indigirka_accommodation')}</li>
                            </ul>
                            <p class="tour-price"><strong>💰 ${t('tour_price')}:</strong> ${t('tour_indigirka_price')}</p>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="tab-inya-2">
                    <div class="tour-detail">
                        <img src="images/image_20.webp" class="tour-detail-img" alt="">
                        <div class="tour-detail-info">
                            <h3>${t('tab_oymyakon')}</h3>
                            <p>${t('tour_oymyakon_desc')}</p>
                            <ul>
                                <li><strong>${t('tour_duration')}:</strong> ${t('tour_oymyakon_duration')}</li>
                                <li><strong>${t('tour_season')}:</strong> ${t('tour_oymyakon_season')}</li>
                                <li><strong>${t('tour_transport')}:</strong> ${t('tour_oymyakon_transport')}</li>
                                <li><strong>${t('tour_accommodation')}:</strong> ${t('tour_oymyakon_accommodation')}</li>
                            </ul>
                            <p class="tour-price"><strong>💰 ${t('tour_price')}:</strong> ${t('tour_oymyakon_price')}</p>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="tab-inya-3">
                    <div class="tour-detail">
                        <img src="images/347446216715355.webp" class="tour-detail-img" alt="">
                        <div class="tour-detail-info">
                            <h3>${t('tab_lena_raft')}</h3>
                            <p>${t('tour_lena_raft_desc')}</p>
                            <ul>
                                <li><strong>${t('tour_duration')}:</strong> ${t('tour_lena_raft_duration')}</li>
                                <li><strong>${t('tour_season')}:</strong> ${t('tour_lena_raft_season')}</li>
                                <li><strong>${t('tour_transport')}:</strong> ${t('tour_lena_raft_transport')}</li>
                                <li><strong>${t('tour_food')}:</strong> ${t('tour_lena_raft_food')}</li>
                            </ul>
                            <p class="tour-price"><strong>💰 ${t('tour_price')}:</strong> ${t('tour_lena_raft_price')}</p>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="tab-inya-4">
                    <div class="tour-detail">
                        <img src="images/image_22.webp" class="tour-detail-img" alt="">
                        <div class="tour-detail-info">
                            <h3>${t('tab_sinyaya')}</h3>
                            <p>${t('tour_sinyaya_desc')}</p>
                            <ul>
                                <li><strong>${t('tour_duration')}:</strong> ${t('tour_sinyaya_duration')}</li>
                                <li><strong>${t('tour_season')}:</strong> ${t('tour_sinyaya_season')}</li>
                                <li><strong>${t('tour_transport')}:</strong> ${t('tour_sinyaya_transport')}</li>
                                <li><strong>${t('tour_food')}:</strong> ${t('tour_sinyaya_food')}</li>
                            </ul>
                            <p class="tour-price"><strong>💰 ${t('tour_price')}:</strong> ${t('tour_sinyaya_price')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <button class="back-btn" style="margin-top:2rem;padding:10px 20px;background:#007bff;color:white;border:none;cursor:pointer;border-radius:5px;">${t('back_btn')}</button>
        </div>`;
    bindTabs();
    bindBackToTours();
}