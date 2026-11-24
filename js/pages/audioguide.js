import { t } from '../i18n.js';
import { initSlider } from '../components/slider.js';

export function renderAudioPage() {
    const html = `
    <div class="page-container">
        <section class="audio-section">
        <h1 class="page-title">${t('audio-guide')}</h1>
            <div class="intro-block">
                <p style="text-align:center"><picture>
                <source srcset="images/Аудиогид Покровск.png">
                <img src="images/Аудиогид Покровск.png" alt="cg-16" style="max-width:100%;height:auto;">
                </picture></p>
                <p style="text-align:center"><b>${t('audio-guide-pokrovsk')}</b></p>

                <p style="text-align:center"><picture>
                <img src="images/Аудиогид Ленские столбы  (1).png" alt="cg-16" style="max-width:100%;height:auto;">
                </picture></p>
                <p style="text-align:center"><b>${t('audio-guide-lena-pillars')}</b></p>

                <p style="text-align:center"><picture>
                <img src="images/сердце.png" alt="cg-16" style="max-width:100%;height:auto;">
                </picture></p>
                <p style="text-align:center"><b>${t('audio-guide-industrial')}</b></p>
            </div>
        </section>
    </div>
    `;
    document.getElementById('main-content').innerHTML = html;
    initSlider();
}