let arr = [];

generateBlock = () => {
  const randonNumber = number.value;//Math.floor(Math.random() * 100);
  const randomId = Math.random();
  arr.push(randonNumber);
  creatEl(randonNumber, randomId);
}

creatEl = (acceptedNumber, acceptedId) => {
  const divBlok = document.createElement("div");
  divBlok.id = acceptedId;
  divBlok.innerHTML = acceptedNumber;
  const deleteBlock = document.createElement("button");
  deleteBlock.setAttribute("onclick", `deleteNumber(${acceptedId}, ${acceptedNumber})`)
  deleteBlock.setAttribute("class", "deleteButton");
  deleteBlock.innerHTML = "x";

  divBlok.appendChild(deleteBlock);

  document.getElementById("foot").appendChild(divBlok);
}

deleteNumber = (acceptedId,acceptedNum) => {
  const deletable = document.getElementById(acceptedId);
  deletable.remove();
  const deletableId = arr.findIndex((item) => item == acceptedNum);
  arr.splice(deletableId,1)
}

sort = () => {
  arr.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("foot").innerHTML = " ";
  let emptyVar = ``;
  for (i = 0; i < arr.length; i++) {
    emptyVar = emptyVar + creatEl(arr[i], i);
  }
}