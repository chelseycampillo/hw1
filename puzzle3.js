function downRepeat(nSteps) {
		var steps = 0
    while (steps < nSteps) {
    	down();
      steps = steps + 1;
    }
}
		
downRepeat(2);
var mycolor = getColor();
right();
right();
downRepeat(3);
setColor(mycolor);
right();
right();
up();
