$(document).foundation()

var cakeSlideIndex = 1;
cakeShowDivs(cakeSlideIndex);

function cakePlusDivs(n) {
  cakeShowDivs(cakeSlideIndex += n);
}

function cakeShowDivs(n) {
  var i;
  var x = document.getElementsByClassName("cakeSlides");
  if (n > x.length) {cakeSlideIndex = 1}
  if (n < 1) {cakeSlideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[cakeSlideIndex-1].style.display = "block";
}

var cupcakeSlideIndex = 1;
cupcakeShowDivs(cupcakeSlideIndex);

function cupcakePlusDivs(n) {
  cupcakeShowDivs(cupcakeSlideIndex += n);
}

function cupcakeShowDivs(n) {
  var i;
  var x = document.getElementsByClassName("cupcakeSlides");
  if (n > x.length) {cupcakeSlideIndex = 1}
  if (n < 1) {cupcakeSlideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[cupcakeSlideIndex-1].style.display = "block";
}

var cookieSlideIndex = 1;
cookieShowDivs(cookieSlideIndex);

function cookiePlusDivs(n) {
  cookieShowDivs(cookieSlideIndex += n);
}

function cookieShowDivs(n) {
  var i;
  var x = document.getElementsByClassName("cookieSlides");
  if (n > x.length) {cookieSlideIndex = 1}
  if (n < 1) {cookieSlideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[cookieSlideIndex-1].style.display = "block";
}
