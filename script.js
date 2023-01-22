// Variaveis Globais.

const getFechador = document.querySelector('.fechador')
const getNavMb = document.querySelector('.nav-list-mobile')
const getMenu = document.querySelector('.menuzinho')
const getNavbarMB = document.querySelector('#nav-list-mb')

getFechador.style.display = 'none';

// Delaracoes de funcoes.

function openNav() {
  if(getFechador.style.display === 'none') {
    getFechador.style.display = 'block';
    getMenu.style.display = 'none';
    getNavbarMB.style.visibility = 'visible';
  } else{
    getFechador.style.display = 'none';
    getMenu.style.display = 'block';
    getNavbarMB.style.visibility = 'hidden';
  }
}

// Execucao de funcoes ou eventos.

getNavMb.addEventListener('click', openNav)