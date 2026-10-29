/**
 * Subtle fade/translate-up reveal for elements marked with [data-reveal].
 * Respects prefers-reduced-motion (elements are simply shown) and re-runs when the
 * theme editor re-renders a section.
 */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var supported = 'IntersectionObserver' in window;
  var observer = null;

  function show(el) {
    el.classList.add('is-visible');
  }

  function observe(root) {
    var nodes = (root || document).querySelectorAll('[data-reveal]:not(.is-visible)');
    if (!nodes.length) return;

    if (reduce || !supported || window.Shopify && window.Shopify.designMode) {
      nodes.forEach(show);
      return;
    }

    if (!observer) {
      observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            show(entry.target);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      );
    }

    nodes.forEach(function (node) {
      var rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        show(node);
      } else {
        observer.observe(node);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      observe();
    });
  } else {
    observe();
  }

  document.addEventListener('shopify:section:load', function (event) {
    observe(event.target);
  });
})();
