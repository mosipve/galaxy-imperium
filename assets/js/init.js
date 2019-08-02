/* ---------------------
* initial the web site
* version: 2.0
* match to jquery
* made by: MAtm
--------------------- */
"use strict";

/* ********************************************* */
// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
  'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
  'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
  'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
  'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.



/* -------------------
* MATM UI KIT js
------------------- */

$(document).ready(function () {


  $(window).scroll(function(){
    $('.topnav').toggleClass('bg-white navbar-light shadow-sm scrollednav py-0 animated fadeIn', $(this).scrollTop() > 750);
  });

// wow-auto.init: scroll animations ready to work
new WOW().init();

/* ---------------------------
Wave effect Init
--------------------------- */
(function(){
 // Waves.attach('.btn:not(.btn-dark)', ['waves-button']);
 // Waves.attach('.btn-dark', ['waves-button', 'waves-light']);
 Waves.attach('.btn:not(.btn-dark)', ['waves-float']);
 Waves.attach('.btn-dark', ['waves-float', 'waves-light']);
 Waves.attach('.card', ['waves-float']);
 Waves.attach('.panel , .panel-row', ['border']);
 Waves.attach('.avatar', ['waves-circle','waves-gold']);
 Waves.init();
})();

/* ---------------------------
bootstrap 4 Init
--------------------------- */
(function(){
  $('.carousel').carousel({
    interval: 2000
  })
})();
/*(function(){
        // Select all elements with data-toggle="tooltips" in the document
        $('[data-toggle="tooltip"]').tooltip(); 

        // Select all tabs
        $('.nav-tabs a').click(function(){
          $(this).tab('show');
        })

        // $('.collapse').collapse();


        // scroll spy navbar
        $('body').scrollspy({target: ".navbar"})

        // Select all elements with data-toggle="popover" in the document
        $('[data-toggle="popover"]').popover(); 

        // Enable manually modal
        $("#myModal").modal();
        $('#theModal').on('shown.bs.modal', function () {
          $('.modal-btn').trigger('focus')
        });
        // $('#theModal').modal('toggle'); // show dialog after page load 

        // dropdown
        $('.dropdown-toggle').dropdown();
        $().dropdown('toggle');
        
        // collapse
        // $('.collapse').collapse();

        // button
        $('.btn').button();

        // alert
        $('.close').alert("close");

        // Activate Carousel
        $("#myCarousel").carousel();
        // Enable Carousel Indicators
        $(".item").click(function(){
          $("#myCarousel").carousel(1);
        });
        // Enable Carousel Controls
        $(".carousel-control-prev").click(function(){
          $("#myCarousel").carousel("prev");
        });

        // make mega menu for bootstrap 4
        $(document).ready(function() {
          $(".megamenu").on("click", function(e) {
            e.stopPropagation();
          });
        });

      })();*/






      (function(){
        /* ********************************************* */
        // $(document).ready(function(){
        //   $('.owl-carousel').owlCarousel();
        // });

        $('.custom-owl-1').owlCarousel({
          animateOut: 'slideOutDown',
          animateIn: 'flipInX',
          items:1, /* just 1 item */
          margin:30,
          stagePadding:30,
          smartSpeed:450,
          loop:true,
          autoplay:true
        });

        $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          responsiveClass:true,
          responsive:{
            0:{
              items:1,/* default:1 */
              nav:false
            },
            600:{
              items:3,/* default:3 */
              nav:false
            },
            1000:{
              items:3, /* how much items to see */ /* default:3 */
              nav:false,
              loop:true,
              autoplay:true
            }
          }
        })

/*
<div class="owl-carousel owl-theme owl-loaded owl-drag">
          <div class="owl-stage-outer">
            <div class="owl-stage bg-success" style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 2376px;">
              <div class="owl-item active" style="width: 178px; margin-right: 20px;">
                <div class="item">
                  <h4>1</h4>
                </div>
              </div>
              <div class="owl-item active" style="width: 178px; margin-right: 20px;">
                <div class="item">
                  <h4>2</h4>
                </div>
              </div>
              <div class="owl-item active" style="width: 178px; margin-right: 20px;">
                <div class="item">
                  <h4>3</h4>
                </div>
              </div>
              <div class="owl-item active" style="width: 178px; margin-right: 20px;">
                <div class="item">
                  <h4>4</h4>
                </div>
              </div>
              <div class="owl-item active" style="width: 178px; margin-right: 20px;">
                <div class="item">
                  <h4>5</h4>
                </div>
              </div>
              <div class="owl-item" style="width: 178px; margin-right: 20px;">
                <div class="item">
                  <h4>6</h4>
                </div>
              </div>
              <div class="owl-item" style="width: 178px; margin-right: 20px;">
                <div class="item">
                  <h4>7</h4>
                </div>
              </div>
              <div class="owl-item" style="width: 178px; margin-right: 20px;">
                <div class="item">
                  <h4>8</h4>
                </div>
              </div>
              <div class="owl-item" style="width: 178px; margin-right: 20px;">
                <div class="item">
                  <h4>9</h4>
                </div>
              </div>
              <div class="owl-item" style="width: 178px; margin-right: 20px;">
                <div class="item">
                  <h4>10</h4>
                </div>
              </div>
              <div class="owl-item" style="width: 178px; margin-right: 20px;">
                <div class="item">
                  <h4>11</h4>
                </div>
              </div>
              <div class="owl-item" style="width: 178px; margin-right: 20px;">
                <div class="item">
                  <h4>12</h4>
                </div>
              </div>
            </div>
          </div>
</div>
*/
/*
<div class="custom-owl-1 owl-carousel owl-theme">
  <div class="item">
    <h4>1</h4>
  </div>
  <div class="item">
    <h4>2</h4>
  </div>
  <div class="item">
    <h4>3</h4>
  </div>
  <div class="item">
    <h4>4</h4>
  </div>
  <div class="item">
    <h4>5</h4>
  </div>
  <div class="item">
    <h4>6</h4>
  </div>
  <div class="item">
    <h4>7</h4>
  </div>
  <div class="item">
    <h4>8</h4>
  </div>
  <div class="item">
    <h4>9</h4>
  </div>
  <div class="item">
    <h4>10</h4>
  </div>
  <div class="item">
    <h4>11</h4>
  </div>
  <div class="item">
    <h4>12</h4>
  </div>
</div>
*/
})();


});






// page Loader
var myLoader;
function theLoader() {
  myLoader = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
/* 
<body class="container-fluid" onload="theLoader()">
  <div id="loader"></div>
  <div id="myDiv" class="animate-bottom"> ... </div>
  */


