/***********************Citation************************************************************************************

  WEB CIFAR. (2020). One Page Full Website Project For Practice | HTML & CSS Responsive Website | Web Cifar 2020. 
Retrieved July 1, 2020, from https://www.youtube.com/watch?v=ZFQkb26UD1Y

*******************************************************************************************************************/


const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header .container');
//const click = document.querySelector('.header .nav-bar .nav-list ul li');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
/*
click.addEventListener('click',()=>{
    click.classList.toggle('active');
});
*/

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});