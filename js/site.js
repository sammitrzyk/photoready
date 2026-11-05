// PhotoReady — before/after sliders, mobile menu, form handling
(function () {
  // Before/after sliders
  document.querySelectorAll('.pr-ba').forEach(function (box) {
    var input = box.querySelector('input[type=range]');
    if (!input) return;
    var set = function () { box.style.setProperty('--pos', input.value + '%'); };
    input.addEventListener('input', set);
    set();
  });

  // "What we handle" accordion
  var hItems = document.querySelectorAll('.pr-handle-item');
  var hImg = document.getElementById('pr-handle-img');
  var hCap = document.getElementById('pr-handle-cap');
  hItems.forEach(function (item) {
    var btn = item.querySelector('.pr-handle-btn');
    btn.addEventListener('click', function () {
      var wasOpen = btn.getAttribute('aria-expanded') === 'true';
      hItems.forEach(function (o) {
        var b = o.querySelector('.pr-handle-btn');
        b.setAttribute('aria-expanded', 'false');
        b.style.color = '#5B6676';
        b.querySelector('path').setAttribute('d', 'M8 1v14M1 8h14');
        o.querySelector('.pr-handle-body').hidden = true;
      });
      if (!wasOpen) {
        btn.setAttribute('aria-expanded', 'true');
        btn.style.color = '#0B1A2E';
        btn.querySelector('path').setAttribute('d', 'M3 3l10 10M13 3L3 13');
        item.querySelector('.pr-handle-body').hidden = false;
        if (hImg) { hImg.src = item.dataset.img; hImg.alt = item.dataset.alt; }
        if (hCap) hCap.textContent = item.dataset.cap;
      }
    });
  });

  // Mobile menu
  var btn = document.querySelector('.pr-menubtn');
  var menu = document.getElementById('pr-menu');
  if (btn && menu) {
    var path = btn.querySelector('path');
    btn.addEventListener('click', function () {
      var open = menu.hidden;
      menu.hidden = !open;
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (path) path.setAttribute('d', open ? 'M3 1l14 12M17 1L3 13' : 'M0 1h20M0 7h20M0 13h20');
    });
  }

  // Forms: replace the handler below with your form service
  // (Formspree, Netlify Forms, Wix, or your CRM webhook) before launch.
  document.querySelectorAll('form.pr-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.pr-form-status');
      if (!msg) {
        msg = document.createElement('p');
        msg.className = 'pr-form-status';
        msg.setAttribute('role', 'status');
        form.appendChild(msg);
      }
      msg.textContent = 'Thanks. We got your details and will call you to set up a walkthrough.';
    });
  });
})();
