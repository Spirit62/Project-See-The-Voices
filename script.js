const filterBtns = document.querySelectorAll('.f');

filterBtns.forEach(btn => {
    btn. addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.CDATA_SECTION_NODE.f;
        document.querySelectorAll('.note, .note-paper, .note-torn').forEach(item => {
            item.classList.toggle('hidden', filter !== 'all' && item.dataset.f !== filter);
        });
    });
});