function toggleNav() {
    var nav = document.querySelector('#nav');
    var header = document.querySelector('header')
    nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'flex' : 'none';
}