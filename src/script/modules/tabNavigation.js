/* 
 - Navegação por Tabs:
 É quando temos um item ou objetos se relacionando entre si,
 fazendo conexão com os seus conteúdos.
 
 Obs: o conteúdo tem que está organizado na mesma ordem
*/
export default function initTab(){
    const tabAnimais = document.querySelectorAll("[data-tab='animais'] li");
    const tabDescription = document.querySelectorAll("[data-tab='description'] section");

    tabAnimais.forEach((itemLi, indice)=>{
        itemLi.addEventListener('click', ()=>{
            ativarTab(indice);
        })
    }) 
    
    function ativarTab(indice){
        tabDescription.forEach((itemSection)=>{
            itemSection.classList.remove("ativo");
        })
        const animation = tabDescription[indice].dataset.anima;
        tabDescription[indice].classList.add("ativo", animation);
    }
        tabDescription[0].classList.add("ativo");
}