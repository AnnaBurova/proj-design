document.getElementById('myButton').onclick = function () {

  var x = Math.random();

  x = 6 * x;

  x = Math.floor(x);

  if (x == document.getElementById('answer').value) {

    alert("That's correct!");

  } else {

    alert("That's wrong! My number was " + x);

  }

}
