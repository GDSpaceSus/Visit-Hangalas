import { t } from '../i18n.js';
import { renderDetailPage, card, bindCards } from '../components/detail-page.js';

const PLACES = [
    {
        id: 'tour-chuchuna-buluus',
        cardImg: 'images/булуус.webp',
        nameKey: 'chuchuna_buluus_name',
        descKey: 'chuchuna_buluus_desc',
        gallery: {
            main: 'images/булуус.webp',
        },
        blocks: [
            { title: ('tour_desc_label'), content: ('chuchuna_buluus_desc_full')},
            { title: ('tour_highlight_label'), content: ('chuchuna_buluus_highlight') },
            { title: ('tour_detail_label'), content: ('chuchuna_buluus_details') },
            { title: ('tour_date_label'), content: ('chuchuna_buluus_date') },
            { title: ('tour_price'), content: ('chuchuna_buluus_price') },
            { title: ('tour_contact'), content: ('chuchuna_buluus_contact') },
        ]
    },
    {
        id: 'tour-chuchuna-buotama',
        cardImg: 'images/Буотама.webp',
        nameKey: 'chuchuna_buotama_name',
        descKey: 'chuchuna_buotama_desc',
        gallery: {
            main: 'images/Буотама.webp',
        },
        blocks: [
            { title: ('tour_desc_label'), content: ('chuchuna_buotama_desc_full') },
            { title: ('tour_highlight_label'), content: ('chuchuna_buotama_highlight') },
            { title: ('tour_detail_label'), content: ('chuchuna_buotama_details') },
            { title: ('tour_footnote_label'), content: ('chuchuna_buotama_footnote') },
            { title: ('tour_conditions_label'), content: ('chuchuna_buotama_conditions') },
            { title: ('tour_contact'), content: ('chuchuna_buotama_contact') },
        ]
    },
    {
        id: 'tour-chuchuna-winter',
        cardImg: 'images/Зимние ЛС.webp',
        nameKey: 'chuchuna_winter_name',
        descKey: 'chuchuna_winter_desc',
        gallery: {
            main: 'images/Зимние ЛС.webp',
        },
        blocks: [
            { title: ('tour_detail_label'), content: ('chuchuna_winter_details') },
            { title: ('tour_date_label'), content: ('chuchuna_winter_date') },
            { title: ('tour_price'), content: ('chuchuna_winter_price') },
            { title: ('tour_contact'), content: ('chuchuna_winter_contact') },
        ]
    },
    {
        id: 'tour-chuchuna-golden',
        cardImg: 'images/Золотын скалы.webp',
        nameKey: 'chuchuna_golden_name',
        descKey: 'chuchuna_golden_desc',
        gallery: {
            main: 'images/Золотын скалы.webp',
        },
        blocks: [
            { title: ('tour_highlight_label'), content: ('chuchuna_golden_highlight') },
            { title: ('tour_detail_label'), content: ('chuchuna_golden_details') },
            { title: ('tour_price'), content: ('chuchuna_golden_price') },
            { title: ('tour_contact'), content: ('chuchuna_golden_contact') },
        ]
    },
    {
        id: 'tour-chuchuna-cruise',
        cardImg: 'images/Круиз 7 дней.webp',
        nameKey: 'chuchuna_cruise_name',
        descKey: 'chuchuna_cruise_desc',
        gallery: {
            main: 'images/Круиз 7 дней.webp',
        },
        blocks: [
            { title: ('tour_detail_label'), content: ('chuchuna_cruise_details') },
            { title: ('tour_price'), content: ('chuchuna_cruise_price') },
            { title: ('tour_contact'), content: ('chuchuna_cruise_contact') },
        ]
    },
    {
        id: 'tour-chuchuna-keteme',
        cardImg: 'images/кэтэмэ.webp',
        nameKey: 'chuchuna_keteme_name',
        descKey: 'chuchuna_keteme_desc',
        gallery: {
            main: 'images/кэтэмэ.webp',
        },
        blocks: [
            { title: ('tour_desc_label'), content: ('chuchuna_keteme_desc_full') },
            { title: ('tour_highlight_label'), content: ('chuchuna_keteme_highlight') },
            { title: ('tour_detail_label'), content: ('chuchuna_keteme_details') },
            { title: ('tour_price'), content: ('chuchuna_keteme_price') },
            { title: ('tour_contact'), content: ('chuchuna_keteme_contact') },
        ]
    },
    {
        id: 'tour-chuchuna-lenapaint',
        cardImg: 'images/с наскальными рисунками.webp',
        nameKey: 'chuchuna_lenapaint_name',
        descKey: 'chuchuna_lenapaint_desc',
        gallery: {
            main: 'images/с наскальными рисунками.webp',
        },
        blocks: [
            { title: ('tour_desc_label'), content: ('chuchuna_lenapaint_desc_full') },
            { title: ('tour_highlight_label'), content: ('chuchuna_lenapaint_highlight') },
            { title: ('tour_detail_label'), content: ('chuchuna_lenapaint_details') },
            { title: ('tour_date_label'), content: ('chuchuna_lenapaint_date') },
            { title: ('tour_price'), content: ('chuchuna_lenapaint_price') },
            { title: ('tour_contact'), content: ('chuchuna_lenapaint_contact') },
        ]
    },
    {
        id: 'tour-chuchuna-tukulan',
        cardImg: 'images/Тукулан.webp',
        nameKey: 'chuchuna_tukulan_name',
        descKey: 'chuchuna_tukulan_desc',
        gallery: {
            main: 'images/Тукулан.webp',
        },
        blocks: [
            { title: ('tour_desc_label'), content: ('chuchuna_tukulan_desc_full') },
            { title: ('tour_highlight_label'), content: ('chuchuna_tukulan_highlight') },
            { title: ('tour_detail_label'), content: ('chuchuna_tukulan_details') },
            { title: ('tour_contact'), content: ('chuchuna_tukulan_contact') },
        ]
    },
    {
        id: 'tour-lenaturflot-sinsk',
        cardImg: 'images/Синские столбы ЛТФ.webp',
        nameKey: 'lenaturflot_sinsk_name',
        descKey: 'lenaturflot_sinsk_desc',
        gallery: {
            main: 'images/Синские столбы ЛТФ.webp',
        },
        blocks: [
            { title: ('tour_desc_label'), content: ('lenaturflot_sinsk_desc_full') },
            { title: ('tour_plan'), content: ('lenaturflot_sinsk_plan') },
            { title: ('tour_contact'), content: ('lenaturflot_sinsk_contact') },
        ]
    },
    {
        id: 'tour-yakutiatripp-buotama',
        cardImg: 'images/буотама Якутия трип.webp',
        nameKey: 'yakutiatripp_buotama_name',
        descKey: 'yakutiatripp_buotama_desc',
        gallery: {
            main: 'images/буотама Якутия трип.webp',
        },
        blocks: [
            { title: ('tour_desc_label'), content: ('yakutiatripp_buotama_desc_full') },
            { title: ('tour_plan'), content: ('yakutiatripp_buotama_plan') },
            { title: ('tour_price'), content: ('yakutiatripp_buotama_price') },
            { title: ('tour_contact'), content: ('yakutiatripp_buotama_contact') },
        ]
    },
    {
        id: 'tour-lenatour-lena-pillar',
        cardImg: 'images/IMG_9617.jpg',
        nameKey: 'lenatour_lena_pillar_name',
        descKey: 'lenatour_lena_pillar_desc',
        gallery: {
            main: 'images/IMG_9617.jpg',
        },
        blocks: [
            { title: ('tour_desc_label'), content: ('lenatour_lena_pillar_desc_full') },
            { title: ('tour_plan'), content: ('lenatour_lena_pillar_plan') },
            { title: ('tour_detail_label'), content: ('lenatour_lena_pillar_details') },
            { title: ('tour_contact'), content: ('lenatour_lena_pillar_contact') },
        ]
    },
    {
        id: 'tour-lenatour-sinsk-pillar',
        cardImg: 'images/ca5ca5a8-c6fa-42ec-a.jpg',
        nameKey: 'lenatour_sinsk_pillar_name',
        descKey: 'lenatour_sinsk_pillar_desc',
        gallery: {
            main: 'images/ca5ca5a8-c6fa-42ec-a.jpg',
        },
        blocks: [
            { title: ('tour_desc_label'), content: ('lenatour_sinsk_pillar_desc_full') },
            { title: ('tour_plan'), content: ('lenatour_sinsk_pillar_plan') },
            { title: ('tour_price'), content: ('lenatour_sinsk_pillar_price') },
            { title: ('tour_contact'), content: ('lenatour_sinsk_pillar_contact') },
        ]
    },
    {
        id: 'tour-lenatour-fishing',
        cardImg: 'images/podlednaya-rybalka-l.jpg',
        nameKey: 'lenatour_fishing_name',
        descKey: 'lenatour_fishing_desc',
        gallery: {
            main: 'images/podlednaya-rybalka-l.jpg',
        },
        blocks: [
            { title: ('tour_desc_label'), content: ('lenatour_fishing_desc_full') },
            { title: ('tour_plan'), content: ('lenatour_fishing_plan') },
            { title: ('tour_price'), content: ('lenatour_fishing_price') },
            { title: ('tour_contact'), content: ('lenatour_fishing_contact') },
        ]
    },
    {
        id: 'tour-lenatour-waterfall',
        cardImg: 'images/водопад.jpg',
        nameKey: 'lenatour_waterfall_name',
        descKey: 'lenatour_waterfall_desc',
        gallery: {
            main: 'images/водопад.jpg',
        },
        blocks: [
            { title: ('tour_desc_label'), content: ('lenatour_waterfall_desc_full') },
            { title: ('tour_plan'), content: ('lenatour_waterfall_plan') },
            { title: ('tour_price'), content: ('lenatour_waterfall_price') },
            { title: ('tour_contact'), content: ('lenatour_waterfall_contact') },
        ]
    },
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

    renderDetailPage({
        title: t(item.nameKey),
        mainImg: item.gallery.main,
        thumbs: item.gallery.thumbs,
        blocks: item.blocks,
        backTo: 'tours',
        backLabelKey: 'back_btn'
    });
}