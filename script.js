//FONCTIONNALITE 1 + 1 BIS

var count = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function(){
  count++;
	console.log(`Click numéro ${count}`);
});

//FONCTIONNALITE 2 (A finir)

//elementDuDOM.classList.toggle("nomDeLaClasse")
//document.getElementById("navbarHeader")[0].addEventListener("click",function () {
//    if document.getElementById("navbarHeader")
//}

//FONCTIONNALITE 3
let primCard = document.getElementsByClassName("card-body")[0];
primCard.getElementsByTagName("button")[1].addEventListener("click", function(){
    primCard.getElementsByTagName("p")[0].style.color = "red";
  });

//FONCTIONNALITE 4
let secondCard = document.getElementsByClassName("card-body")[1];
secondCard.getElementsByTagName("button")[1].addEventListener("click", function(){
  secondCard.getElementsByTagName("p")[0].classList.toggle("text-success");
});

//FONCTIONNALITE 5
document.getElementsByClassName("navbar")[0].addEventListener("click", function(){
  if (document.getElementsByTagName("link")[0].rel == "stylesheet")        
    document.getElementsByTagName("link")[0].rel = "styleDisabled";
  else
    document.getElementsByTagName("link")[0].rel = "stylesheet";
});;