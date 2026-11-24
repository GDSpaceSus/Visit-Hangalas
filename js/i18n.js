import { translations } from './translations.js';

let currentLang = 'ru';

export function t(key) {
    return translations[key]?.[currentLang] ?? key;
}

export function getLang() {
    return currentLang;
}

export function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'sah' ? 'ru' : lang;
    localStorage.setItem('site_lang', lang);
    document.querySelectorAll('.lang-btn').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.lang === lang)
    );
    updateNavigation();
}

export function initLanguage() {
    const saved = localStorage.getItem('site_lang');
    if (saved && ['ru', 'en', 'sah'].includes(saved)) currentLang = saved;
    document.querySelectorAll('.lang-btn').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.lang === currentLang)
    );
}

export function updateNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const key = 'nav_' + btn.dataset.page;
        if (translations[key]) btn.textContent = t(key);
    });
}