// slide detail image
function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("figure-slides");
    var dots = document.getElementsByClassName("figure-sub__image");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
  }

//   tabs detail product
function openTabs(evt,tabName) {
    var i,tabColor;
    var x = document.getElementsByClassName("basel-tab-wrapper");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    tabColor = document.getElementsByClassName("btn_active");
    for (i = 0; i < tabColor.length; i++) {
      tabColor[i].className = tabColor[i].className.replace(
        " activeTab",
        ""
      );
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " activeTab";
  
  }