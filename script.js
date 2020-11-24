var slideIndex = 0;

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("my-slides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 8500);
}


function fnameBoxActive(){
    document.getElementById("fname").className += " was-submitted";
}

function lnameBoxActive(){
    document.getElementById("lname").className += " was-submitted";
}

function phoneBoxActive(){
    document.getElementById("phone").className += " was-submitted";
}

function emailBoxActive(){
    document.getElementById("email").className += " was-submitted";
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var inputText = document.getElementById("email-input").value;
    var emailError = document.getElementById("email-error");
    if (inputText.match(mailFormat)){
        emailError.style.display = "none";
    }
    else if (inputText.length == 0){
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "initial";
    }
}

function clearTextarea(){
    document.getElementById("comments").innerHTML = "";
}