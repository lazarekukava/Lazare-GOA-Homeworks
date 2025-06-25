const parent = document.getElementById('parent');
const child = document.getElementById('child');
parent.appendChild(child);

const removeParent = document.getElementById('remove-parent');
const removePara = document.getElementById('remove-me');
removeParent.removeChild(removePara);

const hoverBtn = document.getElementById('hoverBtn');
hoverBtn.onmouseover = function () {
  console.log(5);
};
hoverBtn.onmouseout = function () {
  console.log(10);
};

const container = document.getElementById('replace-container');
const oldBtn = document.getElementById('to-be-replaced');
const newPara = document.createElement('p');
newPara.textContent = 'I have replaced the button';
container.replaceChild(newPara, oldBtn);