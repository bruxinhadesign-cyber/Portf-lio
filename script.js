function openTab(tabId) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => link.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');

  const activeLink = Array.from(links).find(link => link.getAttribute('onclick').includes(tabId));
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Abre o modal recebendo uma URL de imagem ou o próprio elemento de imagem (<img>)
function openModal(target) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  
  if (typeof target === 'string') {
    modalImg.src = target;
  } else if (target && target.src) {
    modalImg.src = target.currentSrc || target.src;
  }
  
  modal.classList.add('open');
}

// Abre o modal a partir do botão "Ver Imagem Completa" dentro de um card
function openCardModal(buttonElement) {
  const card = buttonElement.closest('.project-card');
  const img = card ? card.querySelector('.project-img') : null;
  
  if (img) {
    openModal(img);
  }
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.remove('open');
}