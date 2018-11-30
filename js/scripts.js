var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var c = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  if (a === b && b === c && c === a){
        alert("EQUILATERAL TRIANGLE");
  }  else if (a === b || a === c || b === c){
        alert("ISOSCELES TRIANGLE");
  }  else if (a !== b && b !==c ){
        alert("SCALENE TRIANGLE");
  }  else if((a+b)<=c || (a+c)<=b || (b+c)<=a){
        alert("NOT A TRIANGLE");
  }


  $(document).ready(function() {
  $("#br").click(function() {
    $("#br").alert();
  });
});
