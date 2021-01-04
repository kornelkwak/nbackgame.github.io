const ulMobile = document.querySelector("#ul-mobile");
let menu = document.querySelector('#burger-btn');


menu.addEventListener('click', function() {
  
    
    if (ulMobile.style.display === 'none') {
        ulMobile.style.display = 'block';
    } else { 
        ulMobile.style.display = 'none';
    }

})
