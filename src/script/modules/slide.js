export default function initSlide(){
    let slideAtivo = 0;
    const slides = document.querySelector('[data-slides="slides"]');
    const dots = document.querySelectorAll('[data-dots="dots"] div');
    const prevBtn = document.querySelector('.arrow.preview');
    const nextBtn = document.querySelector('.arrow.next');

    prevBtn.addEventListener('click', () => mudarSlide(-1));
    nextBtn.addEventListener('click', () => mudarSlide(1));

    function updateSlide(){
        slides.style.transform = `translateX(-${mudarSlide * 100})`;
        dots.forEach((itemDot, indice)=>{
            itemDot.classList.toggle('ativo', indice === slideAtivo);
        })
    }

    function mudarSlide(direction){
        const total = document.querySelectorAll('[data-slides="slides"] div').length; //pega todas as divs
        // Lógica do cálculo de uma variável acumuladora
        slideAtivo = (slideAtivo + direction + total) % total;
        updateSlide();
    }

}