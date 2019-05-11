var header,headerGraphic,headerLinks,headerLinksShape,headerLinksBar;
var yscroll;
var headerpos = 0;
var headermaxmove;
var isMobile;

window.onresize = function () {
  if(!isMobile){
    checkDesktopHeaderBar();
  }
}
window.onscroll = function () {
    if (header) {
        var delta = yscroll - window.scrollY;
        yscroll = window.scrollY;
        headerpos += delta;
        if (headerpos < headermaxmove) {
            headerpos = headermaxmove;
        } else if (headerpos > 0) {
            headerpos = 0;
        };
        header.style.top = headerpos + "px";
    };
};
function isMobile(){
  var mobiIndex = navigator.userAgent.indexOf("Mobi");
  var operaMiniIndex = navigator.userAgent.indexOf("Opera Mini");
  var androidIndex = navigator.userAgent.indexOf("Android");
  isMobile = mobiIndex!=-1 || operaMiniIndex!=-1 || androidIndex!=-1;
  return(isMobile);
}
function initMobileHeader(){

}
function mobileHeaderMenuClicked(){

}
function initDesktopHeader() {
    window.scroll(0, 0);
    yscroll = 0;
    header = document.querySelector("#header");
    headermaxmove = -header.querySelector("#headerLinksBar").getBoundingClientRect().top;
    headerGraphic = header.querySelector("#headerGraphic");
    headerLinks = header.querySelector("#headerLinks");
    headerLinksShape = headerLinks.querySelector("#headerLinksShape");
    headerLinksBar = headerLinks.querySelector("#headerLinksBar");

    checkDesktopHeaderBar();
};
function checkDesktopHeaderBar(){
    var headerWidth = header.getBoundingClientRect().width;
    headerLinksBar.style.width="auto";
    headerLinks.style.width="auto";
    headerGraphic.style.display = "flex";
    headerLinksShape.style.display = "block";
    var linksWidth = headerLinks.getBoundingClientRect().width;
    var graphicWidth = headerGraphic.getBoundingClientRect().width;
    if(headerWidth-(graphicWidth+linksWidth)<=0){
      headerGraphic.style.display = "none";
      headerLinksShape.style.display = "none";
      headerLinksBar.style.width="100%";
      headerLinks.style.width="100%";
    }
}
function initDocument(){
  if(isMobile()){
    $(function(){
        $("#footerDiv").load("includes/_FooterMobile.html");
        $("#headerDiv").load("includes/_HeaderMobile.html",function(){
          initMobileHeader();
        });
    });
  }else{
    $(function(){
        $("#footerDiv").load("includes/_FooterDesktop.html");
        $("#headerDiv").load("includes/_HeaderDesktop.html",function(){
          initDesktopHeader();
        });
    });
  }
}
