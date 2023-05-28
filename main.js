function mudarBanho() {
    document.getElementById('pBanho').innerText = '\nDamos banho no seu cachorro ou gato com agua e os melhor produtos de higiene animal, pois ele merece o melhor!\n\n ';

    const btn = document.getElementById('btnBanho')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function () {
        voltar('b')
    };
}

function mudarTosa() {
    document.getElementById('pTosa').innerText = '\nTosamos o pelo do seu animal da melhor forma possível, com todo o cuidado e carinho que seu bichinho merece!\n\n ';

    const btn = document.getElementById('btnTosa')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function () {
        voltar('t')
    };
}

function mudarUnhas() {
    document.getElementById('pUnhas').innerText = '\nCortamos as unhas do seu pet, com cuidado especial para aqueles bravinhos que precisam de mais delicadeza!\n\n';

    const btn = document.getElementById('btnUnhas')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function () {
        voltar('u')
    };
}

function mudarHosp() {
    document.getElementById('pHosp').innerText = '\nServiço de hospedagem para quando não tem com quem deixar seu pet. Na verdade tem... a gente!\n\n ';

    const btn = document.getElementById('btnHosp')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function () {
        voltar('h')
    };
}

function mudarSitter() {
    document.getElementById('pPetSitter').innerText = '\nO cuidador vai até seu pet, porque nem todo gato gosta de sair de casa (todo mundo sabe que quem manda é o pet).\n\n ';

    const btn = document.getElementById('btnPetSitter')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function () {
        voltar('s')
    };
}

function mudarCreche() {
    document.getElementById('pCreche').innerText = '\nServiço de creche, onde você deixa seu pet na casa de um dos nossos cuidadores durante o período que você estiver fora.\n\n ';

    const btn = document.getElementById('btnCreche')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function () {
        voltar('c')
    };
}

function voltar(tipo) {
    let btn;
    switch (tipo) {
        case 'b':
            document.getElementById('pBanho').innerText = '';
            btn = document.getElementById('btnBanho');
            btn.onclick = mudarBanho;
            btn.innerText = 'Saiba Mais...';
            break;
        case 't':
            document.getElementById('pTosa').innerText = '';
            btn = document.getElementById('btnTosa');
            btn.onclick = mudarTosa;
            btn.innerText = 'Saiba Mais...';
            break;
        case 'u':
            document.getElementById('pUnhas').innerText = '';
            btn = document.getElementById('btnUnhas');
            btn.onclick = mudarUnhas;
            btn.innerText = 'Saiba Mais...';
            break;
        case 'h':
            document.getElementById('pHosp').innerText = '';
            btn = document.getElementById('btnHosp');
            btn.onclick = mudarHosp;
            btn.innerText = 'Saiba Mais...';
            break;
        case 's':
            document.getElementById('pPetSitter').innerText = '';
            btn = document.getElementById('btnPetSitter');
            btn.onclick = mudarSitter;
            btn.innerText = 'Saiba Mais...';
            break;
        case 'c':
            document.getElementById('pCreche').innerText = '';
            btn = document.getElementById('btnCreche');
            btn.onclick = mudarCreche;
            btn.innerText = 'Saiba Mais...';
            break;
        default:
            break;
    }
    /*document.getElementById('btnBanho').addEventListener('click', mudarBanho);*/
}


/*Tela Cadastro*/
function geraLista() {
    /*Informações Animal*/
    let ul = document.getElementById("lista")
    let primeiroLi_Base = document.querySelector("li")

    let primeiroLi = ul.firstChild
    primeiroLi = document.getElementById("nomePet").value

    let segundoLi = primeiroLi_Base.parentElement.children[1]
    segundoLi = document.getElementById("idade").value

    let terceiroLi = primeiroLi_Base.parentElement.children[2]
    terceiroLi = document.getElementById("raca").value

    let l1 = document.getElementById("item1")
    l1.innerText = "Pet: " + primeiroLi
    let l2 = document.getElementById("item2")
    l2.innerText = "Idade: " + segundoLi
    let l3 = document.getElementById("item3")
    l3.innerText = "Raça: " + terceiroLi

    lista.appendChild(l1)
    lista.appendChild(l2)
    lista.appendChild(l3)

}

function criaTabela(){
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

    var tabela = document.getElementById('tabelaPerfil')
    tabela.appendChild(linha);
}

function salvarDados(){
    let nome = document.getElementById("nomePet").value;
    document.getElementById("item1").innerText = "";

    let raca = document.getElementById("raca").value;
    document.getElementById("item2").innerText = "";

    let idade = document.getElementById("idade").value;
    document.getElementById("item3").innerText = "";

    localStorage.setItem("nome", nome);
    localStorage.setItem("raca", raca);
    localStorage.setItem("idade", idade);

    setTimeout(criaTabela, 100); // Adiciona um pequeno atraso de 100ms antes de chamar a função criaTabela
}


window.onload = () => {
    let cadastrar = document.getElementById("btn_cadastrar");
    cadastrar.addEventListener("click", geraLista);

    let salvar = document.getElementById("btn_salvar");
    salvar.addEventListener("click", salvarDados)
}