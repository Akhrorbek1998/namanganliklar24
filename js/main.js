const elModal = document.querySelector('.modal');
const elCloseButton = document.querySelector('.js-close-button');
const elSiteHeader = document.querySelector('.sayt-header');
const elOpenHeaderButton = elSiteHeader.querySelector('.js-open-button');


if (elOpenHeaderButton) {
  elOpenHeaderButton.addEventListener('click', function () {
    elSiteHeader.classList.toggle('site-header-open');
  })
}

if (elCloseButton) {
elCloseButton.addEventListener('click', function () {
  elModal.classList.remove('modal-open');
});
}

setTimeout(function () {
  elModal.classList.add('modal-open')
}, 3000);