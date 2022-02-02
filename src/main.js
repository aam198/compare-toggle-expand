const toggleBtn = document.getElementById("toggleBtn");
const expandBtn = document.getElementById("expandBtn");
const cardOne = document.getElementById("card-one");
const cardTwo = document.getElementById("card-two");
const compareContainer = document.querySelector(".compare-container");
const wrapper=document.querySelector(".wrapper");
const expanded = document.querySelector(".expanded");
const stepLefts = document.querySelectorAll(".step-left");
const stepRights = document.querySelectorAll(".step-right");
const paginateItem = document.querySelectorAll(".pagination-item");

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

function handleIntersection(entries,observerOptions){
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      console.log(entry.target);
      entry.target.classList.replace('fade-out', 'active')
      if(entry.target.classList.contains("active")){
        console.log("is active at this point")
        if(entry.target.classList.contains("image-1")){
          paginateItem[0].style.background="var(--color-red)";
        }
        else{
          paginateItem[0].style.background="";
        }
        if(entry.target.classList.contains("image-2")){
          paginateItem[1].style.background="var(--color-red)";
        }
        else{
          paginateItem[1].style.background="";
        }
        if(entry.target.classList.contains("image-3")){
          paginateItem[2].style.background="var(--color-red)";
        }
        else{
          paginateItem[2].style.background="";
        }
        if(entry.target.classList.contains("image-4")){
          paginateItem[3].style.background="var(--color-red)";
        }
        else{
          paginateItem[3].style.background="";
        }
        if(entry.target.classList.contains("image-5")){
          paginateItem[4].style.background="var(--color-red)";
        }
        else{
          paginateItem[4].style.background="";
        }
      }
    }
    else{
      entry.target.classList.replace('active', 'fade-out');

    }
  })
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

stepLefts.forEach((step) => observer.observe(step));






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