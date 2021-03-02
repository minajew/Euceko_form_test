var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active')
});

modalClose.addEventListener('click', function(){
modalBg.classList.remove('bg-active')
});

var modalBtn2 = document.querySelector('.mb2');
var modalBg2 = document.querySelector('.modal-bg2');
var modalClose2 = document.querySelector('.modal-close2');

modalBtn2.addEventListener('click', function(){
    modalBg2.classList.add('bg-active2')
});

modalClose2.addEventListener('click', function(){
modalBg2.classList.remove('bg-active2')
});

var modalBtn3 = document.querySelector('.mb3');
var modalBg3 = document.querySelector('.modal-bg3');
var modalClose3 = document.querySelector('.modal-close3');

modalBtn3.addEventListener('click', function(){
    modalBg3.classList.add('bg-active3')
});

modalClose3.addEventListener('click', function(){
modalBg3.classList.remove('bg-active3')
});

var modalBtn4 = document.querySelector('.mb4');
var modalBg4 = document.querySelector('.modal-bg4');
var modalClose4 = document.querySelector('.modal-close4');

modalBtn4.addEventListener('click', function(){
    modalBg4.classList.add('bg-active4')
});

modalClose4.addEventListener('click', function(){
modalBg4.classList.remove('bg-active4')
});

var modalBtn5 = document.querySelector('.mb5');
var modalBg5 = document.querySelector('.modal-bg2-mobile');
var modalClose5 = document.querySelector('.modal-close5');

modalBtn5.addEventListener('click', function(){
    modalBg5.classList.add('bg-active5')
});

modalClose5.addEventListener('click', function(){
modalBg5.classList.remove('bg-active5')
});