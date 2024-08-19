var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");

input.addEventListener('input' , function(){
var input = document.getElementById("input").value ;
 if(input === '1' ) 
{
  dot1.classList.add("active") ;
  dot2.classList.remove("active") ;
  dot3.classList.remove("active") ;
  
}
else if(input === '2' ) 
{
  dot2.classList.add("active") ;
  dot1.classList.remove("active") ;
  dot3.classList.remove("active") ;
  
}
else if(input === '3' ) 
{
  dot3.classList.add("active") ;
  dot2.classList.remove("active") ;
  dot1.classList.remove("active") ;
  
}else{
  dot3.classList.remove("active") ;
  dot2.classList.remove("active") ;
  dot1.classList.remove("active") ;
}
})




 



