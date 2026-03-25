const texto = "Jucinara Melo";
const elemento = document.getElementById("texto-digitando");

let i = 0;
let apagandoNome = false;

function efeitoDigitacao() {
  if (!apagandoNome) {
    elemento.textContent = texto.substring(0, i + 1);
    i++;

    if (i === texto.length) {
      apagandoNome = true;
      setTimeout(efeitoDigitacao, 1500);
      return;
    }
  } else {
    elemento.textContent = texto.substring(0, i - 1);
    i--;

    if (i === 0) {
      apagandoNome = false;
    }
  }

  setTimeout(efeitoDigitacao, apagandoNome ? 50 : 100);
}

efeitoDigitacao();

const mensagens = [
  "Entre em contato pelo GitHub, LinkedIn ou e-mail.",
  "Vamos conversar sobre projetos, tecnologia e desenvolvimento web."
];

const elementoMensagem = document.getElementById("mensagem-dinamica");

let indiceMensagem = 0;
let indiceLetra = 0;
let apagandoMensagem = false;

function animarTexto() {
  const mensagemAtual = mensagens[indiceMensagem];

  if (!apagandoMensagem) {
    elementoMensagem.textContent = mensagemAtual.substring(0, indiceLetra + 1);
    indiceLetra++;

    if (indiceLetra === mensagemAtual.length) {
      apagandoMensagem = true;
      setTimeout(animarTexto, 1800);
      return;
    }
  } else {
    elementoMensagem.textContent = mensagemAtual.substring(0, indiceLetra - 1);
    indiceLetra--;

    if (indiceLetra === 0) {
      apagandoMensagem = false;
      indiceMensagem++;

      if (indiceMensagem === mensagens.length) {
        indiceMensagem = 0;
      }
    }
  }

  setTimeout(animarTexto, apagandoMensagem ? 40 : 70);
}

animarTexto();