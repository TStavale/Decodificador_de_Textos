
const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem');
const textContainer2 = document.querySelector('.text-container-2');
const btnCopiar = document.querySelector('.btn-copiar');


function responsive() {
    const largura = window.screen.width;
    const msg = (mensagem.value);

    if (largura <= 800 && msg == '') {
        mensagem.style.display = 'none';
    }
}

responsive()

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {

    const textEncriptado = encriptar(textArea.value);
    mensagem.style.backgroundImage = 'none';
    mensagem.style.display = 'inline';
    textContainer2.style.display = 'none';
    btnCopiar.style.display = 'inline';
    mensagem.value = textEncriptado;
    textArea.value = "";

    if(mensagem.value == '') {
        mensagem.style.backgroundImage = '';
        textContainer2.style.display = '';
        btnCopiar.style.display = '';
    }

    responsive()
       
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }
    }

    return stringEncriptada;
}

function btnDesenncriptar() {
    
    const textEncriptado = desencriptar(textArea.value);
    mensagem.style.backgroundImage = 'none';
    mensagem.style.display = 'inline';
    textContainer2.style.display = 'none';
    btnCopiar.style.display = 'inline';
    mensagem.value = textEncriptado;
    textArea.value = "";

    if(mensagem.value == '') {
        mensagem.style.backgroundImage = '';
        textContainer2.style.display = '';
        btnCopiar.style.display = '';
    }

    responsive()
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
    }

    return stringDesencriptada;
}

btnCopiar.addEventListener('click', copiaTexto);

function copiaTexto(e) {   
    navigator.clipboard.writeText(mensagem.value).innerHTML;
    
}




