const tigaD = "3D Design";
const duaD = "Graphich Design";
const budaya = document.querySelector('.info >h1');
const aHover = document.querySelectorAll('.listGambar > a');

// aSelect.split(/(\\|\/)/g).pop()
const aSelect = document.querySelectorAll('.listGambar > a')[1].attributes.href.value;
const img = document.querySelector('.listGambar > img');

// function namaOri(fullName) {
//     var startIndex = (fullName.indexOf('\\') >= 0 ? fullName.lastIndexOf('\\') : fullName.lastIndexOf('/'));
//     var filename = fullName.substring(startIndex);
//     if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
//         filename = filename.substring(1);
//     }
//     var res = filename.slice(0, 1)
//     return res;
// }
// aHover.addEventListener('mouseover', function (e) {
//     if (img.target.namaOri() == "0") {
//         budaya.innerHTML = duaD;
//     }

aHover[0].addEventListener('mouseover', function () {
    budaya.innerHTML = duaD;
});
aHover[1].addEventListener('mouseover', function () {
    budaya.innerHTML = tigaD;
});
aHover[2].addEventListener('mouseover', function () {
    budaya.innerHTML = duaD;
});
aHover[3].addEventListener('mouseover', function () {
    budaya.innerHTML = tigaD;
});
aHover[4].addEventListener('mouseover', function () {
    budaya.innerHTML = duaD;
});
aHover[5].addEventListener('mouseover', function () {
    budaya.innerHTML = tigaD;
});


$(window).resize(function () {
    if (window.innerWidth < 780) {
        $(".row1").remove;
    }
});





