const toggleBtn = document.getElementById("toggleBtn");
const expandBtn = document.getElementById("expandBtn");
const cardOne = document.getElementById("card-one");
const cardTwo = document.getElementById("card-two");
const compareContainer = document.querySelector(".compare-container");
const wrapper=document.querySelector(".wrapper");



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
    compareContainer.style.display="block";
    toggleBtn.disabled=false;
    expandBtn.innerHTML="Expand";
    cardTwo.classList.add('hidden');
    wrapper.style.padding= 2 + "rem";
  }
  else {
    expandBtn.innerHTML="Collapse";
    cardOne.classList.add('expand-Img-1');
    cardTwo.classList.add('expand-Img-2');
    wrapper.style.padding= 1 + "rem";
    compareContainer.style.width= 100 + "%";
  }
}

// Event Listeners

toggleBtn.addEventListener('click', () => {
  cardTwo.classList.toggle('hidden');
  cardOne.classList.toggle('hidden');
});

expandBtn.addEventListener('click', () => {
  toggleBtn.disabled=true;
  compareContainer.style.display ="flex";
  sideBySide();
});