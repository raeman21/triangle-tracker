var triangleTracker = function() {

    var a = document.getElementById("Number1").value;
    var b = document.getElementById("Number2").value;
    var c = document.getElementById("Number3").value;

    if (a === b && b === c && c === a) {
      alert("EQUILATERAL TRIANGLE");
    } else if (a === b || a === c || b === c) {
        alert("ISOSCELES TRIANGLE");
      }else if (a!==b || b!==c || c!==a) {
            alert("SCALENE TRIANGLE");
        }else {
          alert("NOT A TRIANGLE");
        }

    };
