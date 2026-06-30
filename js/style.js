document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.querySelector(".nav-menu");  
  const closeBtn = document.querySelector(".close-btn"); 

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      sidebar.classList.add("open");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });
  }
});



const searchIcon = document.querySelector('.desktop-search');
    const searchPopup = document.getElementById('searchPopup');
    const searchInput = document.querySelector('.search-input');

    searchIcon.addEventListener('click', () => {
      searchPopup.classList.toggle('open');
      if (searchPopup.classList.contains('open')) {
        setTimeout(() => searchInput.focus(), 300);
      }
    });

    document.addEventListener('click', (e) => {
      if (!searchPopup.contains(e.target) && !searchIcon.contains(e.target)) {
        searchPopup.classList.remove('open');
      }
    });



const mobileSearchIcon = document.querySelector('.mobile-search');
const mobilePanel = document.getElementById('mobileSearchPanel');
const closeBtn = document.getElementById('mobileCloseBtn');
const overlayBg = document.getElementById('overlayBg');
const mobileSearchInput = document.querySelector('.mobile-search-input'); 
mobileSearchIcon.addEventListener('click', () => {
  mobilePanel.classList.add('active');
  overlayBg.classList.add('show');

  setTimeout(() => {
    mobileSearchInput.focus();
  }, 300);
});

closeBtn.addEventListener('click', () => {
  mobilePanel.classList.remove('active');
  overlayBg.classList.remove('show');
});

overlayBg.addEventListener('click', () => {
  mobilePanel.classList.remove('active');
  overlayBg.classList.remove('show');
});