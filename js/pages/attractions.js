import { t } from '../i18n.js';
import { navigateTo } from '../navigation.js';

const backBtn = () => `<button class="back-btn" style="margin-top:2rem;padding:10px 20px;background:#007bff;color:white;border:none;cursor:pointer;border-radius:5px;">${t('back_to_attractions')}</button>`;

const bindBack = () => {
    document.querySelector('.back-btn')?.addEventListener('click', () => navigateTo('attractions'));
};

export function renderAttractionsPage() {
    const attractions = [
        { name: t('attr_lena_pillars'), desc: t('attr_lena_pillars_desc'), img: "images/lenskie_stolby_1140.jpg", page: 'attr-lena-pillars' },
        { name: t('attr_buluus'),       desc: t('attr_buluus_desc'),       img: "images/og_og_159089683834995975.jpg", page: 'attr-buluus' },
        { name: t('attr_zoo'),          desc: t('attr_zoo_desc'),          img: "images/zoopark.jpg", page: 'attr-zoo' },
        { name: t('attr_kuruluur'),     desc: t('attr_kuruluur_desc'),     img: "images/ff165c5e-52f9-5847-82fd-60dd1e1b2cae.jpg", page: 'attr-kuruluur' },
        { name: t('attr_tukulans'),     desc: t('attr_tukulans_desc'),     img: "images/ccf91685-43fc-44f1-90bc-e982e2d61a57.webp", page: 'attr-tukulans' },
        { name: t('attr_kullaty'),      desc: t('attr_kullaty_desc'),      img: "images/Bez-nazvaniya-121-e1591600371753.jpg", page: 'attr-kullaty' },
        { name: t('attr_bison'),        desc: t('attr_bison_desc'),        img: "images/bison.jpg", page: 'attr-bison' }
    ];

    const cards = attractions.map(a => `
        <div class="card" data-page="${a.page}" style="cursor:pointer;">
            <img src="${a.img}" alt="${a.name}" class="card-img">
            <div class="card-content">
                <h3 class="card-title">${a.name}</h3>
                <p class="card-text">${a.desc}</p>
            </div>
        </div>`).join('');

    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('attractions_title')}</h1>
            <p class="page-description">${t('attractions_subtitle')}</p>
            <div class="cards-grid">${cards}</div>
        </div>`;

    document.querySelectorAll('.card[data-page]').forEach(card => {
        card.addEventListener('click', function () {
            const page = this.getAttribute('data-page');
            if (page) navigateTo(page);
        });
    });
}

export function renderAttrLenaPillarsPage() {
    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('attr_lena_pillars')}</h1>
            <div class="attraction-gallery">
                <img src="images/lenskie_stolby_1140.jpg" class="gallery-main-img" alt="">
                <div class="gallery-thumbs">
                    <img src="images/1. Фото Ленских столбов.JPG" alt="">
                    <img src="images/i.jpeg" alt="">
                </div>
            </div>
            <div class="info-block"><h3>📝 ${t('attr_desc_label')}</h3><p>${t('attr_lena_pillars_full_desc')}</p></div>
            <div class="info-block"><h3>📍 ${t('attr_address_label')}</h3><p>${t('attr_lena_pillars_address')}</p></div>
            <div class="info-block"><h3>🚗 ${t('attr_how_label')}</h3><p>${t('attr_lena_pillars_how')}</p></div>
            ${backBtn()}
        </div>`;
    document.querySelectorAll('.gallery-thumbs img').forEach(thumb =>
        thumb.addEventListener('click', function () {
            document.querySelector('.gallery-main-img').src = this.src;
        })
    );
    bindBack();
}

