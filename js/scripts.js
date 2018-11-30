var a = document.getElementById("no1");
var b = document.getElementById("no1");
var c = document.getElementById("no1");
  if (a === b && b === c && c === a) {
    alert("EQUILATERAL TRIANGLE")
  }
  else if (a === b || a === c || b === c) {
    alert("ISOSCELES TRIANGLE")
  }
  else if (a !== b && b !==c ) {
    alert("SCALENE TRIANGLE")
  }
  else if((a+b)<=c || (a+c)<=b || (b+c)<=a){
    alert("NOT A TRIANGLE");
  }

  //Front-end logic
  $("submit").onclick(alert){

  }
