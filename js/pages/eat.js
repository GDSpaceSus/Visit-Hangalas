import { t } from '../i18n.js';
import { renderDetailPage, card, bindCards } from '../components/detail-page.js';

const PLACES = [
    {
        id: 'eat-orto-doidu',
        cardImg: 'images/Yn7gFbgkfCfaLAn7SgONRjzEoPjVHDCx8oZ7Cp51.jpg',
        nameKey: 'eat_orto_doidu',
        descKey: 'eat_orto_doidu_desc',
        cuisineKey: 'eat_cuisine_author',
        gallery: {
            main: 'images/Yn7gFbgkfCfaLAn7SgONRjzEoPjVHDCx8oZ7Cp51.jpg',
            thumbs: []
        },
        blocks: [
            { title: `eat_desc_label`, content: 'eat_orto_doidu_desc_full' },
            { title: `eat_address_label`, content: 'eat_orto_doidu_address' },
            { title: 'eat_hours', content: 'eat_orto_doidu_hours' },
            { title: 'eat_contacts', content: '+7-914-2-711-227' },
            { title: 'eat_cuisine', content: 'eat_orto_doidu_kitchen' }
        ]
    },
    {
        id: 'eat-raimuss',
        cardImg: 'images/image_26.webp',
        nameKey: 'eat_raimuss',
        descKey: 'eat_raimuss_desc',
        cuisineKey: 'eat_cuisine_confectionery',
        gallery: {
            main: 'images/image_26.webp',
            thumbs: []
        },
        blocks: [
            { title: `eat_desc_label`, content: 'eat_raimuss_desc_full' },
            { title: `eat_address_label`, content: 'eat_raimuss_address' },
            { title: 'eat_hours', content: 'eat_raimuss_hours' },
            { title: 'eat_contacts', content: '+7-914-283-50-10' },
            { title: 'eat_cuisine', content: 'eat_raimuss_kitchen' }
        ]
    },
    {
        id: 'eat-ramen',
        cardImg: 'images/JnH806wX52E4hXRDZg1nj5W0fPFI0vkjCCI-dTg83VqxJlCJSvAjiB48LAbR.jpg',
        nameKey: 'eat_ramen',
        descKey: 'eat_ramen_desc',
        cuisineKey: 'eat_cuisine_korean',
        gallery: {
            main: 'images/JnH806wX52E4hXRDZg1nj5W0fPFI0vkjCCI-dTg83VqxJlCJSvAjiB48LAbR.jpg',
            thumbs: []
        },
        blocks: [
            { title: `eat_desc_label`, content: 'eat_ramen_desc_full' },
            { title: `eat_address_label`, content: 'eat_ramen_address' },
            { title: 'eat_hours', content: 'eat_ramen_hours' },
            { title: 'eat_contacts', content: '+7-914-105-25-35' },
            { title: 'eat_cuisine', content: 'eat_ramen_kitchen' }
        ]
    }
];

export function renderEatPage() {
    const cards = PLACES.map(item =>
        card({
            id: item.id,
            img: item.cardImg,
            name: t(item.nameKey),
            desc: t(item.descKey),
            extra: `🍴 ${t(item.cuisineKey)}`
        })
    ).join('');

    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('eat_title')}</h1>
            <p class="page-description">${t('eat_subtitle')}</p>
            <div class="cards-grid">${cards}</div>
        </div>`;

    bindCards();
}

export function renderEatDetail(id) {
    const item = PLACES.find(p => p.id === id);
    if (!item) return;

    renderDetailPage({
        title: t(item.nameKey),
        mainImg: item.gallery.main,
        thumbs: item.gallery.thumbs,
        blocks: item.blocks,
        backTo: 'eat',
        backLabelKey: 'back_to_eat'
    });
}