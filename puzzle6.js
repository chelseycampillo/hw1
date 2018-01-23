
right();
var mycolor = getColor();

if (getColor() == "blue") {
  down();
  down();
  down();
} else {
  up();
  up();
  up();
}

if (getColor() == "red") {
  left();
} else {
  right();
}

up();
down();
