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
            { title: `${t('attr_desc_label')}`, content: 'В 60 километрах расположен Диринг-Юрях –в 80-е годы XX века во время раскопок здесь обнаружили следы древнейшего человека, проживающего на этой земле около 2 000 000 лет назад. <br>Это место, где должен побывать каждый, чтобы открыть для себя таинство зарождения жизни на Земле и прикоснуться к жизненному укладу и мировоззрению предков. Место, где люди заряжаются энергией и вдыхают в себя новую жизнь.' },
            { title: `${t('attr_address_label')}`, content: 'П. Мохсоголлох, ул. Агрохимическая, 6' },
            { title: `${t('Путь')}`, content: 'Из Аэропорта Якутска ≈ 1 час 35 минут, такси, прямо до территории комплекса, личный автомобиль удобный маршрут по асфальтированной дороге.' },
            { title: 'Услуги', list: [
                'Цены зависят от типа жилья и даты (при раннем бронировании выходит дешевле, в высокий сезон — дороже',
                'Ночь в мини-коттедже (для двоих) — от 13 500 рублей',
                'Ночь в доме для двоих с видом на реку — от 22 000 рублей',
                'Ночь в большом доме (до 6 гостей) — от 26 700 рублей',
                'Ночь в доме для компаний (до 8 гостей) — от 49 500 рублей'
            ]},
            { title: 'Контакты', content: '+7 (411) 442-96-42 · info@naraada.ru · naraada.ru' }
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
            { title: `${t('attr_desc_label')}`, content: 'Гостевые дома в непосредственной близости от природного парка «Ленские столбы». Отличная база для однодневных и многодневных экскурсий к скалам.' },
            { title: `${t('attr_address_label')}`, content: 'Хангаласский улус, природный парк «Ленские столбы».' },
            { title: '🛏️ Услуги', list: [
                'Гостевые дома на 4–8 человек',
                'Организация экскурсий к Ленским столбам',
                'Трёхразовое питание',
                'Трансфер из Покровска / Якутска'
            ]},
            { title: 'Контакты', content: '+7 (4112) 31-86-21 · lena-pillars.ru' },
            { title: 'Стоимость', content: 'от 10 000 ₽ за сутки' }
        ]
    },
    {
        id: 'stay-yamshitsk',
        cardImg: 'images/yamshitsk_1.webp',
        nameKey: 'stay_yamshitsk',
        descKey: 'stay_yamshitsk_desc',
        priceKey: 'stay_yamshitsk_price',
        gallery: {
            main: 'images/yamshitsk_1.webp',
            thumbs: ['images/yamshitsk_1.webp', 'images/yamshitsk_2.webp', 'images/yamshitsk_3.webp', 'images/yamshitsk_4.webp']
        },
        blocks: [
            { title: `${t('attr_desc_label')}`, content: '«Ямщицкое подворье» — это этнографический туристический комплекс в селе Синск (Хангаласский улус, Республика Саха (Якутия)).' },
            { title: `${t('attr_address_label')}`, content: 'с. Синск, Заречная ул., 5.' },
            { title: 'Цены', list: [
                'от 1 000 ₽/сутки с человека (без питания)',
                'от 2 300 ₽/сутки (с питанием)',
                'баня — от 3 000 ₽ за группу'
            ]},
            { title: 'Контакты', content: '+7 968 161‑29‑99' },
            { title: 'Стоимость', content: 'Экскурсия: 300–500 ₽' }
        ]
    },
    {
        id: '',
        cardImg: 'images/',
        nameKey: 'stay_',
        descKey: 'stay__desc',
        priceKey: 'stay__price',
        gallery: {
            main: 'images/',
            thumbs: []
        },
        blocks: [
            { title: `${t('attr_desc_label')}`, content: '' },
            { title: `${t('attr_address_label')}`, content: '' },
            { title: 'Услуги', list: [
                ''
            ]},
            { title: 'Контакты', content: '' },
            { title: 'Стоимость', content: '' }
        ]
    },
    {
        id: '',
        cardImg: 'images/',
        nameKey: 'stay_',
        descKey: 'stay__desc',
        priceKey: 'stay__price',
        gallery: {
            main: 'images/',
            thumbs: []
        },
        blocks: [
            { title: `${t('attr_desc_label')}`, content: '' },
            { title: `${t('attr_address_label')}`, content: '' },
            { title: 'Услуги', list: [
                ''
            ]},
            { title: 'Контакты', content: '' },
            { title: 'Стоимость', content: '' }
        ]
    },
    {
        id: '',
        cardImg: 'images/',
        nameKey: 'stay_',
        descKey: 'stay__desc',
        priceKey: 'stay__price',
        gallery: {
            main: 'images/',
            thumbs: []
        },
        blocks: [
            { title: `${t('attr_desc_label')}`, content: '' },
            { title: `${t('attr_address_label')}`, content: '' },
            { title: 'Услуги', list: [
                ''
            ]},
            { title: 'Контакты', content: '' },
            { title: 'Стоимость', content: '' }
        ]
    },
    {
        id: '',
        cardImg: 'images/',
        nameKey: 'stay_',
        descKey: 'stay__desc',
        priceKey: 'stay__price',
        gallery: {
            main: 'images/',
            thumbs: []
        },
        blocks: [
            { title: `${t('attr_desc_label')}`, content: '' },
            { title: `${t('attr_address_label')}`, content: '' },
            { title: 'Услуги', list: [
                ''
            ]},
            { title: 'Контакты', content: '' },
            { title: 'Стоимость', content: '' }
        ]
    },
    {
        id: '',
        cardImg: 'images/',
        nameKey: 'stay_',
        descKey: 'stay__desc',
        priceKey: 'stay__price',
        gallery: {
            main: 'images/',
            thumbs: []
        },
        blocks: [
            { title: `${t('attr_desc_label')}`, content: '' },
            { title: `${t('attr_address_label')}`, content: '' },
            { title: 'Услуги', list: [
                ''
            ]},
            { title: 'Контакты', content: '' },
            { title: 'Стоимость', content: '' }
        ]
    },
    {
        id: '',
        cardImg: 'images/',
        nameKey: 'stay_',
        descKey: 'stay__desc',
        priceKey: 'stay__price',
        gallery: {
            main: 'images/',
            thumbs: []
        },
        blocks: [
            { title: `${t('attr_desc_label')}`, content: '' },
            { title: `${t('attr_address_label')}`, content: '' },
            { title: 'Услуги', list: [
                ''
            ]},
            { title: 'Контакты', content: '' },
            { title: 'Стоимость', content: '' }
        ]
    },
    {
        id: '',
        cardImg: 'images/',
        nameKey: 'stay_',
        descKey: 'stay__desc',
        priceKey: 'stay__price',
        gallery: {
            main: 'images/',
            thumbs: []
        },
        blocks: [
            { title: `${t('attr_desc_label')}`, content: '' },
            { title: `${t('attr_address_label')}`, content: '' },
            { title: 'Услуги', list: [
                ''
            ]},
            { title: 'Контакты', content: '' },
            { title: 'Стоимость', content: '' }
        ]
    },
    {
        id: '',
        cardImg: 'images/',
        nameKey: 'stay_',
        descKey: 'stay__desc',
        priceKey: 'stay__price',
        gallery: {
            main: 'images/',
            thumbs: []
        },
        blocks: [
            { title: `${t('attr_desc_label')}`, content: '' },
            { title: `${t('attr_address_label')}`, content: '' },
            { title: 'Услуги', list: [
                ''
            ]},
            { title: 'Контакты', content: '' },
            { title: 'Стоимость', content: '' }
        ]
    },
    {
        id: '',
        cardImg: 'images/',
        nameKey: 'stay_',
        descKey: 'stay__desc',
        priceKey: 'stay__price',
        gallery: {
            main: 'images/',
            thumbs: []
        },
        blocks: [
            { title: `${t('attr_desc_label')}`, content: '' },
            { title: `${t('attr_address_label')}`, content: '' },
            { title: 'Услуги', list: [
                ''
            ]},
            { title: 'Контакты', content: '' },
            { title: 'Стоимость', content: '' }
        ]
    },
    {
        id: '',
        cardImg: 'images/',
        nameKey: 'stay_',
        descKey: 'stay__desc',
        priceKey: 'stay__price',
        gallery: {
            main: 'images/',
            thumbs: []
        },
        blocks: [
            { title: `${t('attr_desc_label')}`, content: '' },
            { title: `${t('attr_address_label')}`, content: '' },
            { title: 'Услуги', list: [
                ''
            ]},
            { title: 'Контакты', content: '' },
            { title: 'Стоимость', content: '' }
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