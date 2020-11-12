var btnOpenMalling = document.querySelector('.malling__circle');
var btnMobileOpenMolling = document.querySelector('.malling__mobile');
var btnCloseMalling = document.querySelector('.malling__close');

btnOpenMalling.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.malling').classList.toggle('malling_open');
    
});
btnMobileOpenMolling.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.malling').classList.toggle('malling_open');
    this.classList.toggle('malling__mobile_none');
    
});
btnCloseMalling.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.malling').classList.toggle('malling_open');
    btnMobileOpenMolling.classList.toggle('malling__mobile_none');
});