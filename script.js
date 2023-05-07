const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    //opera pelo mouse e teclado
    mousewheel: true,
    keyboard: true
});

// Scroll Reveal 
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 800,
    reset: true
});

sr.reveal(
`#home img, #home .text,
#about img, #about .text,
#services img, #services .text,
#testimonials img, #testimonials .text,
#contact img, #contact .text,
footer .brand, footer .social`
, { interval: 100});

/* ALTERA O HEADER QUANDO SCROLL */
function header() {
    const header = document.querySelector('#header');
    const nav = header.offsetHeight;
    if(window.scrollY >= nav) {

        header.classList.add('scroll')

    } else {
        header.classList.remove('scroll')

    }
}

/* Voltar ao topo*/
function voltarAoTopo () {
    const voltarAoTopo = document.querySelector('.topo')
    if(window.scrollY >= 560) {
        voltarAoTopo.classList.add('show')
    } else {
        voltarAoTopo.classList.remove('show')
    }
}

/*EXECUTA FUNÇÕES QUANDO SCROLL*/
window.addEventListenet('scroll', function() {
    header()
    voltarAoTopo()
})





