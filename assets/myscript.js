var iSlide = 1;
function standingTop()
{
    var y = window.scrollY;
    var elm = document.getElementById("i-header");
    if(y>=96)
    {
        elm.style.position="fixed";
        elm.style.top="0";
        elm.style.zIndex="1";
    }else
    {
        elm.style.position="static";
    }
}
function slideChange(i)
{
    document.getElementById("stick"+iSlide).style.color ="rgb(243,243,243,0.6)";
    iSlide+=i;
    if(iSlide==6) iSlide=1;
    if(iSlide==0) iSlide=5;
    slideNumber(iSlide);
}
function slideNumber(i)
{
    document.getElementById("stick"+iSlide).style.color ="rgb(243,243,243,0.6)";
    iSlide = i;
    document.getElementById("i-img").style.backgroundImage="url(assets/images/slide"+iSlide+".jpg)";
    document.getElementById("stick"+i).style.color ="rgb(54,54,54,0.6)";
}
// function loopSlide()
// {
//     var elm = document.getElementById("i-img");
//     while (true)
//     {
//         elm.style.backgroundImage="url(/assets/images/slide"+iSlide+".jpg)";
//         iSlide++;
//         if(iSlide==6) iSlide =1;
//         setTimeout(1000);
//     }
// }
// loopSlide();