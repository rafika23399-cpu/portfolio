// Rafael Ortiz Navarro — Portfolio JS

(function () {
  'use strict';

  // ----- Year in footer -----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Mobile menu toggle -----
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.setAttribute('aria-label', 'Abrir menú');
        }
      });
    });
  }

  // ----- Scroll-spy: highlight active nav link -----
  var sections = document.querySelectorAll('main section[id]');
  var navItems = document.querySelectorAll('.nav-links a');

  if (sections.length && navItems.length && 'IntersectionObserver' in window) {
    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navItems.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(function (section) { spyObserver.observe(section); });
  }

  // ----- Fade-in on scroll -----
  var fadeTargets = document.querySelectorAll(
    '.hero > div, #perfil > div, .dafo-card, .objetivo-col, .skill-block, .estrategia-block, #marca > div, #reflexion > div'
  );
  fadeTargets.forEach(function (el) { el.classList.add('fade-in'); });

  if ('IntersectionObserver' in window) {
    var fadeObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeTargets.forEach(function (el) { fadeObserver.observe(el); });
  } else {
    fadeTargets.forEach(function (el) { el.classList.add('visible'); });
  }

})();
