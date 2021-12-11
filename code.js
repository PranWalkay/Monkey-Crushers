onEvent("buttonStart", "click", function( ) {
  var score = 0;
  timedLoop(1000, function() {
    setPosition("imageMole", randomNumber(50, 270), randomNumber(50, 350), 50, 50);
    showElement("imageMole");
  });
  onEvent("imageMole", "click", function( ) {
    score = score+1;
    setText("labelScore", score);
  });
});
