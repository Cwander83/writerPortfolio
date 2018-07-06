console.log("app.js connected");

function main() {
   (function() {
      "use strict";

      $("a.page-scroll").click(function() {
         if (
            location.pathname.replace(/^\//, "") ==
               this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
         ) {
            var target = $(this.hash);
            target = target.length
               ? target
               : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
               $("html,body").animate(
                  {
                     scrollTop: target.offset().top - 40
                  },
                  900
               );
               return false;
            }
         }
      });

      // Show Menu on Book
      $(window).bind("scroll", function() {
         var navHeight = $(window).height() - 500;
         if ($(window).scrollTop() > navHeight) {
            $(".navbar-extend-lg").addClass("on");
         } else {
            $(".navbar-extend-lg").removeClass("on");
         }
      });

      $("body").scrollspy({
         target: ".navbar-extend-lg",
         offset: 80
      });

      // Hide nav on click
      $(".navbar-nav li a").click(function(event) {
         // check if window is small enough so dropdown is created
         var toggle = $(".navbar-toggler").is(":visible");
         if (toggle) {
            $(".navbar-collapse").collapse("hide");
         }
      });
   })();
}
main();
