const toggleBtn = document.getElementById("toggleBtn");
const expandBtn = document.getElementById("expandBtn");
const cardOne = document.getElementById("card-one");
const cardTwo = document.getElementById("card-two");
const compareContainer = document.querySelector(".compare-container");


function sideBySide() {
  if(cardTwo.classList.contains('expand-Img') || cardOne.classList.contains('expand-Img')) {
    cardOne.classList.toggle('expand-Img');
    cardTwo.classList.toggle('expand-Img');
    compareContainer.style.display="block";
    toggleBtn.disabled=false;
    expandBtn.innerHTML="Expand";
  }
  else{
    expandBtn.innerHTML="Collapse";
    cardOne.classList.toggle('expand-Img');
    cardTwo.classList.toggle('expand-Img');
  }
}

toggleBtn.addEventListener('click', () => {
  cardTwo.classList.toggle('hidden');
  cardOne.classList.toggle('hidden');
});



expandBtn.addEventListener('click', () => {
  toggleBtn.disabled=true;
  compareContainer.style.display ="flex";
  sideBySide();
});