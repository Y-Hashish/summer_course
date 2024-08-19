
function activ(){
  var id1 = document.getElementById("i1").value;
  var id2 = document.getElementById("i2").value;
  var id3 = document.getElementById("i3");
  console.log(id1);
  
  
  var num =[];
for (let i = 0; i < id1.length; i++) {
  if(id1[i]===id2){
    num.push(i);
  }
}
console.log(num);
id3.value = num ;
  
}
