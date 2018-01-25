while (getColor() != "red") {
  down();
}

function rightRepeat(nSteps) {
  var steps = 0;
  	while (steps < nSteps) {
      right();
      steps = steps + 1
    }
}

rightRepeat(2);

while (getColor() != "red") {
  up();
}

rightRepeat(2);

while (getColor() != "red") {
  down();
}

rightRepeat(2);

while (getColor() != "red") {
  up();
}

rightRepeat(2);

while (getColor() != "red") {
  down();
}

right();
