"use strict";

//var elementFadeIn = document.getElementById("")
//var opacity = 0;

/*var fadeIn = function(){
    if(opacity <= 1.0){
        elementFadeIn.style.opacity = opacity;
    } else {
        clearInterval(timer);
    }
    opacity += 0.1;

}

var timer = window.setInterval(fadeIn, 50);
*/
var showMoreProjects = function showMoreProjects() {
  var moreProjects = document.getElementById("project-sect");

  if (moreProjects.style.visibility === "hidden") {
    moreProjects.setAttribute("style", "visibility:visible", "height:100px");
  } else {
    moreProjects.setAttribute("style", "visibility:hidden", "height:0vh");
  }
}; //$(document).ready(function(){
//    $(".burgerNav").on("click",function(){
//
//        $("ul").toggleClass("open");
//
//    });
//});


var showBurgerNav = function showBurgerNav() {
  var burgerButtons = document.getElementById("burgerButtons");

  if (burgerButtons.style.display === "none") {
    burgerButtons.style.display = "block";
  } else {
    burgerButtons.style.display = "none";
  }
};