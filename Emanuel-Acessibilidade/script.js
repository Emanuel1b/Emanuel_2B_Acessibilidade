let tamanhoFonte = 16;

function aumentarFonte() {
  if (tamanhoFonte < 24) {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + 'px';
  }
}

function diminuirFonte() {
  if (tamanhoFonte > 12) {
    tamanhoFonte -= 2;
    document.body.style.fontSize = tamanhoFonte + 'px';
  }
}

function alternarContraste() {
  document.body.classList.toggle('contraste');
}