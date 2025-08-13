export default function initModal(){
    const abrirModal = document.querySelector('[data-modal="abrirModal"]')
    const modal = document.querySelector('[data-modal="containerModal"]')
    const fecharModal = document.querySelector('[data-modal="fecharModal"]')

    abrirModal.addEventListener('click', abrir);
    fecharModal.addEventListener('click', fechar);
    modal.addEventListener('click', fecharFora);

    function abrir(){
        modal.classList.add('ativo');
    }

    function fechar(){
        modal.classList.remove('ativo');
    }

    function fecharFora(e){
        if(e.target === this){
            fechar(e);
        }
    }
}