/*
      window.pageYOffset;
      window.scrollBy(xaxis, yaxis);
 */

window.onload = function()
{
   var toTopButton = document.getElementById("toTopButton");
   toTopButton.onclick = function()
   {
       window.scrollBy(0, -1 * window.pageYOffset);
   };
   var toTopButton = document.getElementById("tekst");
   toTopButton.onclick = function()
   {
       window.scrollBy(0, 3000);
   };
};



