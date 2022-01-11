const toggleBtn = document.getElementById("toggleBtn");
const expandBtn = document.getElementById("expandBtn");
const cardOne = document.getElementById("card-one");
const cardTwo = document.getElementById("card-two");
const compareContainer = document.querySelector(".compare-container");
const wrapper=document.querySelector(".wrapper");
const expanded = document.querySelector(".expanded");
const stepLefts = document.querySelectorAll(".step-left");
const stepRights = document.querySelectorAll(".step-right");

let activeImg = 0;


function sideBySide() {

  const hideCheck1 = cardOne.classList;
  const hideCheck2 = cardTwo.classList;

  if(hideCheck1.contains('hidden')){
    hideCheck1.remove('hidden');
  }

  if(hideCheck2.contains('hidden')){
    hideCheck2.remove('hidden');
  }

  if(cardTwo.classList.contains('expand-Img-2') ||      cardOne.classList.contains('expand-Img-1')) {
    cardOne.classList.toggle('expand-Img-1');
    cardTwo.classList.toggle('expand-Img-2');
    toggleBtn.disabled=false;
    expandBtn.innerHTML="Expand";
    cardTwo.classList.add('hidden');
  }
  else {
    expandBtn.innerHTML="Collapse";
    cardOne.classList.add('expand-Img-1');
    cardTwo.classList.add('expand-Img-2');
  }
}

// Steps container to change images based on scroll position but i want when it runs to an id 

console.log(stepLefts.length);

function handleIntersection(entries) {
  entries.map((entry) => {
    if(entry.isIntersecting){
      activeImg++;
      console.log(activeImg);
      if(activeImg > stepLefts.length-1){
        activeImg = 0;
      }
      else if(activeImg < 0){
        activeImg = slides.length-1;
      }
      setActiveImg();
    }
  })
}

function setActiveImg() {
  stepLefts.forEach(step => {
    step.classList.remove('active');
  })
  stepLefts[activeImg].classList.add('active');
}


window.addEventListener("load", (event) => {
  const observer = new IntersectionObserver(handleIntersection);
  stepRights.forEach((step) => observer.observe(step));
});

// stepActive();

// function stepActive() {
//   const triggerImage = window.innerHeight/5*4;

//   stepLefts.forEach(stepLeft => {
//     const stepTop = stepLeft.getBoundingClientRect().top;

//     if (stepTop < triggerImage){
//       stepLeft.classList.add('active');
//     }
//     else {
//       stepLeft.classList.remove('active');
//     }
//   })
// }





// Event Listeners

// For Toggle in first section
toggleBtn.addEventListener('click', () => {
  cardTwo.classList.toggle('hidden');
  cardOne.classList.toggle('hidden');
});

// Expand & Collapse 
expandBtn.addEventListener('click', () => {
  toggleBtn.disabled=true;
  compareContainer.classList.toggle('expanded');
  sideBySide();
});

// Steps section
// window.addEventListener('scroll', stepActive);