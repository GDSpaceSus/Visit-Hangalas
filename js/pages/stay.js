import { t } from '../i18n.js';
import { renderDetailPage, card, bindCards } from '../components/detail-page.js';

const STAYS = [
    {
        id: 'stay-naraada',
        cardImg: 'images/image_23.webp',
        nameKey: 'stay_naraada',
        descKey: 'stay_naraada_desc',
        priceKey: 'stay_naraada_price',
        gallery: {
            main: 'images/image_23.webp',
            thumbs: []
        },
        blocks: [
            { title: `📝 ${t('attr_desc_label')}`, content: 'Уютные коттеджи на берегу Лены. Идеально для семейного отдыха и небольших групп. Рядом — рыбалка, прогулки на лодках и вид на реку.' },
            { title: `📍 ${t('attr_address_label')}`, content: 'Хангаласский улус, туристическая база «Naraada Village», левый берег Лены.' },
            { title: '🛏️ Услуги', list: [
                'Двух- и трёхместные коттеджи',
                'Баня на дровах',
                'Мангальная зона',
                'Прокат лодок и рыболовных снастей',
                'Питание по запросу'
            ]},
            { title: '📞 Контакты', content: '+7 (41144) 2-96-42 · naraada.ru' },
            { title: '💰 Стоимость', content: 'от 13 470 ₽ за сутки' }
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
            thumbs: []
        },
        blocks: [
            { title: `📝 ${t('attr_desc_label')}`, content: 'Гостевые дома в непосредственной близости от природного парка «Ленские столбы». Отличная база для однодневных и многодневных экскурсий к скалам.' },
            { title: `📍 ${t('attr_address_label')}`, content: 'Хангаласский улус, природный парк «Ленские столбы».' },
            { title: '🛏️ Услуги', list: [
                'Гостевые дома на 4–8 человек',
                'Организация экскурсий к Ленским столбам',
                'Трёхразовое питание',
                'Трансфер из Покровска / Якутска'
            ]},
            { title: '📞 Контакты', content: '+7 (4112) 31-86-21 · lena-pillars.ru' },
            { title: '💰 Стоимость', content: 'от 10 000 ₽ за сутки' }
        ]
    }
];

export function renderStayPage() {
    const cards = STAYS.map(item =>
        card({
            id: item.id,
            img: item.cardImg,
            name: t(item.nameKey),
            desc: t(item.descKey),
            extra: `💰 ${t(item.priceKey)}`
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