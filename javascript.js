var slideIndex = 1;

carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
}



document.querySelector("#menusteder").addEventListener("click", () => {
    window.location.href = "steder.html";
    console.log()
});
document.querySelector("#menuomfood8").addEventListener("click", () => {
    window.location.href = "omfood8.html";
});
document.querySelector("#menuinspiration").addEventListener("click", () => {
    window.location.href = "nyheder.html";
});



//boys open modal
