var about = document.getElementById("about");
var work = document.getElementById("work");

var homePage = document.getElementById("site-container");
var aboutPage = document.getElementById("about-container");
var workPage = document.getElementById("work-container");

var aboutBack = document.getElementById("back-button");
var workBack = document.getElementById("work-back");

// home page to about page
about.addEventListener("click", function(){
    homePage.style.display = "none";
    aboutPage.style.display = "flex";
});

about.addEventListener("focusin", function(){
    document.addEventListener("keypress", function(e){
        if(e.keyCode === 13){
            homePage.style.display = "none";
            workPage.style.display = "none";
            aboutPage.style.display = "flex";
        }
    });
});

// about page to home page
aboutBack.addEventListener("click", function(){
    aboutPage.style.display = "none";
    homePage.style.display = "flex";
});

aboutBack.addEventListener("focusin", function(){
    document.addEventListener("keypress", function(e){
        if(e.keyCode === 13){
            aboutPage.style.display = "none";
            homePage.style.display = "flex";
        }
    });
});

// home page to work page
work.addEventListener("click", function(){
    homePage.style.display = "none";
    workPage.style.display = "flex";
});

work.addEventListener("focusin", function(){
    document.addEventListener("keypress", function(e){
        if(e.keyCode === 13){
            homePage.style.display = "none";
            aboutPage.style.display = "none";
            workPage.style.display = "flex";
        }
    });
});

// work page to home page
workBack.addEventListener("click", function(){
    workPage.style.display = "none";
    homePage.style.display = "flex";
});

workBack.addEventListener("focusin", function(){
    document.addEventListener("keypress", function(e){
        if(e.keyCode === 13){
            workPage.style.display = "none";
            homePage.style.display = "flex";
        }
    });
});