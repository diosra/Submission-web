let JumboBackground = document.querySelector(".jumbotron");
JumboBackground.style.backgroundColor = '#469131';

let HeaderSatu = document.querySelector('h1');
HeaderSatu.style.color = 'white';

let navBack = document.querySelector('nav');
navBack.style.backgroundColor = '#9ede7c';

let bodyBack = document.querySelector('body');
bodyBack.style.backgroundColor = '#c2e3b1';

let HeaderDua = document.querySelectorAll("h2");
for (let h2 of HeaderDua)
    h2.style.color = '#47991c';

let footerBack = document.querySelector('footer');
footerBack.style.backgroundColor = '#469131';

function mouseMasuk(x) {
    x.style.backgroundColor = "#518c41";
    x.style.fontWeight = "bold";
}

function mouseKeluar(x) {
    x.style.backgroundColor = "";
    x.style.fontWeight = "";
}

gambartopi1.addEventListener('click', function () {
    window.alert("Status : LULUS \r\nTahun : 2011")
});

gambartopi2.addEventListener('click', function () {
    window.alert("Status : LULUS \r\nTahun : 2014")
});

gambartopi3.addEventListener('click', function () {
    window.alert("Status : LULUS \r\nTahun : 2017")
});

gambartopi4.addEventListener('click', function () {
    window.alert("Status : Belum Lulus \r\nProgress : Semester 6")
});