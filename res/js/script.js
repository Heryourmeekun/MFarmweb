let hamburger_menu = document.querySelector(".hamburger_menu");
let dropdown_menu = document.querySelector("#dropdown_menu");
let body = document.body;

function Ham() {
      dropdown_menu.classList.toggle("menu");
      body.classList.toggle('bodyScrollbarToggle')
}


let duct = document.querySelector(" .product1");
let down_menu = document.querySelector("#food");
 
function product() {
      down_menu.classList.toggle("menu2");

}

window.onclick = (ev) => {
  if (!ev.target.matches(".hamburger_menu")) {
    let menus = document.getElementsByClassName("menu");
    var i;
    for (i = 0; i < menus.length; i++) {
      var openMenu = menus[i];
      if (openMenu.classList.contains("menu")) {
        openMenu.classList.remove("menu");
      }
    }
  }
};

// window.onmouseover = (ev) => {
//   if (!ev.target.matches(".product1")) {
//     let menus = document.getElementsByClassName("menu2");
//     var i;
//     for (i = 0; i < menus.length; i++) {
//       var openMenu = menus[i];
//       if (openMenu.classList.contains("menu2")) {
//         openMenu.classList.remove("menu2");
//       }
//     }
//   }
// };
window.onclick = (ev) => {
  if (!ev.target.matches(".product1")) {
    let menus = document.getElementsByClassName("menu2");
    var i;
    for (i = 0; i < menus.length; i++) {
      var openMenu = menus[i];
      if (openMenu.classList.contains("menu2")) {
        openMenu.classList.remove("menu2");
      }
    }
  }
};