let container = document.querySelector(".container");
let form = document.querySelector("form")
let small = document.querySelector("small")
let email = document.querySelector("form .email")
let modalBtn = document.querySelector(".modal button");
let modal = document.querySelector(".modal");
let parag = document.querySelector(".modal span");

form.addEventListener("submit", function(e){
    e.preventDefault();
    modal.style.display = "block";
    container.style.display = "none";
    email.value = "";
})

modalBtn.addEventListener("click", function(){
    window.location.reload();
})

email.addEventListener("change", function(){
    parag.innerHTML = email.value;
    let val = email.value;
    if ((!val.includes('@')) || (!val.includes('.com'))){
        email.style.border = "1px solid hsl(4, 100%, 67%";
        email.style.backgroundColor = "hsl(3, 100%, 93%)";
        email.style.color = "hsl(4, 100%, 67%)";
        small.style.display = "inline"
    } else {
        email.style.border = "1px solid hsl(235, 18%, 26%)";
        email.style.backgroundColor = "unset";
        email.style.color = "hsl(235, 18%, 26%)";
        small.style.display = "none" 
    }
})
