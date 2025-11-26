const input = document.getElementById("pesq-jogo")
const botao = document.getElementById("pesquisarJogo")
const jogos = document.querySelectorAll(".jogo")



function filtrarJogos(){

    const valorInput = input.value.toLowerCase().trim()

    if(valorInput === ""){
        jogos.forEach(jogo =>{
            jogo.classList.add("mostrar")
            jogo.classList.remove("remover")
        })
        return;
    }


    jogos.forEach(jogo =>{

        const nomeJogo = jogo.querySelector(".jogo-nome").textContent.toLowerCase()
        const jogoGenero = jogo.querySelector(".jogo-genero").textContent.toLowerCase()
        const jogoPlataforma = jogo.querySelector(".jogo-plataforma").textContent.toLowerCase()


        if(nomeJogo.includes(valorInput) || jogoGenero.includes(valorInput) || jogoPlataforma.includes(valorInput)){

            jogo.classList.add("mostrar")
            jogo.classList.remove("remover")
        }
        else{

            jogo.classList.remove("mostrar")
            jogo.classList.add("remover")
        }
    })
}


botao.addEventListener("click", filtrarJogos)


// Opcional: busca em tempo real enquanto digita, sem botão
// input.addEventListener("keyup", filtrarFilmes)