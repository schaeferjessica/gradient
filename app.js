// global selections and variables 
const colorDivs = document.querySelectorAll('.color');
const generateButton = document.querySelector('.generate');
const slider = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll('.color h2')

// functions

// hex generator
function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
}

function randomColors(){
  colorDivs.forEach((div,index) =>{
    const hexH2 = div.children[0];
    const randomColor = generateHex();

    // add the color to the background 
    div.style.backgroundColor = randomColor;
    hexH2.innerText = randomColor;
    // check for contrast
    checkTextContrast(randomColor, hexH2);
  });
}

function checkTextContrast(color,text) {
  const luminance = chroma(color).luminance();
  if(luminance > 0.5){
    text.style.color = "black";
  } else {
    text.style.color = "white";
  }
}

randomColors();
