import { onNavigate } from './navigation.js';
import { updateNavigation } from './i18n.js';

import { renderHomePage } from './pages/home.js';
import { renderDistrictPage } from './pages/district.js';
import {
    renderAttractionsPage,
    renderAttrLenaPillarsPage,
    renderAttrBuluusPage,
    renderAttrZooPage,
    renderAttrKuruluurPage,
    renderAttrTukulansPage,
    renderAttrKullatyPage,
    renderAttrBisonPage
} from './pages/attractions.js';
import {
    renderToursPage,
    renderLenaTourPage,
    renderInYakutiaPage
} from './pages/tours.js';

import { renderStayPage, renderStayDetail } from './pages/stay.js';
import { renderEatPage, renderEatDetail } from './pages/eat.js';
import { renderSeePage, renderSeeDetail } from './pages/see.js';

import { renderMapPage } from './pages/map.js';
import { renderContactsPage } from './pages/contacts.js';

const pagesData = {
    home: renderHomePage,
    district: renderDistrictPage,
    attractions: renderAttractionsPage,
    'attr-lena-pillars': renderAttrLenaPillarsPage,
    'attr-buluus': renderAttrBuluusPage,
    'attr-zoo': renderAttrZooPage,
    'attr-kuruluur': renderAttrKuruluurPage,
    'attr-tukulans': renderAttrTukulansPage,
    'attr-kullaty': renderAttrKullatyPage,
    'attr-bison': renderAttrBisonPage,
    tours: renderToursPage,
    'lena-tour': renderLenaTourPage,
    'inyakutia': renderInYakutiaPage,

    stay: renderStayPage,
    'stay-naraada': () => renderStayDetail('stay-naraada'),
    'stay-lena-pillars': () => renderStayDetail('stay-lena-pillars'),

    eat: renderEatPage,
    'eat-orto-doidu': () => renderEatDetail('eat-orto-doidu'),
    'eat-raimuss': () => renderEatDetail('eat-raimuss'),
    'eat-ramen': () => renderEatDetail('eat-ramen'),

    see: renderSeePage,
    'see-museum-pokrovsk': () => renderSeeDetail('see-museum-pokrovsk'),
    'see-lena-park': () => renderSeeDetail('see-lena-park'),
    'see-orto-doidu': () => renderSeeDetail('see-orto-doidu'),
    'see-ordzhonikidze': () => renderSeeDetail('see-ordzhonikidze'),
    'see-elanka': () => renderSeeDetail('see-elanka'),
    'see-nikolaev': () => renderSeeDetail('see-nikolaev'),
    'see-oktemtsy': () => renderSeeDetail('see-oktemtsy'),
    'see-ulakhan-an': () => renderSeeDetail('see-ulakhan-an'),
    'see-danilov': () => renderSeeDetail('see-danilov'),

    map: renderMapPage,
    contacts: renderContactsPage
};

onNavigate(pageId => {
    const render = pagesData[pageId];
    if (!render) return;

    render();

    document.querySelectorAll('.nav-btn').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.page === pageId)
    );

    updateNavigation();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const navLinks = document.getElementById('navLinks');
    if (navLinks && navLinks.classList.contains('show')) navLinks.classList.remove('show');
});