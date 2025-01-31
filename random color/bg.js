// document.getElementById("Btn").addEventListener("click",()=> {
//     const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = randomColor;
//     });

function changebg() {
    let r = Math.trunc(Math.random() * 256);
    let g = Math.trunc(Math.random() * 256);
    let b = Math.trunc(Math.random() * 256);
    let bodybg = document.querySelector('body');
    bodybg.style.cssText = `background-color: rgb(${r},${g},${b})`;
    let headerbg = document.querySelector('h1');
    headerbg.innerHTML= `rgb(${r},${g},${b})`;
}