const input = document.getElementById("pesq-filme")
const botao = document.getElementById("pesquisarFilme")
const filmes = document.querySelectorAll(".filme")



function filtrarFilmes (){

    const valorInput = input.value.toLowerCase().trim()

    if(valorInput === ""){
        filmes.forEach(filme =>{
            filme.classList.add("mostrar")
            filme.classList.remove("remover")
        })

        return;
    }



    filmes.forEach(filme =>{

        const nomeFilme = filme.querySelector(".filme-nome").textContent.toLowerCase()
        const generoFilme = filme.querySelector(".filme-genero").textContent.toLowerCase()


        if(nomeFilme.includes(valorInput) || generoFilme.includes(valorInput)) {

            filme.classList.add("mostrar")
            filme.classList.remove("remover")
        }
        else {
            filme.classList.add("remover")
            filme.classList.remove("mostrar")
        }
    })
}


botao.addEventListener("click", filtrarFilmes)



// Opcional: busca em tempo real enquanto digita, sem botão
// input.addEventListener("keyup", filtrarFilmes)