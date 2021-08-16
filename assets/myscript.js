var iSlide = 1;
var img_woman = new Array;
var price_woman = new Array;
var name_woman = new Array;
var img_man = new Array;
var price_man = new Array;
var name_man = new Array;
var img_hot = new Array;
var price_hot = new Array;
var name_hot = new Array;

loopSlide();

function addAnother_Woman(img,price,name){
  img_woman.push(img);
  price_woman.push(price);
  name_woman.push(name);
}
function addAnother_Man(img,price,name){
  img_man.push(img);
  price_man.push(price);
  name_man.push(name);
}
function addAnother_Hot(img,price,name){
  img_hot.push(img);
  price_hot.push(price);
  name_hot.push(name);
}
// noi them san pham
function addProWoman(){
  addAnother_Woman("assets/images/ico_C1W_icon.ico",120,"Hoa Hong");
  addAnother_Woman("assets/images/shopping-img.jpg",150,"Hoa Oai Huong");
  addAnother_Woman("assets/images/ico_C1W_icon.ico",110,"Hoa Hong");
  addAnother_Woman("assets/images/shopping-img.jpg",160,"Hoa Oai Huong");
  addAnother_Woman("assets/images/shopping-img.jpg",196,"Hoa Dao");
  addAnother_Woman("assets/images/shopping-img.jpg",169,"Hoa Huong Duong");
}
addProWoman();
function addProMan(){
  addAnother_Man("assets/images/ico_C1W_icon.ico",120,"Hoa Hong");
  addAnother_Man("assets/images/shopping-img.jpg",150,"Hoa Oai Huong");
}
addProMan();
function addProHot(){
  addAnother_Hot("assets/images/ico_C1W_icon.ico",120,"Hoa Hong");
  addAnother_Hot("assets/images/shopping-img.jpg",150,"Hoa Oai Huong");
}
addProHot();
function addProductWoman(){
  var elm = document.getElementById("product_woman");
  for(i = 0; i<img_woman.length;i++){
    elm.innerHTML = elm.innerHTML+'<div class="c-product-box"><div class="c-img-product"><img src='+img_woman[i]+' alt="san pham" /></div><div><p class="c-name-product">'+name_woman[i]+'</p><p class="c-price-product">'+price_woman[i] +'<i><b>vnđ</b></i></p></div></div>'
  }
}
addProductWoman();
function addProductMan(){
  var elm = document.getElementById("product_man");
  for(i = 0; i<img_man.length;i++){
    elm.innerHTML = elm.innerHTML+'<div class="c-product-box"><div class="c-img-product"><img src='+img_man[i]+' alt="san pham" /></div><div><p class="c-name-product">'+name_man[i]+'</p><p class="c-price-product">'+price_man[i] +'<i><b>vnđ</b></i></p></div></div>'
  }
}
addProductMan()
function addProductHot(){
  var elm = document.getElementById("product_hot");
  for(i = 0; i<img_hot.length;i++){
    elm.innerHTML = elm.innerHTML+'<div class="c-product-box"><div class="c-img-product"><img src='+img_hot[i]+' alt="san pham" /></div><div><p class="c-name-product">'+name_hot[i]+'</p><p class="c-price-product">'+price_hot[i] +'<i><b>vnđ</b></i></p></div></div>'
  }
}
addProductHot();
// getxy();
document.getElementById("i-img").style.backgroundImage =
  "url(assets/images/slide1.jpg)";
function standingTop() {
  var y = window.scrollY;
  var elm = document.getElementById("i-header");
  if (y >= 96) {
    elm.style.position = "fixed";
    elm.style.top = "0";
    elm.style.zIndex = "1";
  } else {
    elm.style.position = "static";
  }
}
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
  document.getElementById("i-img").style.backgroundImage =
    "url(assets/images/slide" + iSlide + ".jpg)";
  document.getElementById("stick" + i).style.color = "rgb(54,54,54,0.6)";
}
function loopSlide() {
  slideChange(1);
  setTimeout(loopSlide, 5000);
}
function scrollSlide(i, str){
  var elmt = document.getElementById("slide_"+str);
  elmt.scrollBy(i,0);
  // var x = elmt.scrollLeft;
  // document.getElementById("t"+"est").innerHTML ="hello";
}
