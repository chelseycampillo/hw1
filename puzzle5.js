function rightRepeat(nSteps) {
  var steps = 0;
  	while (steps < nSteps) {
      right();
      steps = steps + 1
    }
}

rightRepeat(2);

var mycolor = getColor();
if (getColor() == "blue") {
	down();
} else {
	up();
}

rightRepeat(2);

if (getColor() == "red") {
	up();
} else {
	down();
}

rightRepeat(2);

if (getColor() == "red") {
	up();
} else {
	down();
}
rightRepeat(3);
