import { t } from '../i18n.js';
import { renderDetailPage, card, bindCards } from '../components/detail-page.js';

const PLACES = [
    {
        id: 'see-museum-pokrovsk',
        cardImg: 'images/eab52766-11dc-5efb-ab51-b825e6bb5f11.jpg',
        gallery: {
            main: 'images/eab52766-11dc-5efb-ab51-b825e6bb5f11.jpg',
            thumbs: []
        },
        nameKey: 'see_kraeved',
        descKey: 'see_kraeved_desc',
        typeKey: 'see_kraeved_type',
        blocks: [
            { title: 'see_description', content: 'see_kraeved_desc_alt' },
            { title: 'see_address', content: 'see_kraeved_address' },
            { title: 'see_hours', content: 'see_kraeved_hours' },
            { title: 'see_tickets', content: 'see_kraeved_ticket' }
        ]
    },
    {
        id: 'see-lena-park',
        cardImg: 'images/1. Фото Ленских столбов.JPG',
        gallery: {
            main: 'images/1. Фото Ленских столбов.JPG',
            thumbs: [
                'images/lenskie_stolby_1140.jpg',
                'images/i.jpeg'
            ]
        },
        nameKey: 'see_lena_park',
        descKey: 'see_lena_park_desc',
        typeKey: 'see_lena_park_type',
        blocks: [
            { title: 'see_description', content: 'see_lena_park_desc_alt' },
            { title: 'see_address', content: 'see_lena_park_address' },
            { title: 'see_instructions', content: 'see_lena_park_instructions' },
            { title: 'see_entry', content: 'see_lena_park_entry' }
        ]
    },
    {
        id: 'see-orto-doidu',
        cardImg: 'images/5ac33de2b9d8b315736742.jpg',
        gallery: {
            main: 'images/5ac33de2b9d8b315736742.jpg',
            thumbs: []
        },
        nameKey: 'see_orto-doydu',
        descKey: 'see_orto-doydu_desc',
        typeKey: 'see_orto-doydu_type',
        blocks: [
            { title: 'see_description', content: 'see_orto-doydu_desc_alt' },
            { title: 'see_address', content: 'see_orto-doydu_address' },
            { title: 'see_hours', content: 'see_orto-doydu_hours' },
            { title: 'see_tickets', content: 'see_orto-doydu_ticket' }
        ]
    },
    {
        id: 'see-ordzhonikidze',
        cardImg: 'images/photo_2022-12-07_14-20-37-2.jpg',
        gallery: {
            main: 'images/photo_2022-12-07_14-20-37-2.jpg',
            thumbs: []
        },
        nameKey: 'see_ord',
        descKey: 'see_ord_desc',
        typeKey: 'see_ord_type',
        blocks: [
            { title: 'see_description', content: 'see_ord_desc_alt' },
            { title: 'see_address', content: 'see_ord_address' },
            { title: 'see_hours', content: 'see_ord_hours' },
            { title: 'see_tickets', content: 'see_ord_ticket' }
        ]
    },
    {
        id: 'see-elanka',
        cardImg: 'images/image_31.webp',
        gallery: {
            main: 'images/image_31.webp',
            thumbs: []
        },
        nameKey: 'see_elanka',
        descKey: 'see_elanka_desc',
        typeKey: 'see_elanka_type',
        blocks: [
            { title: 'see_description', content: 'see_elanka_desc_alt' },
            { title: 'see_address', content: 'see_elanka_address' },
            { title: 'see_instructions', content: 'see_elanka_instructions' }
        ]
    },
    {
        id: 'see-nikolaev',
        cardImg: 'images/1758926977_68d7188103581.jpg',
        gallery: {
            main: 'images/1758926977_68d7188103581.jpg',
            thumbs: []
        },
        nameKey: 'see_nikolaev',
        descKey: 'see_nikolaev_desc',
        typeKey: 'see_nikolaev_type',
        blocks: [
            { title: 'see_description', content: 'see_nikolaev_desc_alt' },
            { title: 'see_address', content: 'see_nikolaev_address' },
            { title: 'see_hours', content: 'see_nikolaev_hours' },
            { title: 'see_tickets', content: 'see_nikolaev_ticket' }
        ]
    },
    {
        id: 'see-oktemtsy',
        cardImg: 'images/image_33.webp',
        gallery: {
            main: 'images/image_33.webp',
            thumbs: []
        },
        nameKey: 'see_oktemsy',
        descKey: 'see_oktemsy_desc',
        typeKey: 'see_oktemsy_type',
        blocks: [
            { title: 'see_description', content: 'see_oktemsy_desc_alt' },
            { title: 'see_address', content: 'see_oktemsy_address' },
            { title: 'see_tickets', content: 'see_oktemsy_tickets' }
        ]
    },
    {
        id: 'see-ulakhan-an',
        cardImg: 'images/10d18276-7d25-4402-9188-5a7756fbea08.jpg',
        gallery: {
            main: 'images/10d18276-7d25-4402-9188-5a7756fbea08.jpg',
            thumbs: []
        },
        nameKey: 'see_ulakhan',
        descKey: 'see_ulakhan_desc',
        typeKey: 'see_ulakhan_type',
        blocks: [
            { title: 'see_description', content: 'see_ulakhan_desc_alt' },
            { title: 'see_address', content: 'see_ulakhan_address' },
            { title: 'see_tickets', content: 'see_ulakhan_tickets' }
        ]
    },
    {
        id: 'see-danilov',
        cardImg: 'images/image_35.webp',
        gallery: {
            main: 'images/image_35.webp',
            thumbs: []
        },
        nameKey: 'see_danilov',
        descKey: 'see_danilov_desc',
        typeKey: 'see_danilov_type',
        blocks: [
            { title: 'see_description', content: 'see_danilov_desc_alt' },
            { title: 'see_address', content: 'see_danilov_address' },
            { title: 'see_hours', content: 'see_danilov_hours' }
        ]
    }
];

export function renderSeePage() {
    const cards = PLACES.map(item =>
        card({
            id: item.id,
            img: item.gallery.main,
            name: t(item.nameKey),
            desc: t(item.descKey),
            extra: `${t(item.typeKey)}`
        })
    ).join('');

    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('see_title')}</h1>
            <p class="page-description">${t('see_subtitle')}</p>
            <div class="cards-grid">${cards}</div>
        </div>`;

    bindCards();
}

export function renderSeeDetail(id) {
    const item = PLACES.find(p => p.id === id);
    if (!item) return;

    renderDetailPage({
        title: t(item.nameKey),
        mainImg: item.gallery.main,
        thumbs: item.gallery.thumbs,
        blocks: item.blocks,
        backTo: 'see',
        backLabelKey: 'back_to_see'
    });
}