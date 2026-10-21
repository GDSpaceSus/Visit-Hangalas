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
            { title: `📝 ${t('attr_desc_label')}`, content: 'Ресторан авторской якутской кухни. В меню — блюда из местных продуктов: строганина, жеребятина, кобылье молоко, дикоросы. Интерьер в национальном стиле.' },
            { title: `📍 ${t('attr_address_label')}`, content: 'Покровское шоссе 49 километр, 1' },
            { title: '🕒 Часы работы', content: 'Ежедневно с 8:00 до 23:00' },
            { title: '📞 Контакты', content: '+7-914-2-711-227' },
            { title: '🍴 Кухня', content: 'Авторская якутская' }
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
            { title: `📝 ${t('attr_desc_label')}`, content: 'Кондитерская с домашними десертами, тортами на заказ и свежей выпечкой. Популярное место у местных жителей.' },
            { title: `📍 ${t('attr_address_label')}`, content: 'г. Покровск, ул. Братьев Ксенофонтовых, 23' },
            { title: '🕒 Часы работы', content: 'Пн–Чт 08:30–19:00, Пятница 10:00-20:00, Сб-Вс 11:00–20:00' },
            { title: '📞 Контакты', content: '+7-914-283-50-10' },
            { title: '🍴 Кухня', content: 'Кондитерская' }
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
            { title: `📝 ${t('attr_desc_label')}`, content: 'Корейская кухня: рамен, кимчи, пибимпап, корейские закуски. Быстрое обслуживание, большие порции.' },
            { title: `📍 ${t('attr_address_label')}`, content: 'г. Покровск, ул. Братьев Ксенофонтовых, 23' },
            { title: '🕒 Часы работы', content: 'Ежедневно с 11:00 до 20:00' },
            { title: '📞 Контакты', content: '+7-914-105-25-35' },
            { title: '🍴 Кухня', content: 'Корейская' }
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