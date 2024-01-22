const tabs = document.querySelectorAll('.tab-header__item'),
    tabsContent = document.querySelectorAll('.tab-content'),
    tabsParent = document.querySelector('.tab-header__items'),

    modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    forms = document.querySelectorAll('form'),
    prevModalDialog = document.querySelector('.modal__dialog'),

    slides = document.querySelectorAll('.offer__slide'),
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'),
    slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    slidesField = document.querySelector('.offer__slider-inner'),
    slider = document.querySelector('.offer__slider');