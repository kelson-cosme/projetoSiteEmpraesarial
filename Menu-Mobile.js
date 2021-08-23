const menu = document.getElementById("menu");
const navegacao = document.getElementById("navegacao");
const fechar = document.getElementById("fechar");


function clicar(){
    if(navegacao.className == "navegacao"){
        navegacao.classList.add("active")

    } else if(fechar.className == "fechar"){
        navegacao.classList.remove("active")
    }
}

menu.addEventListener("click", clicar)
fechar.addEventListener("click", clicar)