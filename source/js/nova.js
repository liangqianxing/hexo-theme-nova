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

  // Build TOC dynamically from actual heading IDs in the page
  function buildToc() {
    const tocList = document.getElementById('tocList');
    if (!tocList) return;
    const headings = Array.from(document.querySelectorAll('.post-content h1, .post-content h2, .post-content h3'));
    if (!headings.length) return;

    headings.forEach(h => {
      // id may be on the heading itself or on an inner <span>
      const idEl = h.id ? h : h.querySelector('[id]');
      if (!idEl) return;
      const id = idEl.id;
      const level = parseInt(h.tagName[1]);
      const li = document.createElement('li');
      li.className = `toc-item toc-level-${level}`;
      const a = document.createElement('a');
      a.className = 'toc-link';
      a.href = '#' + id;
      a.textContent = h.textContent.trim();
      li.appendChild(a);
      tocList.appendChild(li);
    });

    // Highlight active on scroll
    const tocLinks = tocList.querySelectorAll('a');
    const onScroll = () => {
      const scrollY = window.scrollY + 100;
      let active = headings[0];
      for (const h of headings) {
        if (h.offsetTop <= scrollY) active = h;
      }
      tocLinks.forEach(a => a.classList.remove('active'));
      if (active) {
        const idEl = active.id ? active : active.querySelector('[id]');
        if (idEl) {
          const match = tocList.querySelector(`a[href="#${CSS.escape(idEl.id)}"]`);
          if (match) match.classList.add('active');
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildToc);
  } else {
    buildToc();
  }
})();