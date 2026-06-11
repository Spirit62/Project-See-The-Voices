document.querySelectorAll('.f').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.f').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.f;
    document.querySelectorAll('.note, .note-paper, .note-torn').forEach(item => {
      item.classList.toggle('hidden', filter !== 'all' && item.dataset.f !== filter);
    });
  });
});

document.querySelectorAll('.hero-signs span').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.filter = 'none';
  });
  el.addEventListener('mouseleave', () => {
    el.style.filter = 'grayscale(0.1)';
  });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -10% 0px'
});

document.querySelectorAll('.note, .note-paper, .note-torn').forEach(el => {
  revealObserver.observe(el);
});
