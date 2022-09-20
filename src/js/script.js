'use strict';
document.addEventListener('DOMContentLoaded' , () => {
    
    // window.addEventListener('scroll' , () => {
        AOS.init();
    // })

    let hamburger = document.querySelector('.hamburger') ,
    menu = document.querySelector('.menu') ,
    close = document.querySelector('.menu__close') ,
    overlay = document.querySelector('.menu__overlay');

    overlay.addEventListener('click' , () => {
        menu.classList.remove('active');
    });

    hamburger.addEventListener('click' , () => {
        menu.classList.toggle('active');
    });


    close.addEventListener('click' , () => {
        menu.classList.remove('active');
    });

    const procents = document.querySelectorAll('.progress-procents') ,
    indicator = document.querySelectorAll('.progress-indicator');

    procents.forEach((item , index) => {
        let procent = item.textContent;
        indicator[index].querySelector('span').style=`width:${procent};`;
    });

});