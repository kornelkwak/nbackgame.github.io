const ulMobile = document.querySelector("#ul-mobile");
const menu = document.querySelector('#burger-btn');
const btnVisible = document.querySelector('.fa-bars');
const btnHidden = document.querySelector('.fa-times');



menu.addEventListener('click', function () {


    if (ulMobile.style.visibility === 'hidden') {
        ulMobile.style.visibility = 'visible';
        ulMobile.style.top = '60px';
        btnVisible.style.display = 'none';
        btnHidden.style.display = 'block';

    } else {
        ulMobile.style.visibility = 'hidden';
        ulMobile.style.top = '-60px';
        btnVisible.style.display = 'block';
        btnHidden.style.display = 'none';
    }
})

