// U&P Hamburger Menu
const unp_burger_menu = document.getElementById('unp_burger_menu');
const unp_menu = document.getElementById('unp_menu');

unp_burger_menu.addEventListener('click', (e) => {
  unp_burger_menu.classList.toggle('change');
  unp_menu.classList.toggle('shown');
});


// Animation on Each Menu Item on entrance

function animateMenu_1() {  
  const menu_item_1 = document.getElementById('menu_item_1')
  // menu_item_1.style.borderBottom = "5px solid #ff003d";
  menu_item_1.style.color = "#ff003d";
  // menu_item_1.style.paddingBottom = "10px";
  menu_item_1.style.transitionDuration = "0.5s";
}

function deAnimateMenu_1() {  
  const menu_item_1 = document.getElementById('menu_item_1')
  // menu_item_1.style.borderBottom = "5px solid transparent";
  menu_item_1.style.color = "#67686A";
  menu_item_1.style.paddingBottom = "0";
  menu_item_1.style.transitionDuration = "0.5s";
}

function animateMenu_2() {  
  const menu_item_2 = document.getElementById('menu_item_2')
  // menu_item_2.style.borderBottom = "5px solid #ffe500";
  // menu_item_2.style.paddingBottom = "10px";
  menu_item_2.style.color = "#ffe500";
  menu_item_2.style.transitionDuration = "0.5s";
}

function deAnimateMenu_2() {  
  const menu_item_2 = document.getElementById('menu_item_2')
  // menu_item_2.style.borderBottom = "5px solid transparent";
  menu_item_2.style.color = "#67686A";
  menu_item_2.style.paddingBottom = "0";
  menu_item_2.style.transitionDuration = "0.5s";
}

function animateMenu_3() {  
  const menu_item_3 = document.getElementById('menu_item_3')
  // menu_item_3.style.borderBottom = "5px solid #589bff";
  // menu_item_3.style.paddingBottom = "10px";
  menu_item_3.style.color = "#589bff";
  menu_item_3.style.transitionDuration = "0.5s";
}

function deAnimateMenu_3() {  
  const menu_item_3 = document.getElementById('menu_item_3')
  // menu_item_3.style.borderBottom = "5px solid transparent";
  menu_item_3.style.color = "#67686A";
  menu_item_3.style.paddingBottom = "0";
  menu_item_3.style.transitionDuration = "0.5s";
}

function animateMenu_4() {  
  const menu_item_4 = document.getElementById('menu_item_4')
  // menu_item_4.style.borderBottom = "5px solid #ff8440";
  // menu_item_4.style.paddingBottom = "10px";
  menu_item_4.style.color = "#ff8440";
  menu_item_4.style.transitionDuration = "0.5s";
}

function deAnimateMenu_4() {  
  const menu_item_4 = document.getElementById('menu_item_4')
  // menu_item_4.style.borderBottom = "5px solid transparent";
  menu_item_4.style.color = "#67686A";
  menu_item_4.style.paddingBottom = "0";
  menu_item_4.style.transitionDuration = "0.5s";
}

function animateMenu_5() {  
  const menu_item_5 = document.getElementById('menu_item_5')
  // menu_item_5.style.borderBottom = "5px solid #e63d70";
  // menu_item_5.style.paddingBottom = "10px";
  menu_item_5.style.color = "#e63d70";
  menu_item_5.style.transitionDuration = "0.5s";
}

function deAnimateMenu_5() {  
  const menu_item_5 = document.getElementById('menu_item_5')
  // menu_item_5.style.borderBottom = "5px solid transparent";
  menu_item_5.style.color = "#67686A";
  menu_item_5.style.paddingBottom = "0";
  menu_item_5.style.transitionDuration = "0.5s";
}

function animateMenu_6() {  
  const menu_item_6 = document.getElementById('menu_item_6')
  // menu_item_6.style.borderBottom = "5px solid #6bffe4";
  // menu_item_6.style.paddingBottom = "10px";
  menu_item_6.style.color = "#6bffe4";
  menu_item_6.style.transitionDuration = "0.5s";
}

function deAnimateMenu_6() {  
  const menu_item_6 = document.getElementById('menu_item_6')
  // menu_item_6.style.borderBottom = "5px solid transparent";
  menu_item_6.style.color = "#67686A";
  menu_item_6.style.paddingBottom = "0";
  menu_item_6.style.transitionDuration = "0.5s";
}

setTimeout(animateMenu_1, 5000);
setTimeout(deAnimateMenu_1, 6000); 

setTimeout(animateMenu_2, 6000);
setTimeout(deAnimateMenu_2, 7000); 

setTimeout(animateMenu_3, 7000);
setTimeout(deAnimateMenu_3, 8000); 

setTimeout(animateMenu_4, 8000);
setTimeout(deAnimateMenu_4, 9000); 

setTimeout(animateMenu_5, 9000);
setTimeout(deAnimateMenu_5, 10000); 

setTimeout(animateMenu_6, 10000);
setTimeout(deAnimateMenu_6, 11000); 


