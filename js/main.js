



let category = document.querySelectorAll(".register-cat")
let show = document.getElementById("show");
let hide = document.getElementById("hide")

let password= document.getElementById("password")


function changeTo(event) {
  event.preventDefault()
  // console.log('event', event.target.classList)
  myFunction(event)
}


function myFunction(e) {
 
  let elems = document.querySelectorAll(".categoray-background");
  [].forEach.call(elems, function(el) {
 
    el.classList.remove("categoray-background");
  });
  e.target.classList.add("categoray-background") ;
}





