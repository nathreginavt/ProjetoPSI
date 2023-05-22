function mudarBanho(){
    document.getElementById('pBanho').innerText = '\nDamos banho no seu cachorro ou gato com agua e os melhor produtos de higiene animal, pois ele merece o melhor!\n\n ';

    const btn = document.getElementById('btnBanho')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function(){
        voltar('b')
    };
}

function mudarTosa(){
    document.getElementById('pTosa').innerText = '\nTosamos o pelo do seu animal da melhor forma possível, com todo o cuidado e carinho que seu bichinho merece!\n\n ';

    const btn = document.getElementById('btnTosa')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function(){
        voltar('t')
    };
}

function mudarHosp(){
    document.getElementById('pHosp').innerText = '\nServiço de hospedagem para quando não tem com quem deixar seu pet. Na verdade tem... a gente!\n\n ';

    const btn = document.getElementById('btnHosp')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function(){
        voltar('h')
    };
}

function mudarSitter(){
    document.getElementById('pPetSitter').innerText = '\nO cuidador vai até seu pet, porque nem todo gato gosta de sair de casa (todo mundo sabe que quem manda é o pet).\n\n ';

    const btn = document.getElementById('btnPetSitter')
    btn.innerText = 'Mostrar menos';
    btn.onclick = function(){
        voltar('s')
    };
}

function voltar(tipo){
    let btn;
    switch(tipo){
        case 'b':
            document.getElementById('pBanho').innerText = '';
            btn = document.getElementById('btnBanho');
            btn.onclick = mudarBanho;
            btn.innerText = 'Saiba Mais...';
            break;
        case't':
            document.getElementById('pTosa').innerText = '';
            btn = document.getElementById('btnTosa');
            btn.onclick = mudarTosa;
            btn.innerText = 'Saiba Mais...';
            break;
        case'h':
            document.getElementById('pHosp').innerText = '';
            btn = document.getElementById('btnHosp');
            btn.onclick = mudarHosp;
            btn.innerText = 'Saiba Mais...';
            break;
        case's':
            document.getElementById('pPetSitter').innerText = '';
            btn = document.getElementById('btnPetSitter');
            btn.onclick = mudarSitter;
            btn.innerText = 'Saiba Mais...';
            break;
        default:
            break;
    }
}

/*document.getElementById('btnBanho').addEventListener('click', mudarBanho);*/