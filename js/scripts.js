var a = document.getElementById("no1");
var b = document.getElementById("no1");
var c = document.getElementById("no1");
  if (a === b && b === c && c === a) {
    return("EQUILATERAL TRIANGLE")
  }
  else if (a === b || a === c || b === c) {
    return("ISOSCELES TRIANGLE")
  }
  else if (a !== b && b !==c ) {
    return("SCALENE TRIANGLE")
  }
  else if((a+b)<=c || (a+c)<=b || (b+c)<=a){
    return("NOT A TRIANGLE");
  }

  //Front-end logic
  $(document).ready(function){
    var
  }
