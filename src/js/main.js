import modal from './modules/modal';
import link from './modules/link';
import slider from './modules/slider';

window.addEventListener("DOMContentLoaded", () => {

    modal('.trigger', '.popup', '.popup__close');

    link('.link');

    slider('.next', '.prev', '.eighthblock__slider-block');
});