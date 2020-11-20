//Typing Effext//

const typing = document.querySelector('.typing')
const texts = [ 'Mikheil', 'Freelancer', 'Web-Developer' ]

let counter = 0;
let index = 0;
let currentText = '';
let leter = '';

(function type(){
    if(counter === texts.length){
        counter = 0;
    }
    currentText = texts[counter];
    leter = currentText.slice(0, ++index);
    
    document.querySelector('.typing').textContent = leter;
    if(leter.length === currentText.length){
        counter++;
        index = 0;
    }
    setTimeout(type, 300)
})();
console.log('fafafa')



// time//

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


// scroll
const topLink = document.querySelector(".scroll-top");

window.addEventListener("scroll",  ()=> {
    const scrollHeight = window.pageYOffset;
  
    if (scrollHeight > 500) {
  
      topLink.classList.add("show-top");
    } else {
      topLink.classList.remove("show-top");
    }
  });
  
  topLink.addEventListener("click", ()=>{
      window.scrollTo({
          top:0,
          left:0,
          behavior: "smooth"
      });
  
  });



const scrollLinks =  document.querySelectorAll(".nav-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log(id);
    const element = document.getElementById(id);
    console.log(id);
    menu.classList.remove("show")
    hamburgerMenu.classList.remove("none")
    contentMain.classList.remove("none")
    showClose.classList.remove("showClose")

    let position = element.offsetTop;
   
    console.log(position);
    
    

    window.scrollTo({
        top: position,
        left:0,
        behavior: "smooth"
    });
  });
});

const scrollDown =  document.querySelector('.scroll-down');

console.log(scrollDown);

scrollDown.addEventListener("click", ()=>{
    window.scrollTo({
        top:1054,
        left:0,
        behavior: "smooth"
    });

});



// navbar//

let hamburgerMenu = document.querySelector(".hamburger-menu");
// let closeButton = document.querySelector(".close");
let menu = document.querySelector(".menu")
let showClose = document.querySelector(".close")
let contentMain = document.querySelector(".main-content")



let showMenu = false;


    hamburgerMenu.addEventListener('click', toggle);
    showClose.addEventListener('click', toggle);

function toggle() {
    if (!showMenu) {
        menu.classList.add("show")
        hamburgerMenu.classList.add("none")
        showClose.classList.add("showClose")
        contentMain.classList.add("none")
        showMenu = true;
    }else {
        menu.classList.remove("show")
        hamburgerMenu.classList.remove("none")
        showClose.classList.remove("showClose")
        contentMain.classList.remove("none")
        showMenu = false;
      }
  
}

