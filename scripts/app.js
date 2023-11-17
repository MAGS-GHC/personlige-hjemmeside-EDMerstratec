function displayAboutMe() {
  document.getElementById("AboutMe").style.display = "";
  document.getElementById("Buns").style.display = "none";
  document.getElementById("Projects").style.display = "none";
}
function displayProjects() {
  document.getElementById("AboutMe").style.display = "none";
  document.getElementById("Projects").style.display = "";
  document.getElementById("Buns").style.display = "none";
}
function displayBuns() {
  document.getElementById("AboutMe").style.display = "none";
  document.getElementById("Projects").style.display = "none";
  document.getElementById("Buns").style.display = "";
}
//About Me subcategories
function displayAboutMeWho() {
  document.getElementById("AboutMeWho").style.display = "";
  document.getElementById("AboutMeWhere").style.display = "none";
  document.getElementById("AboutMeWhat").style.display = "none";
}
function displayAboutMeWhere() {
  document.getElementById("AboutMeWho").style.display = "none";
  document.getElementById("AboutMeWhere").style.display = "";
  document.getElementById("AboutMeWhat").style.display = "none";
}
function displayAboutMeWhat() {
  document.getElementById("AboutMeWho").style.display = "none";
  document.getElementById("AboutMeWhere").style.display = "none";
  document.getElementById("AboutMeWhat").style.display = "";
}
//Project subcategories
function displayProject1() {
  document.getElementById("Project1").style.display = "";
  document.getElementById("Project2").style.display = "none";
  document.getElementById("Project3").style.display = "none";
}
function displayProject2() {
  document.getElementById("Project1").style.display = "none";
  document.getElementById("Project2").style.display = "";
  document.getElementById("Project3").style.display = "none";
}
function displayProject3() {
  document.getElementById("Project1").style.display = "none";
  document.getElementById("Project2").style.display = "none";
  document.getElementById("Project3").style.display = "";
}
//Bunny subcategories
let bunsInterval;
function startBuns() {
  //bunsInterval = window.setInterval(bunPics, 2000);
}
function bunPics() {
  document.getElementById("randomBun").style.animation =
    "fade-both 2s alternate";
  document.getElementById("randomBun").style.display = "block";
  //window.setTimeout(removeBun, 5000);
  function removeBun() {
    document.getElementById("randomBun").style.display = "none";
  }
}
function stopBuns() {
  clearInterval(bunsInterval);
}
function testInterval() {
  console.log("testInterval");
}
