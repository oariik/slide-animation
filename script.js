const container = document.querySelector('.images');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let counter = 0;

nextBtn.addEventListener('click' , nextSlide);
prevBtn.addEventListener('click' , prevSlide);


function nextSlide(){

    
    counter++;
    container.style.backgroundImage = `url(img/bcg-${counter}.png`
}


function prevSlide(){
    
    counter--;
    container.style.backgroundImage = `url(img/bcg-${counter}.png`
}