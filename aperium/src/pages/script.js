document.addEventListener('DOMContentLoaded', function() {
    const lastP = document.getElementById('lastp');
    const byLine = document.querySelector('.font-medium');

    if (lastP && lastP.innerHTML.trim() !== 'By <a href="https://github.com/Butwm" class="clickable bg-[#00a2ff65]" target="_blank">Butwm</a>') {
        lastP.innerHTML = 'By <a href="https://github.com/Butwm" class="clickable bg-[#00a2ff65]" target="_blank">Butwm</a>';
    }
});