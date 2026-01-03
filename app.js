//step 1: get DOM           
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item'); 
let timeDom = document.querySelector('.carousel .time');


thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 2000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');

        
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');

    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

}

//   new buttton 
const btn = document.getElementById("magicBtn");

btn.addEventListener("click", (e) => {
  // Ripple effect
  const ripple = document.createElement("span");
  ripple.style.position = "absolute";
  ripple.style.left = `${e.offsetX}px`;
  ripple.style.top = `${e.offsetY}px`;
  ripple.style.width = "10px";
  ripple.style.height = "10px";
  ripple.style.background = "rgba(255,255,255,0.7)";
  ripple.style.borderRadius = "50%";
  ripple.style.transform = "scale(0)";
  ripple.style.animation = "ripple 600ms linear";
  btn.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);

  // Loading animation
  btn.classList.add("loading");

  setTimeout(() => {
    btn.classList.remove("loading");
    alert("Action completed 🚀");
  }, 2000);
});

// Ripple animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes ripple {
  to {
    transform: scale(25);
    opacity: 0;
  }
}`;
document.head.appendChild(style);

    