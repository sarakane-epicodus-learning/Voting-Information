$(document).ready(function(){
  const age = parseInt(prompt("How old are you?"));

  if(age >= 18) {
    $("#voting-information").show();
  }
  else {
    $("#minor").show();
  }
});