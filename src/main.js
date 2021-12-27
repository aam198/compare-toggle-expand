const toggleBtn = document.getElementById("toggleBtn");
const expandBtn = document.getElementById("expandBtn");
const cardOne = document.getElementById("card-one");
const cardTwo = document.getElementById("card-two");
const compareContainer = document.querySelector(".compare-container");


function sideBySide() {
  if(cardTwo.classList.contains('expand-Img-2') || cardOne.classList.contains('expand-Img-1')) {
    cardOne.classList.toggle('expand-Img-1');
    cardTwo.classList.toggle('expand-Img-2');
    compareContainer.style.display="block";
    toggleBtn.disabled=false;
    expandBtn.innerHTML="Expand";
  }
  else{
    expandBtn.innerHTML="Collapse";
    cardOne.classList.toggle('expand-Img-1');
    cardTwo.classList.toggle('expand-Img-2');
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