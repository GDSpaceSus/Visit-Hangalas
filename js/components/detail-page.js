import { t } from '../i18n.js';
import { navigateTo } from '../navigation.js';

export function renderDetailPage({ title, mainImg, thumbs = [], blocks = [], backTo, backLabelKey }) {
    const thumbsHtml = thumbs.length
        ? `<div class="gallery-thumbs">${thumbs.map(src => `<img src="${src}" alt="">`).join('')}</div>`
        : '';

    const blocksHtml = blocks.map(b => {
        const listHtml = b.list
            ? `<ul>${b.list.map(li => `<li>${li}</li>`).join('')}</ul>`
            : '';
        const contentHtml = b.content ? `<p>${b.content}</p>` : '';
        return `<div class="info-block"><h3>${b.title}</h3>${contentHtml}${listHtml}</div>`;
    }).join('');

    document.getElementById('main-content').innerHTML = `
        <div class="page-container">
            <h1 class="page-title">${title}</h1>
            <div class="attraction-gallery">
                <img src="${mainImg}" class="gallery-main-img" alt="">
                ${thumbsHtml}
            </div>
            ${blocksHtml}
            <button class="back-btn" style="margin-top:2rem;padding:10px 20px;background:#007bff;color:white;border:none;cursor:pointer;border-radius:5px;">
                ${t(backLabelKey)}
            </button>
        </div>`;

    document.querySelectorAll('.gallery-thumbs img').forEach(thumb =>
        thumb.addEventListener('click', function () {
            document.querySelector('.gallery-main-img').src = this.src;
        })
    );

    document.querySelector('.back-btn')?.addEventListener('click', () => navigateTo(backTo));
}

export function card({ id, img, name, desc, extra }) {
    return `
        <div class="card" data-page="${id}" style="cursor:pointer;">
            <img src="${img}" alt="${name}" class="card-img">
            <div class="card-content">
                <h3 class="card-title">${name}</h3>
                <p class="card-text">${desc}</p>
                ${extra ? `<p style="color:#c28a5c;font-weight:500;margin-top:0.8rem;">${extra}</p>` : ''}
                <p class="card-more">${t('card_more')} →</p>
            </div>
        </div>`;
}

export function bindCards() {
    document.querySelectorAll('.card[data-page]').forEach(cardEl => {
        cardEl.addEventListener('click', function () {
            const page = this.getAttribute('data-page');
            if (page) navigateTo(page);
        });
    });
}