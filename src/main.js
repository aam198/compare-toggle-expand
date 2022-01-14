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

// Steps container to change images based on scroll position but i want the image to change based on id on the left. 

console.log(stepLefts.length);

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7
};

function handleIntersection(entries,observer){
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.replace('fade-out', 'active')
    }
    else{
      entry.target.classList.replace('active', 'fade-out');
    }
  })
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

stepLefts.forEach((step) => observer.observe(step));

// function handleIntersection(entries,observer){
//   entries.forEach((entry) => {
//     if(entry.isIntersecting){
//       console.log(activeImg);
//       // stepLefts.forEach(step => {
//       //   step.classList.remove('active');
//       // })
//       stepLefts[activeImg].classList.add('active');
//       activeImg++;
//     }
//     else{

//     }
//   })
// };

// function setActiveImg() {
//   stepLefts.forEach(step => {
//     step.classList.remove('active');
//   })
//   stepLefts[activeImg].classList.add('active');
//   activeImg++;
// }





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