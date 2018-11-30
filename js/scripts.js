var triangleTracker = function(){

      var a = document.getElementById("#myNumber").value;
      var b = document.getElementById("#yourNumber").value;
      var c = document.getElementById("#ourNumber").value;

        if (a === b && b === c && c === a){
        ;
      }  else if (a === b || a === c || b === c){

      }  else if (a !== b && b !==c ){
        ;
      }  else if((a+b)<=c || (a+c)<=b || (b+c)<=a){
        ;
  }
};
      $(document).getElementById('#myNumber')(function() {
        $("button#bt").click(function() {
          $("alert("EQUILATERAL TRIANGLE")")
        });
        $(document).getElementById('#yourNumber')(function() {
          $("button#bt").click(function() {
            $("alert("ISOSCELES TRIANGLE");")
          });
          $(document).getElementById('#ourNumber')(function() {
            $("button#bt").click(function() {
              $("alert("SCALENE TRIANGLE")")
            });
            $(document).getElementById('#myNumber')(function() {
              $("button#bt").click(function() {
                $("alert("NOT A TRIANGLE")")
              });
