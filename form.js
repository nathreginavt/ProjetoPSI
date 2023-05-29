/*Valida formulário*/
function validaFormulario() {
    //let formulario = document.querySelector(".formContato");
    let nome = document.getElementById("nomeForm");
    let email = document.getElementById("emailForm");
    let telefone = document.getElementById("telefoneForm");
    //let select = document.getElementById("selectC");
    let mensagem = document.getElementById("mensagemC");

    if (nome.value == "") {
        document.getElementById("aviso").style.display = "block"
        document.getElementById("avisoNome").style.display = "block";
        nome.style.border = "2px solid red";
        return false;
    }
    else if (email.value == "" || !emailValido(email.value)) {
        document.getElementById("aviso").style.display = "block"
        document.getElementById("avisoEmail").style.display = "block";
        email.style.border = "2px solid red";
        return false;
    }
    else if (telefone.value == "" || !telefoneValido(telefone.value)) {
        document.getElementById("aviso").style.display = "block"
        document.getElementById("avisoTelefone").style.display = "block";
        telefone.style.border = "2px solid red";
        return false;
    }
    else if (mensagem.value == "") {
        document.getElementById("aviso").style.display = "block"
        document.getElementById("avisoMsg").style.display = "block";
        mensagem.style.border = "2px solid red";
        return false;
        
    }
    else{
        alert("Dados enviados com sucesso!!");
    }

    function emailValido(email) {
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        )

        if (emailRegex.test(email)) {
            return true;
        }
        return false;
    }
 
    function telefoneValido(telefone){
        const telefoneRegex = new RegExp(
            /^\(\d{2,3}\)\d{4,5}-\d{4}$/
        )
        if (telefoneRegex.test(telefone)){
            return true;
        }
        return false;
    }
}

window.onload = () => {
    let valida = document.getElementById("btnContato");
    valida.addEventListener("click", validaFormulario)
}