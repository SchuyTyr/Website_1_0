// Whatever kind of mobile test you wanna do.
if (screen.width < 500) {

  // :hover will trigger also once the cells are focusable
  // you can use this class to separate things
  $("body").addClass("nohover");

  // Make all the cells focusable
  $("td, th")
    .attr("tabindex", "1")
    // When they are tapped, focus them
    .on("touchstart", function() {
      $(this).focus();
    });

}
