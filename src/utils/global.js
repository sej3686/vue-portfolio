// function initializeMenu() {
//     const hamMenu = document.querySelector(".ham-menu");
//     const offScreenMenu = document.querySelector(".off-screen-menu");
  
//     if (hamMenu && offScreenMenu) {
//       // Fjern tidligere aktive klasser
//       hamMenu.classList.remove("activee");
//       offScreenMenu.classList.remove("activee");
  
//       // Tilføj klik-eventlistener til hamburger menu
//       hamMenu.addEventListener("click", () => {
//         console.log("Hamburger menu clicked");
//         hamMenu.classList.toggle("activee");
//         offScreenMenu.classList.toggle("activee");
//       });
  
//       // Luk menuen, hvis der klikkes på et link
//       const offScreenTexts = document.querySelectorAll(".off-screen-menu-text a");
//       offScreenTexts.forEach((offScreenText) => {
//         offScreenText.addEventListener("click", () => {
//           hamMenu.classList.remove("activee");
//           offScreenMenu.classList.remove("activee");
//         });
//       });
  
//       console.log("Menu initialized");
//     } else {
//       console.error("Menu elements not found in DOM");
//     }
//   }
  
//   // Lyt til DOMContentLoaded for første indlæsning
//   document.addEventListener("DOMContentLoaded", () => {
//     console.log("DOMContentLoaded event fired");
//     initializeMenu();
//   });
  
//   // Lyt til pageshow for at håndtere bfcache
//   window.addEventListener("pageshow", (event) => {
//     console.log("Pageshow event fired", event.persisted);
//     if (event.persisted) {
//       initializeMenu();
//     }
//   });