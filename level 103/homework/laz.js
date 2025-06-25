document.getElementById('incrementBtn').onclick = function () {
  const counter = document.getElementById('counter');
  counter.textContent = parseInt(counter.textContent) + 1;
};

const hoverImage = document.getElementById('hoverImage');
hoverImage.onmouseover = function () {
  hoverImage.style.width = '200px';
};
hoverImage.onmouseout = function () {
  hoverImage.style.width = '150px';
};

const revealPara = document.getElementById('revealPara');
const hiddenBox = document.getElementById('hiddenBox');
revealPara.onmouseover = () => hiddenBox.style.display = 'block';
revealPara.onmouseout = () => hiddenBox.style.display = 'none';

document.body.onmousedown = () => document.body.style.backgroundColor = '#ececec';
document.body.onmouseup = () => document.body.style.backgroundColor = 'white';

const togglePara = document.getElementById('clickToggle');
const hiddenContent = document.getElementById('hiddenContent');
togglePara.onclick = () => {
  hiddenContent.style.display = hiddenContent.style.display === 'block' ? 'none' : 'block';
};

document.getElementById('addElement').onclick = () => {
  const newPara = document.createElement('p');
  newPara.textContent = 'New paragraph added!';
  document.getElementById('dynamicDiv').appendChild(newPara);
};

document.querySelectorAll('.deleteBtn').forEach(btn => {
  btn.onclick = function () {
    this.parentElement.remove();
  };
});

const swapPara = document.getElementById('swapPara');
swapPara.onmouseover = () => {
  const newP = document.createElement('p');
  newP.textContent = 'I was swapped!';
  swapPara.replaceWith(newP);
};

const mainPhoto = document.getElementById('mainPhoto');
document.getElementById('switchImage').onclick = () => {
  mainPhoto.src = 'https://via.placeholder.com/100/0000FF/ffffff';
};