let img = document.getElementById("screen");
let original = img.getAttribute('src');

function hover(element, file) {
    
    img.style.animation = 'opacity-img 1.25s';
    img.setAttribute('src', file);
  }
  
function unhover(element) {
    img.style.animation = '';
    img.setAttribute('src', original);
}


