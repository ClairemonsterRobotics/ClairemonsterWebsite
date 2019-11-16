function history_button(year) {
    close_others();
    document.getElementById("article_"+year).style.display = "";
    var elmnt = document.getElementById("article-title");
    scroll(elmnt); 
}

function close_others(){
  document.getElementById("article_2015").style.display = "none";
  document.getElementById("article_2016").style.display = "none";
  document.getElementById("article_2017").style.display = "none";
  document.getElementById("article_2018").style.display = "none";
}

window.onload = function() {
    close_others();
    document.getElementById("article_2018").style.display = "";
}

function expandCard(year){
    
}
