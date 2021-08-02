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