import { t } from '../i18n.js';
import { initSlider } from '../components/slider.js';

export function renderHomePage() {
    const html = `
        <section class="hero-section">
            <div class="slider-container">
                <div class="slider" id="slider">
                    <div class="slide active"><img src="images/94532354_264136924740263_7315574104455325494_n-1-896x640-1.jpg" alt="Хангаласский Район"></div>
                    <div class="slide"><img src="images/i.jpeg" alt="Ленские столбы"></div>
                    <div class="slide"><img src="images/17A5308-Razreshenie-rabochego-stola.jpg" alt="Ысыах"></div>
                    <div class="slide"><img src="images/image_4.jpg" alt="Ханалас"></div>
                </div>
                <button class="slider-btn prev">❮</button>
                <button class="slider-btn next">❯</button>
                <div class="slider-dots" id="sliderDots">
                    <span class="dot active"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
            <div class="hero-info">
                <div class="info-card">
                    <h2>${t('home_welcome')}</h2>
                    <p>${t('home_desc1')}</p>
                    <p>${t('home_desc2')}</p>
                    <div class="info-features">
                        <div class="feature"><span class="feature-icon">❖</span></div>
                        <div class="feature"><span class="feature-icon">❖</span></div>
                        <div class="feature"><span class="feature-icon">❖</span></div>
                        <div class="feature"><span class="feature-icon">❖</span></div>
                        <div class="feature"><span class="feature-icon">❖</span></div>
                        <div class="feature"><span class="feature-icon">❖</span></div>
                        <div class="feature"><span class="feature-icon">❖</span></div>
                    </div>
                </div>
            </div>
        </section>
    `;
    document.getElementById('main-content').innerHTML = html;
    initSlider();
}