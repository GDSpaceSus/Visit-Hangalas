import { t } from '../i18n.js';
import { initSlider } from '../components/slider.js';

export function renderAudioPage() {
    const html = `
    <div class="page-container">
        <section class="audio-section">
        <h1 class="page-title">${t('audio-guide')}</h1>
        <p class="page-description">${t('audio_subtitle')}</p>
            <div class="intro-block">
                <p style="text-align:center"><picture>
                <a href="https://www.izi.travel/ru/0abe-istoriya-na-kazhdom-shagu-peshekhodnyy-tur-po-pokrovsku/ru" target="_blank" rel="noopener noreferrer"><img src="images/Аудиогид Покровск.png" alt="покровск-аудиогид" style="max-width:100%;height:auto;"></a>
                </picture></p>
                <p style="text-align:center"><b>${t('audio-guide-pokrovsk')}</b></p>

                <p style="text-align:center"><picture>
                <a href="https://www.izi.travel/ru/0bfb-mesto-sily-lenskie-stolby-chast-2-ekotropa/ru" target="_blank" rel="noopener noreferrer"><img src="images/Аудиогид Ленские столбы  (1).png" alt="ленские-столбы-аудиогид" style="max-width:100%;height:auto;"></a>
                </picture></p>
                <p style="text-align:center"><b>${t('audio-guide-lena-pillars')}</b></p>

                <p style="text-align:center"><picture>
                <a href="https://www.izi.travel/ru/0bfb-mesto-sily-lenskie-stolby-chast-2-ekotropa/ru" target="_blank" rel="noopener noreferrer"><img src="images/сердце.jpg" alt="сердце-аудиогид" style="max-width:100%;height:auto;"></a>
                </picture></p>
                <p style="text-align:center"><b>${t('audio-guide-industrial')}</b></p>
            </div>
        </section>
    </div>
    `;
    document.getElementById('main-content').innerHTML = html;
    initSlider();
}