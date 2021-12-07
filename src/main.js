const toggleBtn = document.getElementById("toggleBtn");
const expandBtn = document.getElementById("expandBtn");
const cardOne = document.getElementById("card-one");
const cardTwo = document.getElementById("card-two");
const compareContainer = document.querySelector(".compare-container");


function sideBySide() {
  if(cardTwo.classList.contains('expand-Img') || cardOne.classList.contains('expand-Img')) {
    cardOne.classList.remove('expand-Img');
    cardTwo.classList.remove('expand-Img');
    compareContainer.style.display="block";
    toggleBtn.disabled=false;
    cardTwo.classList.add('hidden');
  }
  else{
    compareContainer.style.display ="flex";
    cardOne.classList.add('expand-Img');
    cardTwo.classList.remove('hidden');
    cardTwo.classList.add('expand-Img');
  }
}


toggleBtn.addEventListener('click', () => {
  if(cardTwo.classList.contains('hidden')) {
    cardTwo.classList.remove('hidden');
    cardOne.classList.add('hidden');
  }
  else {
    cardTwo.classList.add('hidden');
    cardOne.classList.remove('hidden');
  }
});

expandBtn.addEventListener('click', () => {
  toggleBtn.disabled=true;
  expandBtn.innerHTML="Collapse";
  sideBySide();
});