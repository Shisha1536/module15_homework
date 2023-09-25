const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    alert(`${document.documentElement.clientWidth} x ${document.documentElement.clientHeight}`);
});