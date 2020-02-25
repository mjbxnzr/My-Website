(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();



new Vue({
  el:'#highschool',
  data:{
    date:"2010-2015",
    school:"S.M.K. Sultan Abdul Samad",
    location:"Klang, Selangor"
  },
  delimiters:["[[","]]"]
  }
)

new Vue({
  el:'#PreU',
  data:{
    date:"2015-2016",
    school:"Malacca Matriculation College",
    course:"Foundation of Engineering",
    location:"Masjid Tanah, Melaka"
  },
  delimiters:["[[","]]"]
});

new Vue({
  el:'#Uni',
  data:{
    date:"2016-2020",
    school:"University of Malaya",
    course:"Bachelor of Computer Science",
    location:"Kuala Lumpur, Wilayah persekutuan K.L."
  },
  delimiters:["[[","]]"]
});