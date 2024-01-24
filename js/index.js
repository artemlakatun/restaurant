import calc from'./modules/calc';
import forms from'./modules/forms';
import cards from'./modules/cards';
import modal from'./modules/modal';
import slider from'./modules/slider';
import tabs from'./modules/tabs';
import timer from'./modules/timer';
import {openModal} from './modules/modal'

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    calc();
    forms('form', modalTimerId);
    cards();
    modal('[data-modal]', '.modal', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    });
    tabs('.tab-header__item', '.tab-content', '.tab-header__items', 'tab-header__item_active');
    timer('.timer', '2024-06-11');
});
