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

downRepeat(6);
var mycolor = getColor();

if (getColor() == "red") {
  right();
  right();
} else {
  down();
  down();
}

if (getColor() == "red") {
  right();
  right();
} else {
  down();
}

if (getColor() == "red") {
  right();
  right();
} else {
  down();
}

upRepeat(6);

if (getColor() == "red") {
  right();
  right();
} else {
  up();
}

if (getColor() == "red") {
  right();
  right();
} else {
  up();
  up();
}

if (getColor() == "red") {
  right();
  right();
} else {
  up();
}

downRepeat(8);

if (getColor() == "red") {
  right();
  right();
} else {
  down();
}

if (getColor() == "red") {
  right();
  right();
} else {
  down();
}

upRepeat(6);

if (getColor() == "red") {
  right();
  right();
  right();
} else {
  up();
  up();
}

if (getColor() == "red") {
  right();
  right();
  right();
} else {
  up();
}

if (getColor() == "red") {
  right();
  right();
  right();
} else {
  up();
  up();
  up();
}

downRepeat(9);
