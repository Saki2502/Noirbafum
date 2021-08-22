// function standingTop() {
//   var y = window.scrollY;
//   var elm = document.getElementById("i-header");
//   if (y >= 96) {
//     elm.style.position = "fixed";
//     elm.style.top = "0";
//     elm.style.zIndex = "1";
//   } else {
//     elm.style.position = "static";
//   }
// }

var iSlide = 1;
var img_woman = new Array();
var price_woman = new Array();
var name_woman = new Array();
var img_man = new Array();
var price_man = new Array();
var name_man = new Array();
var img_hot = new Array();
var price_hot = new Array();
var name_hot = new Array();


function addAnother_Woman(img, price, name) {
  img_woman.push(img);
  price_woman.push(price);
  name_woman.push(name);
}
function addAnother_Man(img, price, name) {
  img_man.push(img);
  price_man.push(price);
  name_man.push(name);
}
function addAnother_Hot(img, price, name) {
  img_hot.push(img);
  price_hot.push(price);
  name_hot.push(name);
}

// noi them san pham
function addProWoman() {
  addAnother_Woman("assets/images/BlackOpium.jpg", 130, "Black Opium");
  addAnother_Woman("assets/images/versace.jpg", 99, "Versace Bright Crystal");
  addAnother_Woman("assets/images/si.jpg", 128, "Sì Eau de Parfum");
  addAnother_Woman("assets/images/MissDior.jpg", 138, "Miss Dior Blooming");
  addAnother_Woman("assets/images/lancome.jpg", 117, "Lancôme Trésor");
  addAnother_Woman("assets/images/cocochanel.jpg", 145, "Coco Chanel");
}
addProWoman();
function addProMan() {
  addAnother_Man("assets/images/212.jpg", 104, "212 Men Carolina Herrera");
  addAnother_Man("assets/images/paco.jpg", 100, "Phantom Eau de Toilette");
  addAnother_Man("assets/images/gio.jpg", 195, "Acqua Di Gio Profumo");
  addAnother_Man("assets/images/sauvage.jpg", 128, "Sauvage Eau de Parfum");
  addAnother_Man("assets/images/bvlgariman.jpg", 113, "BVLGARI Man In Black");
  addAnother_Man("assets/images/bleuchanel.jpg", 128, "Bleu de Chanel");
}
addProMan();
function addProHot() {
  addAnother_Hot(
    "assets/images/540eau.jpg",
    278,
    "Maison Francis Kurkdjian Baccarat Rouge 540"
  );
  addAnother_Hot(
    "assets/images/goodgirl.jpg",
    107,
    "Very Good Girl Eau de Parfum"
  );
  addAnother_Hot("assets/images/tamdao.jpg", 161, "Diptyque Tam Dao");
  addAnother_Hot("assets/images/doson.jpg", 161, "Diptyque Do Son");
  addAnother_Hot("assets/images/replica.jpg", 135, "REPLICA Jazz Club");
  addAnother_Hot("assets/images/repvibe.jpg", 135, "REPLICA Autumn Vibes");
}
addProHot();
$(function () {
  var isSideDown = false;
  $(window).scroll(function () {
    if ($("html,body").scrollTop() > 80) {
      // $("this").scrollTop(100);
      $("#i-header").css({
        "position": "fixed"
        ,"top": "0"
        ,"z-index": "1"
        ,"height" : "60"
        // ,"display":"none"
      });
      if (!isSideDown) {
        $("#i-slogan").css("display","none");
        $("#i-header").css("display", "none");
        isSideDown = true;
        $("#i-header").slideDown(500);
      }
    } else if ($("html,body").scrollTop() == 0) {
      isSideDown = false;
      $("#i-header").css({
        "position": "static"
        // ,"top":"0"
        // ,"z-index":"1"
        ,"display": "flex"
        ,"height" : "95"
      });
      $("#i-slogan").css("display","block");
    }
  });
  for (i = 0; i < 10; i++) {
    $(".c-list").append(
      '<div class="c-pro-items"><div class="c-item-img"></div><div class="c-item-info"><div class="c-item-name">Tran dan</div><div class="c-item-price">300d</div></div></div>'
    );
  }
});
function addProductWoman() {
  var elm = document.getElementById("product_woman");
  for (i = 0; i < img_woman.length; i++) {
    elm.innerHTML =
      elm.innerHTML +
      '<div class="c-product-box"><div class="c-img-product"><div class="c-product-new animate__animated animate__jello">NEW</div><img src=' +
      img_woman[i] +
      ' alt="san pham" /></div><div><p class="c-name-product">' +
      name_woman[i] +
      '</p><p class="c-price-product">' +
      price_woman[i] +
      "<i><b>$</b></i></p></div></div>";
  }
}
addProductWoman();
function addProductMan() {
  var elm = document.getElementById("product_man");
  for (i = 0; i < img_man.length; i++) {
    elm.innerHTML =
      elm.innerHTML +
      '<div class="c-product-box"><div class="c-img-product"><img src=' +
      img_man[i] +
      ' alt="san pham" /></div><div><p class="c-name-product">' +
      name_man[i] +
      '</p><p class="c-price-product">' +
      price_man[i] +
      "<i><b>$</b></i></p></div></div>";
  }
}
addProductMan();
function addProductHot() {
  var elm = document.getElementById("product_hot");
  for (i = 0; i < img_hot.length; i++) {
    elm.innerHTML =
      elm.innerHTML +
      '<div class="c-product-box"><div class="c-img-product"><div class="c-product-new animate__animated animate__jello">HOT</div><img src=' +
      img_hot[i] +
      ' alt="san pham" /></div><div><p class="c-name-product">' +
      name_hot[i] +
      '</p><p class="c-price-product">' +
      price_hot[i] +
      "<i><b>$</b></i></p></div></div>";
  }
}
addProductHot();
// getxy();
// document.getElementById("i-img").style.backgroundImage =
//   "url(assets/images/slide1.jpg)";

function slideChange(i) {
  document.getElementById("stick" + iSlide).style.color =
    "rgb(243,243,243,0.6)";
  iSlide += i;
  if (iSlide == 6) iSlide = 1;
  if (iSlide == 0) iSlide = 5;
  slideNumber(iSlide);
}
function slideNumber(i) {
  document.getElementById("stick" + iSlide).style.color =
    "rgb(243,243,243,0.6)";
  iSlide = i;
  document.getElementById("i-cover").src =
    "assets/images/slide" + iSlide + ".jpg";
  document.getElementById("stick" + i).style.color = "rgb(54,54,54,0.6)";
}

function loopSlide() {
  slideChange(1);
  setTimeout(loopSlide, 5000);
}
loopSlide();
// function scrollSlide(i, str) {
//   var elmt = document.getElementById("slide_" + str);
//   elmt.scrollBy(i, 0);
//   // var x = elmt.scrollLeft;
//   // document.getElementById("t"+"est").innerHTML ="hello";
// }

/*footer*/
window.scrollTo(0, 0);
window.scroll({
  behavior: "smooth",
});
//Get a:
ontop = document.getElementById("backtop");
//Kéo xuống 25px xuất hiện a
window.onscroll = function () {
  scrollTop();
};
function scrollTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    ontop.style.display = "block";
  } else {
    ontop.style.display = "none";
  }
}
//scroll lên đầu
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
