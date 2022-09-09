function TipCalculate() {
  var Amount = document.getElementById("amount").value;
  var service = document.getElementById("service").value;
  var persons = document.getElementById("persons").value;

  //validate input
  if (Amount === "" || service == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (persons === "" || persons <= 1) {
    persons = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (Amount * service) / persons;
  //always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  TipCalculate();

};
