////Error Page
let errorPage = document.getElementById("404");
let alertPOP = document.getElementById('alert')
errorPage.addEventListener('mouseover' , ()=> {
   alertPOP.style.display = "flex";
}) 
errorPage.addEventListener('mouseout' , ()=> {
   alertPOP.style.display = "none";
}) 