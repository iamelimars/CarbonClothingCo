$(document).ready(function(){
  // $('.parallax').parallax();
  $('#hero-title').hide();
  $('.menu-btn').hide();
  $('.content').hide();
  $('.menu-btn').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

  function hideLoader() {
    // $('.loader').hide();
    $( ".pre-loader" ).fadeOut( "slow", function() {
      $('#hero-title').fadeIn("slow");
      $('.menu-btn').fadeIn("slow");
      $('.content').fadeIn("slow");
    });
  }
  setTimeout(hideLoader, 3000);



  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };



  //Menu button
  var menu = document.getElementsByClassName('menu')[0];

menu.addEventListener('click', function(){
  // classie.toggle(this, 'is-active');
});


/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */
// 
// ( function( window ) {
//
// 'use strict';
//
// // class helper functions from bonzo https://github.com/ded/bonzo
//
// function classReg( className ) {
//   return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
// }
//
// // classList support for class management
// // altho to be fair, the api sucks because it won't accept multiple classes at once
// var hasClass, addClass, removeClass;
//
// if ( 'classList' in document.documentElement ) {
//   hasClass = function( elem, c ) {
//     return elem.classList.contains( c );
//   };
//   addClass = function( elem, c ) {
//     elem.classList.add( c );
//   };
//   removeClass = function( elem, c ) {
//     elem.classList.remove( c );
//   };
// }
// else {
//   hasClass = function( elem, c ) {
//     return classReg( c ).test( elem.className );
//   };
//   addClass = function( elem, c ) {
//     if ( !hasClass( elem, c ) ) {
//       elem.className = elem.className + ' ' + c;
//     }
//   };
//   removeClass = function( elem, c ) {
//     elem.className = elem.className.replace( classReg( c ), ' ' );
//   };
// }
//
// function toggleClass( elem, c ) {
//   var fn = hasClass( elem, c ) ? removeClass : addClass;
//   fn( elem, c );
// }
//
// var classie = {
//   // full names
//   hasClass: hasClass,
//   addClass: addClass,
//   removeClass: removeClass,
//   toggleClass: toggleClass,
//   // short names
//   has: hasClass,
//   add: addClass,
//   remove: removeClass,
//   toggle: toggleClass
// };
//
// // transport
// if ( typeof define === 'function' && define.amd ) {
//   // AMD
//   define( classie );
// } else if ( typeof exports === 'object' ) {
//   // CommonJS
//   module.exports = classie;
// } else {
//   // browser global
//   window.classie = classie;
// }
//
// })( window );


})
