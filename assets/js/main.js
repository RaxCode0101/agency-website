(function() {
  const body = document.body;
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav-menu');
  const page = body.dataset.page || '';

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      const isOpen = body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Tutup menu saat link diklik (mobile)
    nav.addEventListener('click', function(e) {
      const target = e.target;
      if (target && target.tagName === 'A') {
        body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Set menu aktif berdasarkan data-page
  document.querySelectorAll('.main-nav a').forEach(function(link) {
    const target = link.getAttribute('data-target');
    if (target && target === page) {
      link.classList.add('active');
    }
  });

  // Tahun dinamis footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();