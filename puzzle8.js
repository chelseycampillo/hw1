function downRepeat(nSteps) {
  var steps = 0;
  	while (steps < nSteps) {
      down();
    steps = steps + 1
    }
}

function upRepeat(nSteps) {
  var steps = 0;
  	while (steps < nSteps) {
      up();
    steps = steps + 1
    }
}

downRepeat(8);
right();
right();
upRepeat(7);
right();
right();
downRepeat(7);
right();
right();
upRepeat(7);
right();
right();
downRepeat(7);
right();
