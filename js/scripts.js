$(document).ready(function() {
  $("col-xs-3").click(function() {
    $(this).find(".definition").toggle();
    $(this).find(".h2").toggle();

  });
});
