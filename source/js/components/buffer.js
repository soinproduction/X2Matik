const parrent = [...document.querySelectorAll('.buffer')];

function copyFunction(textInput) {
  textInput.select();
  document.execCommand("copy");
  // alert("Copied the text: " + textInput.value);
}

parrent.map(function(item){
  const currentInput =  item.querySelector('.buffer__input');
  const currentButton =  item.querySelector('.buffer__button');
  currentButton.addEventListener('click', () => copyFunction(currentInput))
});


