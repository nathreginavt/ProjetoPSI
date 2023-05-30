//CREATE INNERTEXT ELEMENTOS

//BANHO
function mudarBanho() {
    document.getElementById('pBanho').innerText = '\nDamos banho no seu cachorro ou gato com agua e os melhor produtos de higiene animal, pois ele merece o melhor!\n\n ';

    const btn = document.getElementById('btnBanho')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function () {
        voltar('b')
    };
    btn.removeEventListener('click', mudarBanho);
}

//TOSA
function mudarTosa() {
    document.getElementById('pTosa').innerText = '\nTosamos o pelo do seu animal da melhor forma possível, com todo o cuidado e carinho que seu bichinho merece!\n\n ';

    const btn = document.getElementById('btnTosa')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function () {
        voltar('t')
    };
    btn.removeEventListener('click', mudarTosa);
}

//UNHAS
function mudarUnhas() {
    document.getElementById('pUnhas').innerText = '\nCortamos as unhas do seu pet, com cuidado especial para aqueles bravinhos que precisam de mais delicadeza!\n\n';

    const btn = document.getElementById('btnUnhas')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function () {
        voltar('u')
    };
    btn.removeEventListener('click', mudarUnhas);
}

//HOSPEDAGEM
function mudarHosp() {
    document.getElementById('pHosp').innerText = '\nServiço de hospedagem para quando não tem com quem deixar seu pet. Na verdade tem... a gente!\n\n ';

    const btn = document.getElementById('btnHosp')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function () {
        voltar('h')
    };
    btn.removeEventListener('click', mudarHosp);
}

//PET SITTER
function mudarSitter() {
    document.getElementById('pPetSitter').innerText = '\nO cuidador vai até seu pet, porque nem todo gato gosta de sair de casa (todo mundo sabe que quem manda é o pet).\n\n ';

    const btn = document.getElementById('btnPetSitter')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function () {
        voltar('s')
    };
    btn.removeEventListener('click', mudarSitter);
}

//CRECHE
function mudarCreche() {
    document.getElementById('pCreche').innerText = '\nServiço de creche, onde você deixa seu pet na casa de um dos nossos cuidadores durante o período que você estiver fora.\n\n ';

    const btn = document.getElementById('btnCreche')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function () {
        voltar('c')
    };
    btn.removeEventListener('click', mudarCreche);
}


//REMOVE INNERTEXT ELEMENTOS
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
}

//LISTENERS
window.onload = () => {
    let btnBanho = document.getElementById("btnBanho");
    btnBanho.addEventListener("click", mudarBanho);

    let btnTosa = document.getElementById("btnTosa");
    btnTosa.addEventListener("click", mudarTosa);

    let btnUnhas = document.getElementById("btnUnhas");
    btnUnhas.addEventListener("click", mudarUnhas);

    let btnHosp = document.getElementById("btnHosp");
    btnHosp.addEventListener("click", mudarHosp);

    let btnSitter = document.getElementById("btnPetSitter");
    btnSitter.addEventListener("click", mudarSitter);

    let btnCreche = document.getElementById("btnCreche");
    btnCreche.addEventListener("click", mudarCreche);

    
    //UPDATE PARAGRAFO - FINAL DA PAG HTML
    let nm = document.getElementById("nome")
    nm.addEventListener('keypress', () => {
      document.getElementById("btnOK").disabled = false;
    })
    let ok = document.getElementById("btnOK")
    ok.addEventListener('click', () => {
      let p = document.getElementById("pNome")
      p.innerText = "Olá, Sr.(a) " + document.getElementById("nome").value + "!"

      document.getElementById("btnAgende").style.display = "inline";
    }
    );
}