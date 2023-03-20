const scroll = document.querySelector('.footer__button');
const header = document.querySelector('.header');


function scrollToElement(header) {
    if (header) {
        header.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
};

scroll.addEventListener('click', () => scrollToElement(header));




