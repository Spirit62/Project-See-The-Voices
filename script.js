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
