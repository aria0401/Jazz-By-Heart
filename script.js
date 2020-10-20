 window.addEventListener("load", sidenVises);





 function sidenVises() {

     console.log("siden vises");

     document.querySelector("#burgermenu_knap").addEventListener("click", clickMenu);



 }





 function clickMenu() {

     console.log("clickMenu");

     document.querySelector("#burgermenu_background").classList.toggle("hidden");



     if (document.querySelector("#burgermenu_knap").classList.contains("open")) {

         document.querySelector("#burgermenu_knap").classList = "closed";

     } else {

         document.querySelector("#burgermenu_knap").classList = "open";

     }

 }
