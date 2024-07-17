let rescues = Math.floor(Math.random() * 1000)+1000;
document.getElementById("stat1").textContent = rescues +" lbs of food rescued";

let serve = Math.floor(Math.random() *1000) + 1000;
document.getElementById("stat2").textContent = serve + " meals served";

let waste = Math.floor(Math.random() *50) + 50;
document.getElementById("stat3").textContent = waste + "% waste reduced";