export function renderAttrBuluusPage() {
    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('attr_buluus')}</h1>
            <div class="attraction-gallery"><img src="images/og_og_159089683834995975.jpg" class="gallery-main-img" alt=""></div>
            <div class="info-block"><h3>📝 ${t('attr_desc_label')}</h3><p>${t('attr_buluus_full_desc')}</p></div>
            <div class="info-block"><h3>📍 ${t('attr_address_label')}</h3><p>${t('attr_buluus_address')}</p></div>
            <div class="info-block"><h3>🚗 ${t('attr_how_label')}</h3><p>${t('attr_buluus_how')}</p></div>
            ${backBtn()}
        </div>`;
    bindBack();
}

export function renderAttrZooPage() {
    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('attr_zoo')}</h1>
            <div class="attraction-gallery"><img src="images/zoopark.jpg" class="gallery-main-img" alt=""></div>
            <div class="info-block"><h3>📝 ${t('attr_desc_label')}</h3><p>${t('attr_zoo_full_desc')}</p></div>
            <div class="info-block"><h3>📍 ${t('attr_address_label')}</h3><p>${t('attr_zoo_address')}</p></div>
            <div class="info-block"><h3>🚗 ${t('attr_how_label')}</h3><p>${t('attr_zoo_how')}</p></div>
            ${backBtn()}
        </div>`;
    bindBack();
}

export function renderAttrKuruluurPage() {
    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('attr_kuruluur')}</h1>
            <div class="attraction-gallery"><img src="images/ff165c5e-52f9-5847-82fd-60dd1e1b2cae.jpg" class="gallery-main-img" alt=""></div>
            <div class="info-block"><h3>📝 ${t('attr_desc_label')}</h3><p>${t('attr_kuruluur_full_desc')}</p></div>
            <div class="info-block"><h3>📍 ${t('attr_address_label')}</h3><p>${t('attr_kuruluur_address')}</p></div>
            <div class="info-block"><h3>🚗 ${t('attr_how_label')}</h3><p>${t('attr_kuruluur_how')}</p></div>
            ${backBtn()}
        </div>`;
    bindBack();
}

export function renderAttrTukulansPage() {
    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('attr_tukulans')}</h1>
            <div class="attraction-gallery"><img src="images/ccf91685-43fc-44f1-90bc-e982e2d61a57.webp" class="gallery-main-img" alt=""></div>
            <div class="info-block"><h3>📝 ${t('attr_desc_label')}</h3><p>${t('attr_tukulans_full_desc')}</p></div>
            <div class="info-block"><h3>📍 ${t('attr_address_label')}</h3><p>${t('attr_tukulans_address')}</p></div>
            <div class="info-block"><h3>🚗 ${t('attr_how_label')}</h3><p>${t('attr_tukulans_how')}</p></div>
            ${backBtn()}
        </div>`;
    bindBack();
}

export function renderAttrKullatyPage() {
    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('attr_kullaty')}</h1>
            <div class="attraction-gallery"><img src="images/Bez-nazvaniya-121-e1591600371753.jpg" class="gallery-main-img" alt=""></div>
            <div class="info-block"><h3>📝 ${t('attr_desc_label')}</h3><p>${t('attr_kullaty_full_desc')}</p></div>
            <div class="info-block"><h3>📍 ${t('attr_address_label')}</h3><p>${t('attr_kullaty_address')}</p></div>
            <div class="info-block"><h3>🚗 ${t('attr_how_label')}</h3><p>${t('attr_kullaty_how')}</p></div>
            ${backBtn()}
        </div>`;
    bindBack();
}

export function renderAttrBisonPage() {
    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('attr_bison')}</h1>
            <div class="attraction-gallery"><img src="images/bison.jpg" class="gallery-main-img" alt=""></div>
            <div class="info-block"><h3>📝 ${t('attr_desc_label')}</h3><p>${t('attr_bison_full_desc')}</p></div>
            <div class="info-block">
                <h3>📍 ${t('attr_address_label')}</h3>
                <p>${t('attr_bison_address')}</p>
                <p><strong>${t('attr_coords_label')}:</strong> 61.249538, 128.758442</p>
            </div>
            <div class="info-block">
                <h3>🚗 ${t('attr_how_label')}</h3>
                <p><strong>${t('attr_bison_summer')}:</strong> ${t('attr_bison_summer_text')}</p>
                <p><strong>${t('attr_bison_winter')}:</strong> ${t('attr_bison_winter_text')}</p>
            </div>
            ${backBtn()}
        </div>`;
    bindBack();
}