function downRepeat(nSteps) {
  var steps = 0;
  	while (steps < nSteps) {
      down();
      setColor("red");
    steps = steps + 1
    }
}

function rightRepeat(nSteps) {
  var steps = 0;
  	while (steps < nSteps) {
      right();
      setColor("red");
    steps = steps + 1
    }
}

function upRepeat(nSteps) {
  var steps = 0;
  	while (steps < nSteps) {
      up();
      setColor("red")'
    steps = steps + 1
    }
}

function leftRepeat(nSteps) {
  var steps = 0;
  	while (steps < nSteps) {
      left();
      setColor("red");
    steps = steps + 1
    }
}

downRepeat(4);
rightRepeat(9);
upRepeat(4);
leftRepeat(9);
