/***********************Citation************************************************************************************

  WEB CIFAR. (2020). One Page Full Website Project For Practice | HTML & CSS Responsive Website | Web Cifar 2020. 
Retrieved July 1, 2020, from https://www.youtube.com/watch?v=ZFQkb26UD1Y

  Ania Kubow. (2021). Typewriter Effect in JavaScript (super simple!). YouTube. 
Retrieved January 15, 2022, from https://www.youtube.com/watch?v=mULM6KcF_mo. 

  Tyler Potts. (2020). Awesome Card Flip Animation using Css &amp; JavaScript - Easy tutorial. YouTube. 
Retrieved January 15, 2022, from https://www.youtube.com/watch?v=QGVXmoZWZuw. 

*******************************************************************************************************************/

/* Main Effect */
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header .container');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
/*
document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});
*/
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

/* End Main Effect */

/* Flip-Card Effect */

const card1 = document.querySelector(".card__inner1");

card1.addEventListener("click", function (e) {
  card1.classList.toggle('is-flipped');
});

const card2 = document.querySelector(".card__inner2");

card2.addEventListener("click", function (e) {
  card2.classList.toggle('is-flipped');
});

const card3 = document.querySelector(".card__inner3");

card3.addEventListener("click", function (e) {
  card3.classList.toggle('is-flipped');
});

const card4 = document.querySelector(".card__inner4");

card4.addEventListener("click", function (e) {
  card4.classList.toggle('is-flipped');
});

/* End Flip-Card Effect */


/* Typewriter Effect */

const textDisplay = document.getElementById('text')
const phrases = ['Hello, my name is Ray.', 'I am a Software Developer.', 'I look forward to working with you in the near future!']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop() {
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j--
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (j == phrases[i].length) {
            isEnd = true
            isDeleting = true
        }

        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++
            if (i == phrases.length) {
                i = 0
            }
        }

    }
    const spedUp = Math.random() * (80 - 50) + 50
    const normalSpeed = Math.random() * (300 - 200) + 200
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
}

loop()



/* End TypeWriter Effect */
