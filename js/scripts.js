var triangleTracker = function(){

      var a = document.getElementById("#myNumber").value;
      var b = document.getElementById("#yourNumber").value;
      var c = document.getElementById("#ourNumber").value;

        if (a === b && b === c && c === a){
            alert("EQUILATERAL TRIANGLE")
        ;
      }  else if (a === b || a === c || b === c){
            alert("ISOSCELES TRIANGLE")

      }  else if (a !== b && b !==c ){
           alert("SCALENE TRIANGLE")

      }  else if((a+b)<=c || (a+c)<=b || (b+c)<=a){
          alert("NOT A TRIANGLE")
  }
};
