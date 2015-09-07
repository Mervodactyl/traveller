$("#nav-bar").addClass("js").before('<div id="menu">&#9776;</div>');
$("#menu").click(function(){
  $("#nav-bar").toggle();
});
$(window).resize(function(){
  if(window.innerWidth > 768) {
    $("#nav-bar").removeAttr("style");
  }
});

//    var breakPoint = parseFloat(($('html').css('font-size'))) * 48;
//
//
//
//
// $('#logo').click(function() {
//     var breakPoint = parseFloat(($('html').css('font-size')))*33;
//     if (newWidth > $(window).width()) {
//         $('nav ul').toggle();
//     }
// });
//
//
// $('#logo').click(function() {
//     if ($(window).width > 1000) {
//         $('nav ul').toggle();
//     }
// });
