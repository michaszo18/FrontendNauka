window.onload = function()
{
   var toTopButton = document.getElementById("dogory");
   toTopButton.onclick = function()
   {
       window.scrollBy(0, -1 * window.pageYOffset);
   };
};