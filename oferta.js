function navSlide() {
    const navv = document.querySelector(".navv");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    navv.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        navv.classList.toggle("toggle");
    });
    
}

navSlide();
function updateTime(){
    const currentTime = new Date();
    let ora = currentTime.getHours();
    let minut = currentTime.getMinutes();
    let secunda = currentTime.getSeconds();
    if(ora < 10)
    {
        ora = "0" + ora;
    }
    if(minut < 10)
    {
        minut = "0" + minut;
    }
    if(secunda < 10)
    {
        secunda = "0" + secunda;
    }
    document.getElementById('ora').innerHTML = ora + ":";
    document.getElementById('minut').innerHTML = minut + ":";
    document.getElementById('secunda').innerHTML = secunda;
}
setInterval(updateTime);

function alertaa(){
    setTimeout(function(){alert("OFERTA NOASTRA ESTE VALABILA PENTRU UN TIMP LIMITAT!!");},10000
    );
}
alertaa();

function functiebuton(){
    if(document.getElementById("dem").style.opacity == 0)
    document.getElementById("dem").style.opacity = 1;
    else
    document.getElementById("dem").style.opacity = 0;
}
var i = 0;
function changecolor(){
    var arr = ["red", "white", "blue", "green", "yellow"];
    document.getElementById("texttt").style.color = arr[i];
    i = i + 1;
    if(i == 5)
        i = 0;
}
setInterval(changecolor, 2000);


















/*app.get("*",function(reg,res)
{res.sendFile(path.join(__dirname,'/404error.html'));
})*/