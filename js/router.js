import { onNavigate } from './navigation.js';
import { updateNavigation } from './i18n.js';

import { renderHomePage } from './pages/home.js';
import { renderDistrictPage } from './pages/district.js';

import { renderAttractionsPage, renderAttractionDetail } from './pages/attractions.js';

import { renderToursPage, renderTourDetail } from './pages/tours.js';

import { renderStayPage, renderStayDetail } from './pages/stay.js';
import { renderEatPage, renderEatDetail } from './pages/eat.js';
import { renderSeePage, renderSeeDetail } from './pages/see.js';

import { renderMapPage } from './pages/map.js';
import { renderContactsPage } from './pages/contacts.js';
import { renderAudioPage } from './pages/audioguide.js';

const pagesData = {
    home: renderHomePage,
    district: renderDistrictPage,
    map: renderMapPage,
    contacts: renderContactsPage,
    audio: renderAudioPage,

    attractions: renderAttractionsPage,
    'attr-lena-pillars': () => renderAttractionDetail('attr-lena-pillars'),
    'attr-buluus':       () => renderAttractionDetail('attr-buluus'),
    'attr-zoo':          () => renderAttractionDetail('attr-zoo'),
    'attr-kuruluur':     () => renderAttractionDetail('attr-kuruluur'),
    'attr-tukulans':     () => renderAttractionDetail('attr-tukulans'),
    'attr-kullaty':      () => renderAttractionDetail('attr-kullaty'),
    'attr-bison':        () => renderAttractionDetail('attr-bison'),

    tours: renderToursPage,
    'tour-chuchuna-buluus': () => renderTourDetail('tour-chuchuna-buluus'),
    'tour-chuchuna-buotama': () => renderTourDetail('tour-chuchuna-buotama'),
    'tour-chuchuna-winter': () => renderTourDetail('tour-chuchuna-winter'),
    'tour-chuchuna-golden': () => renderTourDetail('tour-chuchuna-golden'),
    'tour-chuchuna-cruise': () => renderTourDetail('tour-chuchuna-cruise'),
    'tour-chuchuna-keteme': () => renderTourDetail('tour-chuchuna-keteme'),
    'tour-chuchuna-lenapaint': () => renderTourDetail('tour-chuchuna-lenapaint'),
    'tour-chuchuna-tukulan': () => renderTourDetail('tour-chuchuna-tukulan'),
    'tour-lenaturflot-sinsk': () => renderTourDetail('tour-lenaturflot-sinsk'),
    'tour-yakutiatripp-buotama': () => renderTourDetail('tour-yakutiatripp-buotama'),
    'tour-lenatour-lena-pillar': () => renderTourDetail('tour-lenatour-lena-pillar'),
    'tour-lenatour-sinsk-pillar': () => renderTourDetail('tour-lenatour-sinsk-pillar'),
    'tour-lenatour-fishing': () => renderTourDetail('tour-lenatour-fishing'),
    'tour-lenatour-waterfall': () => renderTourDetail('tour-lenatour-waterfall'),

    stay: renderStayPage,
    'stay-naraada':       () => renderStayDetail('stay-naraada'),
    'stay-lena-pillars':  () => renderStayDetail('stay-lena-pillars'),
    'stay-orto-doydy':  () => renderStayDetail('stay-orto-doydy'),
    'stay-tukulan':  () => renderStayDetail('stay-tukulan'),
    'stay-deer':  () => renderStayDetail('stay-deer'),
    'stay-legend':  () => renderStayDetail('stay-legend'),
    'stay-victoria':  () => renderStayDetail('stay-victoria'),
    'stay-oktem':  () => renderStayDetail('stay-oktem'),
    'stay-byriver':  () => renderStayDetail('stay-byriver'),
    'stay-riverview':  () => renderStayDetail('stay-riverview'),
    'stay-sterkh':  () => renderStayDetail('stay-sterkh'),
    'stay-tit_aryy':  () => renderStayDetail('stay-tit_aryy'),

    eat: renderEatPage,
    'eat-orto-doidu': () => renderEatDetail('eat-orto-doidu'),
    'eat-raimuss':    () => renderEatDetail('eat-raimuss'),
    'eat-ramen':      () => renderEatDetail('eat-ramen'),

    see: renderSeePage,
    'see-museum-pokrovsk': () => renderSeeDetail('see-museum-pokrovsk'),
    'see-lena-park':       () => renderSeeDetail('see-lena-park'),
    'see-orto-doidu':      () => renderSeeDetail('see-orto-doidu'),
    'see-ordzhonikidze':   () => renderSeeDetail('see-ordzhonikidze'),
    'see-elanka':          () => renderSeeDetail('see-elanka'),
    'see-nikolaev':        () => renderSeeDetail('see-nikolaev'),
    'see-oktemtsy':        () => renderSeeDetail('see-oktemtsy'),
    'see-ulakhan-an':      () => renderSeeDetail('see-ulakhan-an'),
    'see-danilov':         () => renderSeeDetail('see-danilov')
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