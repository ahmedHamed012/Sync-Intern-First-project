let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');
let productImage = document.getElementById('productImage');
let btn = document.getElementById('btn');
slide1.onclick = function () {
    document.body.style.backgroundImage = 'url(../images/background1.png)';
    productImage.setAttribute('src', './images/shoes1.png');
    btn.style.backgroundColor = '#d83150';
    if (slide2.classList.contains('active') || slide3.classList.contains('active')) {
        slide2.classList.remove('active');
        slide3.classList.remove('active');
        this.classList.add('active')
    }
};
slide2.onclick = function () {
    document.body.style.backgroundImage = 'url(../images/background2.png)';
    productImage.setAttribute('src', './images/shoes2.png');
    btn.style.backgroundColor = '#f07d3c';
    if (slide1.classList.contains('active') || slide3.classList.contains('active')) {
        slide1.classList.remove('active');
        slide3.classList.remove('active');
        this.classList.add('active')
    }
};
slide3.onclick = function () {
    document.body.style.backgroundImage = 'url(../images/background3.png)';
    productImage.setAttribute('src', './images/shoes3.png');
    btn.style.backgroundColor = '#b03e41';
    if (slide1.classList.contains('active') || slide2.classList.contains('active')) {
        slide1.classList.remove('active');
        slide2.classList.remove('active');
        this.classList.add('active')
    }
};