function triangleTracker() {

  var a = parseInt(document.getElementById("Number1").value);
  var b = parseInt(document.getElementById("Number2").value);
  var c = parseInt(document.getElementById("Number3").value);
  var x = [];
  x.push(a, b, c);
  var y = x[0];
  var z = x[1];
  var p = x[2];


  if (y === z && z === p && p === y) {
    alert("EQUILATERAL TRIANGLE");
  } else if (y === z || z === p || p === y) {
    alert("ISOSCELES TRIANGLE");
  } else if ((y + z) <= p || (z + p) <= y || (y + p) <= z) {
  alert("NOT A TRIANGLE");
} else {
  alert("SCALENE TRIANGLE");
}
};
