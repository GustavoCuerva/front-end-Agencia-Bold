var botao = document.getElementById("btn-menu");
var menu = document.querySelector(".menu-mobile");
var fechar_menu = document.querySelector(".fechar-menu");

function abrir_menu(){
    

    // Trocando Botão
    if (botao.classList.contains("btn-menu")) {
        botao.classList.add("btn-menu-aberto");
        botao.classList.remove("btn-menu");

    }else if (botao.classList.contains("btn-menu-aberto")) {
        setTimeout(function(){
            botao.classList.add("btn-menu");
            botao.classList.remove("btn-menu-aberto");
        },300);
    }

    // Mostrando menu
    if (menu.classList.contains("ocultar")){ 
        menu.classList.remove("ocultar");
    }else{
        menu.classList.add("ocultar");
    }

    if (fechar_menu.style.display == 'none') {
        fechar_menu.style.display = "block";
    }else{
        fechar_menu.style.display = 'none';
    }
}

botao.addEventListener("click", ()=>{
    abrir_menu();
});

fechar_menu.addEventListener("click", ()=>{
    abrir_menu();
});