import { t } from '../i18n.js';
import { renderDetailPage, card, bindCards } from '../components/detail-page.js';

const STAYS = [
    {
        id: 'stay-naraada',
        cardImg: 'images/naraada_1.webp',
        nameKey: 'stay_naraada',
        descKey: 'stay_naraada_desc',
        priceKey: 'stay_naraada_price',
        gallery: {
            main: 'images/naraada_1.webp',
            thumbs: ['images/naraada_1.webp', 'images/naraada_2.webp', 'images/naraada_3.webp', 'images/naraada_4.webp', 'images/naraada_5.webp', 'images/naraada_6.webp', 'images/naraada_7.webp']
        },
        blocks: [
            { title: 'stay_desc_label', content: 'stay_naraada_desc_full' },
            { title: 'stay_address_label', content: 'stay_naraada_address' },
            { title: 'stay_services_label', content: 'stay_naraada_services' },
            { title: 'stay_price_label', content: 'stay_naraada_price' },
        ]
    },
    {
        id: 'stay-lena-pillars',
        cardImg: 'images/33a59831f49facfb6a8ef79f5583b4c627d5c1a2.jpg',
        nameKey: 'stay_lena_pillars',
        descKey: 'stay_lena_pillars_desc',
        priceKey: 'stay_lena_pillars_price',
        gallery: {
            main: 'images/33a59831f49facfb6a8ef79f5583b4c627d5c1a2.jpg',
            thumbs: ['images/33a59831f49facfb6a8ef79f5583b4c627d5c1a2.jpg', 'images/ленские столбы1.jfif', 'images/Ленские Столбы2.jpg']
        },
        blocks: [
            { title: 'stay_desc_label', content: 'stay_lena_pillars_desc_full' },
            { title: 'stay_address_label', content: 'stay_lena_pillars_address' },
            { title: 'stay_services_label', content: 'stay_lena_pillars_services' },
            { title: 'stay_price_label', content: 'stay_lena_pillars_price' },
        ]
    },
    {
        id: 'stay-orto-doydy',
        cardImg: 'images/Орто Додйу1.jpg',
        nameKey: 'stay_orto-doydy',
        descKey: 'stay_orto-doydy_desc',
        priceKey: 'stay_orto-doydy_price',
        gallery: {
            main: 'images/Орто Додйу1.jpg',
            thumbs: ['images/Орто Додйу1.jpg', 'images/Орто Дойду2.jpg', 'images/Орто Дойду3.jpg', 'images/орто Дойду4.jpeg']
        },
        blocks: [
            { title: 'stay_desc_label', content: 'stay_orto-doydy_desc_full' },
            { title: 'stay_address_label', content: 'stay_orto-doydy_address' },
            { title: 'stay_services_label', content: 'stay_orto-doydy_services' },
            { title: 'stay_price_label', content: 'stay_orto-doydy_price' },
        ]
    },
    {
        id: 'stay-tukulan',
        cardImg: 'images/Тукулан1.jpg',
        nameKey: 'stay_tukulan',
        descKey: 'stay_tukulan_desc',
        priceKey: 'stay_tukulan_price',
        gallery: {
            main: 'images/Тукулан1.jpg',
            thumbs: ['images/Тукулан1.jpg', 'images/Тукулан2.jpeg', 'images/Тукулан3.jpg']
        },
        blocks: [
            { title: 'stay_desc_label', content: 'stay_tukulan_desc_full' },
            { title: 'stay_address_label', content: 'stay_tukulan_address' },
            { title: 'stay_add_label', content: 'stay_tukulan_add' },
            { title: 'stay_services_label', content: 'stay_tukulan_services' },
            { title: 'stay_conditions_label', content: 'stay_tukulan_conditions' },
            { title: 'stay_price_label', content: 'stay_tukulan_price' },
        ]
    },
    {
        id: 'stay-deer',
        cardImg: 'images/Белый олень1.jpg',
        nameKey: 'stay_deer',
        descKey: 'stay_deer_desc',
        priceKey: 'stay_deer_price',
        gallery: {
            main: 'images/Белый олень1.jpg',
            thumbs: ['images/Белый олень1.jpg', 'images/Белый олень2.jfif', 'images/Белый олень3.jfif']
        },
        blocks: [
            { title: 'stay_desc_label', content: 'stay_deer_desc_full' },
            { title: 'stay_address_label', content: 'stay_deer_address' },
            { title: 'stay_services_label', content: 'stay_deer_services' },
            { title: 'stay_price_label', content: 'stay_deer_price' },
        ]
    },
    {
        id: 'stay-legend',
        cardImg: 'images/берег легенд1.jpg',
        nameKey: 'stay_legend',
        descKey: 'stay_legend_desc',
        priceKey: 'stay_legend_price',
        gallery: {
            main: 'images/берег легенд1.jpg',
            thumbs: ['images/берег легенд1.jpg', 'images/берег легенд2.jpg', 'images/берег легенд3.jpg']
        },
        blocks: [
            { title: 'stay_desc_label', content: 'stay_legend_desc_full' },
            { title: 'stay_address_label', content: 'stay_legend_address' },
            { title: 'stay_services_label', content: 'stay_legend_services' },
            { title: 'stay_price_label', content: 'stay_legend_price' },
        ]
    },
    {
        id: 'stay-victoria',
        cardImg: 'images/Виктория.jfif',
        nameKey: 'stay_victoria',
        descKey: 'stay_victoria_desc',
        priceKey: 'stay_victoria_price',
        gallery: {
            main: 'images/Виктория.jfif',
            thumbs: ['images/Виктория.jfif', 'images/Виктория2.jfif']
        },
        blocks: [
            { title: 'stay_desc_label', content: 'stay_victoria_desc_full' },
            { title: 'stay_address_label', content: 'stay_victoria_address' },
            { title: 'stay_services_label', content: 'stay_victoria_services' },
            { title: 'stay_price_label', content: 'stay_victoria_price' },
        ]
    },
    {
        id: 'stay-oktem',
        cardImg: 'images/Октем парк.jpg',
        nameKey: 'stay_oktem',
        descKey: 'stay_oktem_desc',
        priceKey: 'stay_oktem_price',
        gallery: {
            main: 'images/Октем парк.jpg',
            thumbs: ['images/Октем парк.jpg', 'images/Октем парк2.jpg']
        },
        blocks: [
            { title: 'stay_desc_label', content: 'stay_oktem_desc_full' },
            { title: 'stay_address_label', content: 'stay_oktem_address' },
            { title: 'stay_services_label', content: 'stay_oktem_services' },
            { title: 'stay_price_label', content: 'stay_oktem_price' },
        ]
    },
    {
        id: 'stay-byriver',
        cardImg: 'images/у реки1.jpg',
        nameKey: 'stay_byriver',
        descKey: 'stay_byriver_desc',
        priceKey: 'stay_byriver_price',
        gallery: {
            main: 'images/у реки1.jpg',
            thumbs: ['images/у реки1.jpg', 'images/У реки2.jpg']
        },
        blocks: [
            { title: 'stay_desc_label', content: 'stay_byriver_desc_full' },
            { title: 'stay_address_label', content: 'stay_byriver_address' },
            { title: 'stay_services_label', content: 'stay_byriver_services' },
            { title: 'stay_price_label', content: 'stay_byriver_price' },
        ]
    },
    {
        id: 'stay-riverview',
        cardImg: 'images/Ривер Вью.webp',
        nameKey: 'stay_riverview',
        descKey: 'stay_riverview_desc',
        priceKey: 'stay_riverview_price',
        gallery: {
            main: 'images/Ривер Вью.webp',
            thumbs: []
        },
        blocks: [
            { title: 'stay_desc_label', content: 'stay_riverview_desc_full' },
            { title: 'stay_address_label', content: 'stay_riverview_address' },
            { title: 'stay_services_label', content: 'stay_riverview_services' },
            { title: 'stay_price_label', content: 'stay_riverview_price' },
        ]
    },
    {
        id: 'stay-sterkh',
        cardImg: 'images/Гостиница Стерх.jpg',
        nameKey: 'stay_sterkh',
        descKey: 'stay_sterkh_desc',
        priceKey: 'stay_sterkh_price',
        gallery: {
            main: 'images/Гостиница Стерх.jpg',
            thumbs: ['images/Гостиница Стерх.jpg', 'images/Гостиница Стерх2.jfif']
        },
        blocks: [
            { title: 'stay_desc_label', content: 'stay_sterkh_desc_full' },
            { title: 'stay_address_label', content: 'stay_sterkh_address' },
            { title: 'stay_services_label', content: 'stay_sterkh_services' },
            { title: 'stay_price_label', content: 'stay_sterkh_price' },
        ]
    },
    {
        id: 'stay-tit_aryy',
        cardImg: 'images/База отдыха Тит Ары1.jpg',
        nameKey: 'stay_tit_aryy',
        descKey: 'stay_tit_aryy_desc',
        priceKey: 'stay_tit_aryy_price',
        gallery: {
            main: 'images/База отдыха Тит Ары1.jpg',
            thumbs: ['images/База отдыха Тит Ары1.jpg', 'images/База отдыха Тит-Ары2.jpg']
        },
        blocks: [
            { title: 'stay_desc_label', content: 'stay_tit_aryy_desc_full' },
            { title: 'stay_address_label', content: 'stay_tit_aryy_address' },
            { title: 'stay_services_label', content: 'stay_tit_aryy_services' },
            { title: 'stay_price_label', content: 'stay_tit_aryy_price' },
        ]
    },
];

export function renderStayPage() {
    const cards = STAYS.map(item =>
        card({
            id: item.id,
            img: item.cardImg,
            name: t(item.nameKey),
            desc: t(item.descKey),
            extra: `${t(item.priceKey)}`
        })
    ).join('');

    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${t('stay_title')}</h1>
            <p class="page-description">${t('stay_subtitle')}</p>
            <div class="cards-grid">${cards}</div>
        </div>`;

    bindCards();
}

export function renderStayDetail(id) {
    const item = STAYS.find(s => s.id === id);
    if (!item) return;

    renderDetailPage({
        title: t(item.nameKey),
        mainImg: item.gallery.main,
        thumbs: item.gallery.thumbs,
        blocks: item.blocks,
        backTo: 'stay',
        backLabelKey: 'back_to_stay'
    });
}