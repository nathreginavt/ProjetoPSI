/*Tela Cadastro*/
function geraLista() {

    /*Gerar lista com informações registradas no input*/
    document.getElementById("mensagemLista").innerText = "Antes de concluir o cadastro, certifique-se se as informações inseridas estão corretas: ";
    let ul = document.getElementById("lista")
    ul.style.display = "block";
    let primeiroLi_Base = document.querySelector("li")

    //primeiro li = primeiro filho do ul
    let primeiroLi = ul.firstChild
    primeiroLi = document.getElementById("nomePet").value
    document.getElementById("nomePet").disabled = true;

    //segundo li = segundo filho do pai do primeiro li = segundo filho do ul
    let segundoLi = primeiroLi_Base.parentElement.children[1]
    segundoLi = document.getElementById("idade").value
    document.getElementById("idade").disabled = true;

    //terceiro li = terceiro filho do pai do primeiro li = terceiro filho do ul
    let terceiroLi = primeiroLi_Base.parentElement.children[2]
    terceiroLi = document.getElementById("raca").value
    document.getElementById("raca").disabled = true;

    //atualizando o innertext dos li
    let l1 = document.getElementById("item1")
    l1.innerText = "Pet: " + primeiroLi
    let l2 = document.getElementById("item2")
    l2.innerText = "Idade: " + segundoLi
    let l3 = document.getElementById("item3")
    l3.innerText = "Raça: " + terceiroLi

    //inserir li como filhos da lista
    lista.appendChild(l1)
    lista.appendChild(l2)
    lista.appendChild(l3)

    //habilitar/desabilitar botoes
    document.getElementById("btn_Editar").disabled = false;
    document.getElementById("btn_salvar").disabled = false;
    document.getElementById("btn_cadastrar").disabled = true;
}


//BOTÃO EDITAR
function editarDados() {

    //habilitar inputs
    document.getElementById("nomePet").disabled = false;
    document.getElementById("idade").disabled = false;
    document.getElementById("raca").disabled = false;

    //desabilitar/habilitar botões
    document.getElementById("btn_Editar").disabled = true;
    document.getElementById("btn_salvar").disabled = true;
    document.getElementById("btn_cadastrar").disabled = false;
}


//BOTÃO SALVAR
//criar tabela na página perfil
function criaTabela(){
    //salvar dados registrados no localstorage
    let dadosArmazenados = localStorage.getItem('dados');
    let dados = JSON.parse(dadosArmazenados);

    //pegar tabela do html e limpá-la
    let tabela = document.getElementById("tabelaPerfil");
    tabela.innerHTML = "";

    //criar cabeçalho
    let cabecalho = "<tr><th>Nome</th><th>Raça</th><th>Idade</th></tr>";

    //criar linhas
    let linhas = "";
    for(let i = 0; i < dados.length; i++){
        linhas += "<tr><td>" + dados[i].nome + "</td><td>" + dados[i].raca + "</td><td>" + dados[i].idade + "</td></tr>";
    }

    //criar tabela
    tabela.innerHTML = cabecalho + linhas;
}
function salvarDados() {

    //salvar valores dos inputs em variaveis
    let nome = document.getElementById("nomePet").value;
    let raca = document.getElementById("raca").value;
    let idade = document.getElementById("idade").value;

    //se variaveis existem/tem valor
    if (nome!="" && raca!="" && idade!="") {

        //apagar os inputs e a lista
        document.getElementById("nomePet").value = "";
        document.getElementById("item1").innerText = "";
    
        document.getElementById("raca").value = "";
        document.getElementById("item2").innerText = "";
    
        document.getElementById("idade").value = "";
        document.getElementById("item3").innerText = "";

        //pegar dados ja cadastrados no localstorage (tabela dos animais anteriores)
        let dadosArmazenados = localStorage.getItem('dados')
        let dados = [];
        //se tiver dado armazenado...
        if (dadosArmazenados) {
            //...armazenar no vetor
            dados = JSON.parse(dadosArmazenados);
        }

        //armazenar dados do animal no vetor
        dados.push({ nome: nome, idade: idade, raca: raca })

        localStorage.setItem('dados', JSON.stringify(dados))

        //habilitar/desabilitar inputs
        document.getElementById("nomePet").disabled = false;
        document.getElementById("idade").disabled = false;
        document.getElementById("raca").disabled = false;
        
        //habilitar/desabilitar botões e lista
        document.getElementById("btn_Editar").disabled = true;
        document.getElementById("btn_salvar").disabled = true;
        document.getElementById("btn_cadastrar").disabled = false;
        document.getElementById("mensagemLista").innerText = "";
        document.getElementById("lista").style.display = "none";

        alert("Pet cadastrado com sucesso!!");
    } else{
        alert("Preencha todos os campos!")
    }
}
               //lambda
window.onload = () => {
    //LISTENERS:
    let cadastrar = document.getElementById("btn_cadastrar");
    cadastrar.addEventListener("click", geraLista);

    let salvar = document.getElementById("btn_salvar");
    salvar.addEventListener("click", salvarDados)
}

/*Pegar o nome digitado pelo usuário na tela Home*/
function pegaNomeDono() {
    let dono = document.getElementById("dono").value;
    localStorage.setItem("dono", dono);
    window.location.href = "cadastro.html";
}

/*Colocar o nome digitado pelo usuário na tela Cadastro e Perfil*/
window.onload = function () {
    let nome = localStorage.getItem("dono")
    if (nome) {
        let mensagem = document.getElementsByClassName("mensagemDono");
        for (let i = 0; i < mensagem.length; i++) {
            mensagem[i].innerText = "Olá, " + nome + "!";
        }
    }
}