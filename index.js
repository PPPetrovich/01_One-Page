/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hide_the_navbar").style.top = "0";
  } else {
    document.getElementById("hide_the_navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}