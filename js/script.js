$( ".abajo-izquierdo" ).mouseenter(function() {
  $(this).css({"background-color": "#22313F", "cursor": "pointer"});
  $('.abajo-izquierdo h1').css({"color": "white" });
  $('.abajo-izquierdo img').css({"transform": "scale(1.2,1.2) translate(10px)"});

});
$( ".abajo-izquierdo" ).mouseleave(function() {
  $(this).css({"background-color": "#f1c40f"});
  $('.abajo-izquierdo h1').css({"color": "black" });
  $('.abajo-izquierdo img').css({"transform": "scale(1,1) translate(-10px)"});

});



$( ".abajo-derecho" ).mouseenter(function() {
  $(this).css({"background-color": "black", "cursor": "pointer"});
  $('.abajo-derecho h1').css({"color": "white" });
  $('.abajo-derecho img').css({"transform": "translatex(45%)"});

});
$( ".abajo-derecho" ).mouseleave(function() {
  $(this).css({"background-color": "#c0392b"});
  $('.abajo-derecho h1').css({"color": "white" });
  $('.abajo-derecho img').css({"transform": "translate(-20%)"});

});
