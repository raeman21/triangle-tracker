var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,19,20];
var b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,19,20];
var c = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,19,20];
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
