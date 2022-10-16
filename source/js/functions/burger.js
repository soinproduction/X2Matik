import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import vars from '../_vars';
import { elementHeight } from '../functions/customFunctions';

import {addCustomClass} from '../functions/customFunctions'

let mobileMenu = document.querySelector('.mobile-menu');
let burger = [...document.querySelectorAll('.burger')];
const mobileMenuHandler = function( menu, button, body) {
  button.addEventListener('click', function(){
    elementHeight(vars.menu, "menu-height");
    menu.classList.toggle('active');
    button.classList.toggle('active');
    body.classList.toggle('fixed-body');
  })
}

burger.map(function(btn){
  mobileMenuHandler(mobileMenu,btn, vars.bodyEl);
})




