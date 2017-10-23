//Challenge from Homework #4, make a circle that follows the mouse.
colorMode(HSB);
var rate = 0.1;
var x = 0;
var target = 100;

while (true) {
  ellipse(mouseX,mouseY, 15, 15);
  x = target*rate + x*(1-rate); // rate is 0.1, or 10% -- (1-rate) is 0.9, or 90%
  background(100);
}
