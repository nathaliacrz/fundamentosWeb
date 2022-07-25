function hello() {
    alert("Hello World")
}

let nome = document.getElementById('nome');
let email = document.getElementById('email');
let assunto = document.getElementById('assunto');
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%';
email.style.width = '100%';

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'nome invalido!';
        txt.style.color = 'red';
    } else {
        txt.innerHTML = 'nome valido!'
        txt.style.color = 'green';
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1) {
        txtEmail.innerHTML = 'E-mail inválido.';
        txtEmail.style.color = 'red';
    } else {
        txtEmail.innerHTML = 'E-mail valido!'
        txtEmail.style.color = 'green';
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres.'
        txtAssunto.style.backgroundColor = 'red';
        txtAssunto.style.display = 'block';
    } else {
        txtAssunto.style.display = 'none';
        txtEmail.innerHTML = 'E-mail valido!'
        txtEmail.style.color = 'green';
        assuntoOk = true
    }
}

    function enviarForm() {
            if(nomeOk == true && emailOk == true && assuntoOk == true){
                alert('Formulário enviado com sucesso!')
            } else {
                alert('Preencha o formulário corretamente antes de enviar.')
            }
    }

function mapaZoom(){
    mapa.style.width = "800px";
    mapa.style.height = '600px';
}

function mapaNormal(){
    mapa.style.width = "400px";
    mapa.style.height = '250px';
}