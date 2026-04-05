/* Nova Theme JS */
(function () {
  'use strict';

  // Theme toggle
  const html = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('nova-theme') || 'light';
  html.setAttribute('data-theme', saved);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('nova-theme', next);
    });
  }

  // Mobile nav
  const hamburger = document.getElementById('navHamburger');
  const mobileNav = document.getElementById('navMobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  // Nav scroll shadow
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 10 ? '0 2px 12px rgba(0,0,0,.08)' : '';
    }, { passive: true });
  }

  // Highlight active TOC link on scroll
  const tocLinks = document.querySelectorAll('.post-toc .toc a');
  if (tocLinks.length) {
    const headings = Array.from(document.querySelectorAll('.post-content h1, .post-content h2, .post-content h3'));
    const onScroll = () => {
      const scrollY = window.scrollY + 100;
      let active = headings[0];
      for (const h of headings) {
        if (h.offsetTop <= scrollY) active = h;
      }
      tocLinks.forEach(a => a.classList.remove('active'));
      if (active) {
        const match = document.querySelector(`.post-toc .toc a[href="#${CSS.escape(active.id)}"]`);
        if (match) match.classList.add('active');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
