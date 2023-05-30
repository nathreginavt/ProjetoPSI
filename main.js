/*Tela Cadastro*/
function geraLista() {
    /*Informações Animal*/
    document.getElementById("mensagemLista").innerText = "Antes de concluir o cadastro, certifique-se se as informações inseridas estão corretas: ";
    let ul = document.getElementById("lista")
    ul.style.display = "block";
    let primeiroLi_Base = document.querySelector("li")

    let primeiroLi = ul.firstChild
    primeiroLi = document.getElementById("nomePet").value
    document.getElementById("nomePet").disabled = true;

    let segundoLi = primeiroLi_Base.parentElement.children[1]
    segundoLi = document.getElementById("idade").value
    document.getElementById("idade").disabled = true;

    let terceiroLi = primeiroLi_Base.parentElement.children[2]
    terceiroLi = document.getElementById("raca").value
    document.getElementById("raca").disabled = true;

    let l1 = document.getElementById("item1")
    l1.innerText = "Pet: " + primeiroLi
    let l2 = document.getElementById("item2")
    l2.innerText = "Idade: " + segundoLi
    let l3 = document.getElementById("item3")
    l3.innerText = "Raça: " + terceiroLi

    lista.appendChild(l1)
    lista.appendChild(l2)
    lista.appendChild(l3)

    document.getElementById("btn_Editar").disabled = false;
    document.getElementById("btn_salvar").disabled = false;
    document.getElementById("btn_cadastrar").disabled = true;
}

function editarDados() {

    document.getElementById("nomePet").disabled = false;
    document.getElementById("idade").disabled = false;
    document.getElementById("raca").disabled = false;

    document.getElementById("btn_Editar").disabled = true;
    document.getElementById("btn_salvar").disabled = true;
    document.getElementById("btn_cadastrar").disabled = false;
}
/*
function adicionarDados() {
    let nome = document.getElementById("nomePet").value;
    let raca = document.getElementById("raca").value;
    let idade = document.getElementById("idade").value;

    if (nome && raca && idade) {
        let dadosArmazenados = localStorage.getItem('dados')
        let dados = [];

        if (dadosArmazenados) {
            dados = JSON.parse(dadosArmazenados);
        }
        dados.push({ nome: nome, idade: idade, raca: raca })
        localStorage.setItem('dados', JSON.stringify(dados))

        document.getElementById("nomePet").value = "";
        criarTabela();
    }
    else {
        alert("Por favor, preencha todos os campos");
    }
}

function criarTabela(){
    let dadosArmazenados = localStorage.getItem('dados');
    let dados = JSON.parse(dadosArmazenados);

    let tabela = document.getElementById("tabelaPerfil");
    tabela.innerHTML = "";
    let cabecalho = "<tr><th>Nome</th><th>Raça</th><th>Idade</th></tr>";

    let linhas = "";
    for(let i = 0; i < dados.length; i++){
        linhas += "<tr><td>" + dados[i].nome + "</td><td>" + dados[i].raca + "</td><td>" + dados[i].idade + "</td></tr>";
    }
    tabela.innerHTML = cabecalho + linhas;
}
*/

function criaTabela() {
    let linha = document.createElement('tr');

    let colN = document.createElement('td');
    let colR = document.createElement('td');
    let colI = document.createElement('td');

    let nm = localStorage.getItem('nome');
    let rc = localStorage.getItem('raca');
    let ida = localStorage.getItem('idade');

    colN.textContent = nm;
    colR.textContent = rc;
    colI.textContent = ida;

    linha.appendChild(colN);
    linha.appendChild(colR);
    linha.appendChild(colI);
    console.log(linha)

    
    var tbody = document.getElementById('tbody');
    //tabela.appendChild(linha);

    var tabela = document.getElementById('tabelaPerfil')
    console.log(tabela);
    tbody.appendChild(linha);
    console.log(tbody)

}

function salvarDados() {

    let nome = document.getElementById("nomePet").value;
    document.getElementById("nomePet").value = "";
    document.getElementById("item1").innerText = "";

    let raca = document.getElementById("raca").value;
    document.getElementById("raca").value = "";
    document.getElementById("item2").innerText = "";

    let idade = document.getElementById("idade").value;
    document.getElementById("idade").value = "";
    document.getElementById("item3").innerText = "";

    localStorage.setItem("nome", nome);
    localStorage.setItem("raca", raca);
    localStorage.setItem("idade", idade);

    document.getElementById("nomePet").disabled = false;
    document.getElementById("idade").disabled = false;
    document.getElementById("raca").disabled = false;
    
    document.getElementById("btn_Editar").disabled = true;
    document.getElementById("btn_salvar").disabled = true;
    document.getElementById("btn_cadastrar").disabled = false;
    document.getElementById("mensagemLista").innerText = "";
    document.getElementById("lista").style.display = "none";
    alert("Pet cadastrado com sucesso!!");
    //window.location.href = "perfil.html";
}

window.onload = () => {
    let cadastrar = document.getElementById("btn_cadastrar");
    cadastrar.addEventListener("click", geraLista);
}

window.onload = () => {
    let salvar = document.getElementById("btn_salvar");
    salvar.addEventListener("click", salvarDados)
}

/*Pegar o nome digitado pelo usuário na tela Home*/
function pegaNomeDono() {
    let dono = document.getElementById("dono").value;
    localStorage.setItem("dono", dono);
    window.location.href = "cadastro.html";
}

/*Colocar esse nome digitado pelo usuário na tela Cadastro*/
window.onload = function () {
    let nome = localStorage.getItem("dono")
    if (nome) {
        let mensagem = document.getElementsByClassName("mensagemDono");
        for (let i = 0; i < mensagem.length; i++) {
            mensagem[i].innerText = "Olá, " + nome + "!";
        }
    }
}

