import { t } from '../i18n.js';
import { renderDetailPage, card, bindCards } from '../components/detail-page.js';

const PLACES = [
    {
        id: 'attr-lena-pillars',
        cardImg: 'images/lenskie_stolby_1140.jpg',
        nameKey: 'attr_lena_pillars',
        descKey: 'attr_lena_pillars_desc',
        gallery: {
            main: 'images/lenskie_stolby_1140.jpg',
            thumbs: [
                'images/1. Фото Ленских столбов.JPG',
                'images/i.jpeg'
            ]
        },
        blocks: [
            { title: 'attr_desc_label', content: 'attr_lena_pillars_full_desc'},
            { title: 'attr_address_label', content: 'attr_lena_pillars_address'},
            { title: 'attr_how_label', content: 'attr_lena_pillars_how'}
        ]
    },
    {
        id: 'attr-buluus',
        cardImg: 'images/og_og_159089683834995975.jpg',
        nameKey: 'attr_buluus',
        descKey: 'attr_buluus_desc',
        gallery: { main: 'images/og_og_159089683834995975.jpg', thumbs: [] },
        blocks: [
            { title: 'attr_desc_label', content: 'attr_buluus_full_desc'},
            { title: 'attr_address_label', content: 'attr_buluus_address'},
            { title: 'attr_how_label', content: 'attr_buluus_how'}
        ]
    },
    {
        id: 'attr-zoo',
        cardImg: 'images/zoopark.jpg',
        nameKey: 'attr_zoo',
        descKey: 'attr_zoo_desc',
        gallery: { main: 'images/zoopark.jpg', thumbs: [] },
        blocks: [
            { title: 'attr_desc_label', content: 'attr_zoo_full_desc'},
            { title: 'attr_address_label', content: 'attr_zoo_address'},
            { title: 'attr_how_label', content: 'attr_zoo_how'}
        ]
    },
    {
        id: 'attr-kuruluur',
        cardImg: 'images/ff165c5e-52f9-5847-82fd-60dd1e1b2cae.jpg',
        nameKey: 'attr_kuruluur',
        descKey: 'attr_kuruluur_desc',
        gallery: { main: 'images/ff165c5e-52f9-5847-82fd-60dd1e1b2cae.jpg', thumbs: [] },
        blocks: [
            { title: 'attr_desc_label', content: 'attr_kuruluur_full_desc'},
            { title: 'attr_address_label', content: 'attr_kuruluur_address'},
            { title: 'attr_how_label', content: 'attr_kuruluur_how'}
        ]
    },
    {
        id: 'attr-tukulans',
        cardImg: 'images/ccf91685-43fc-44f1-90bc-e982e2d61a57.webp',
        nameKey: 'attr_tukulans',
        descKey: 'attr_tukulans_desc',
        gallery: { main: 'images/ccf91685-43fc-44f1-90bc-e982e2d61a57.webp', thumbs: [] },
        blocks: [
            { title: 'attr_desc_label', content: 'attr_tukulans_full_desc'},
            { title: 'attr_address_label', content: 'attr_tukulans_address'},
            { title: 'attr_how_label', content: 'attr_tukulans_how'}
        ]
    },
    {
        id: 'attr-kullaty',
        cardImg: 'images/Bez-nazvaniya-121-e1591600371753.jpg',
        nameKey: 'attr_kullaty',
        descKey: 'attr_kullaty_desc',
        gallery: { main: 'images/Bez-nazvaniya-121-e1591600371753.jpg', thumbs: [] },
        blocks: [
            { title: 'attr_desc_label', content: 'attr_kullaty_full_desc'},
            { title: 'attr_address_label', content: 'attr_kullaty_address'},
            { title: 'attr_how_label', content: 'attr_kullaty_how'}
        ]
    },
    {
        id: 'attr-bison',
        cardImg: 'images/bison.jpg',
        nameKey: 'attr_bison',
        descKey: 'attr_bison_desc',
        gallery: { main: 'images/bison.jpg', thumbs: [] },
        blocks: [
                    { title: `attr_desc_label`, content: 'attr_bison_full_desc' },
                    { title: `attr_address_label`, content: 'attr_bison_address' },
                    { title: `attr_how_label`, content: 'attr_bison_instructions_text'}
                ]
    }
];

export function renderAttractionsPage() {
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
            <h1 class="page-title">${t('attractions_title')}</h1>
            <p class="page-description">${t('attractions_subtitle')}</p>
            <div class="cards-grid">${cards}</div>
        </div>`;

    bindCards();
}

export function renderAttractionDetail(id) {
    const item = PLACES.find(p => p.id === id);
    if (!item) return;

    renderDetailPage({
        title: t(item.nameKey),
        mainImg: item.gallery.main,
        thumbs: item.gallery.thumbs,
        blocks: item.blocks,
        backTo: 'attractions',
        backLabelKey: 'back_to_attractions'
    });
}