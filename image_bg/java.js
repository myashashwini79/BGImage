let images=document.getElementsByTagName("img");
for(let i=0;i< images.length;i++) {
    images[i].addEventListener('click',()=> {
        document.querySelector('body').style.cssText =`background-image:url("${images[i].src}");
        backlground-repeat: no-repeat;
        background-size: cover; `;
    });
}