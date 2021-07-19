'use strict';

document.body.classList.add('js-enabled');

// Бургер

const menuButton = document.querySelector('.menu-btn')
  , pageHeader = document.querySelector('.page-header')
  , navList = document.querySelector('.nav-list')
  , headerSocialMedia = document.querySelector('.page-header__social-media');

function showHideMenu() {
  navList.classList.toggle('nav-list--close');
  headerSocialMedia.classList.toggle('page-header__social-media--close');
  menuButton.classList.toggle('menu-btn--close');
}

menuButton.addEventListener('click', showHideMenu);

// Показать фильтр catalog.html

const filterButton = document.querySelector('.sorting__button')
  , catalogForm = document.querySelector('.sorting__form');

function showHideForm() {
  catalogForm.classList.toggle('sorting__form--close');
  filterButton.classList.toggle('sorting__button--close');
}

if (document.body.contains(filterButton)) {
  filterButton.addEventListener('click', showHideForm);
}

// Аккордеон

document.querySelectorAll('.expand').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode.parentNode;
    parent.classList.toggle('accordion--active');
    item.classList.toggle('expand--close');
  })
)
