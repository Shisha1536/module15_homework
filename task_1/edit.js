const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let icon_1 = document.getElementsByClassName('bi-arrow-down-left-circle');
    let icon_2 = document.getElementsByClassName('bi-arrow-down-left-circle-fill');

    if (icon_1[0].classList.contains('none')) {
        icon_1[0].classList.remove('none');
        icon_2[0].classList.add('none');
    } else {
        icon_2[0].classList.remove('none');
        icon_1[0].classList.add('none');
    }
});