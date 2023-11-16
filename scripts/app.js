function displayAboutMe() {
  document.getElementById("AboutMe").style.display = "";
  document.getElementById("Cats").style.display = "none";
  document.getElementById("Projects").style.display = "none";
}
function displayProjects() {
  document.getElementById("AboutMe").style.display = "none";
  document.getElementById("Projects").style.display = "";
  document.getElementById("Cats").style.display = "none";
}
function displayCat() {
  document.getElementById("AboutMe").style.display = "none";
  document.getElementById("Projects").style.display = "none";
  document.getElementById("Cats").style.display = "";
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
//Cats subcategories
let catsInterval;
function startCats() {
  catsInterval = window.setInterval(catPics, 2000);
}
function catPics() {
  document.getElementById("randomCat").style.animation =
    "fade-both 2s alternate";
  document.getElementById("randomCat").style.display = "block";
  //window.setTimeout(removeCat, 5000);
  function removeCat() {
    document.getElementById("randomCat").style.display = "none";
  }
}
function stopCats() {
  clearInterval(catsInterval);
}
function testInterval() {
  console.log("testInterval");
}
