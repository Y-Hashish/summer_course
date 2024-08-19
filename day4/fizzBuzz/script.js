
function activ(){
  var id1 = document.getElementById("i1").value;
  var id3 = document.getElementById("i3");
  
  if (Number(id1) % 3 == 0 && Number(id1) % 5 == 0)
  {
    id3.value = "fizz Buzz";
  }
  else if (Number(id1) % 3 == 0)
  {
    id3.value = "fizz";

  }
  else if (Number(id1) % 5 == 0)
  {
    id3.value = "buzz"

  }
  else
  {
    id3.value = "none"
  }
}
