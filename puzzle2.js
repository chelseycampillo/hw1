function downRepeat(nSteps) {
  	var steps = 0;
  	while (steps < nSteps) {
      	down();
      	steps = steps + 1;
    }
}

function rightRepeat(nSteps) {
  	var steps = 0;
  	while (steps < nSteps) {
      	right();
      	steps = steps + 1;
    }
}

downRepeat(6);
rightRepeat(3);
up();
up();
rightRepeat(2);
downRepeat(3);
