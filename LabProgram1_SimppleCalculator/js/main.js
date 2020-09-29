const calcScreen = document.getElementById("calculatorscreen");

const updatescreen = (ele) => {

  let clickedchar = ele.innerText;
  if(clickedchar === "Clear"){
    calcScreen.value = calcScreen.value.slice(0,calcScreen.value.length -1);
  }
  else if(clickedchar === "="){
    calcScreen.value = eval(calcScreen.value);
  }
  else{
    calcScreen.value += clickedchar;
  }
}
