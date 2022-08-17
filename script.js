let botao = document.getElementById('botao')
let bodyInteiro = document.getElementById('bodyInteiro')
let textoSpan = document.getElementById('textoSpan')

function mudarParaDark() {
  botao.classList.remove('light')

  botao.classList.add('botaoDark')
  bodyInteiro.classList.add('fundoDark')
  document.getElementById('textoSpan').innerHTML = 'Mudar para LIGHT THEME'
}

function mudarParalight() {
  botao.classList.remove('botaoDark')
  bodyInteiro.classList.remove('fundoDark')

  botao.classList.add('light')

  document.getElementById('textoSpan').innerHTML = 'Mudar para DARK THEME'
}

function verificar() {
  if (botao.classList.contains('light')) {
    mudarParaDark()
  } else {
    mudarParalight()
  }
}
