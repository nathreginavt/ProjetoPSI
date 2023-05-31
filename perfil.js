criaTabela();

function cancelaCadastro() {
    // Pega a referencia ao corpo da tabela
    let tbody = document.querySelector("tbody");
    // Pega a quantidade de linhas contidas no corpo da tabela
    let qtdlinhas = tbody.querySelectorAll("tr");

    // Percorre todas as linhas da tabela
    for (let i = 0; i < qtdlinhas.length; i++) {
        let linha = qtdlinhas[i];
        let celulas = linha.querySelectorAll("td");

        for (let j = 0; j < celulas.length; j++) {
            let celula = celulas[j];
            // Remove as tags <td> de cada linha
            linha.removeChild(celula);
            // Limpa os dados contidos no localStorage
            localStorage.removeItem('dados');
        }
    }
}
window.onload = () => {
    cancelarCadastro = document.getElementById("cancelarCadastro");
    cancelarCadastro.addEventListener("click", cancelaCadastro);
}
