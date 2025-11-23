// Pega o elemento input HTML e coloca em uma variável
const input = document.getElementById("pesq-musica")

// Pega o elemento botão HTML e coloca em uma variável
const botao = document.getElementById("pesquisarMusica")

// Pega todas as músicas através da classe CSS ".musica" e coloca em uma variável composta
const musicas = document.querySelectorAll(".musica")


// Criamos uma função para pesquisar e filtrar músicas
function filtrarMusicas () {

    // Pega o valor do input do usuário na barra de pesquisa (através da variável que criamos), coloca tudo em minúsculo e remove espaços em branco
    const valorInput = input.value.toLowerCase().trim()

    // Verifica se o valor do input é uma string vazia (usuário não digitou nada), caso for, ignora a filtragem e a página volta ao normal
    if(valorInput === "") {
        musicas.forEach(musica => {
           musica.classList.add("mostrar")
           musica.classList.remove("remover")
        })
        return;
    }



    // Através da variável composta "musicas" (onde todas os cards de música estão), pega cada card de música e a analisa individualmente
    musicas.forEach(musica => {

        // Aqui usamos "textContent" invés de "value" (como em um input, ou um select), pois "value" se refere a um valor digitado ou escolhido externamente pelo usuário, na própria página, já "textContent" é para valores definidos internamente no arquivo HTML/CSS (nesse caso, as classes CSS e o elemento HTML que elas referenciam)
        const nomeMusica = musica.querySelector(".musica-nome").textContent.toLowerCase() // Pega o nome da música no card e põe numa variável
        const nomeCantor = musica.querySelector(".musica-cantor").textContent.toLowerCase() // Pega o nome do artista e põe numa variável
        const musicaGenero = musica.querySelector(".musica-genero").textContent.toLowerCase()// Pega o gênero da música e põe numa variável

         
        // "valorInput" representa o que o usuário digitou na barra de pesquisa, aqui verificamos se o que ele digitou confere com o nome da música, artista ou gênero, "includes()" faz com que isso feito mesmo se ele não digitou o nome completo, se o que ele digitou faz parte do valor, já é considerado (ou seja, o usuário pode digitar parte do nome, e não ele todo). Se uma das 3 condições forem atendidas, apenas os cards que possuírem determinado aparecerão
        if(nomeMusica.includes(valorInput) || nomeCantor.includes(valorInput) || musicaGenero.includes(valorInput)) {

            musica.classList.add("mostrar")
            musica.classList.remove("remover")
        }
        else {
            musica.classList.add("remover")
            musica.classList.remove("mostrar")
        }
    })
}

// Cria um evento onde a função só será chamada caso o botão de pesquisar for apertado
botao.addEventListener("click", filtrarMusicas)


// Opcional: busca em tempo real enquanto digita, sem botão
// input.addEventListener("keyup", filtrarMusicas)

