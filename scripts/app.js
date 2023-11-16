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
