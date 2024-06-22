let currentSlide = 0
const slidesLength = 4

let currentColumn = 1
const columnLegnth = 2

function goToColumn(column){
    currentColumn=column
    document.querySelector(`.horizontalWraper`).style.transform=`translateX(-${column*100}%)`
}
function goToSlide(slide,dir){
        const dest = slide/(slidesLength+1)
        // animateChars(`slide${slide+1}QuoteText`)
        document.querySelector(`.slidesWraper`).style.transform=`translateY(-${dest*100}%)`
        

}
window.addEventListener("keydown", (event) => {
    if((event.key==='ArrowDown'||event.key==='ArrowUp')&&currentColumn===1){
        event.preventDefault(); 
        if(event.key==='ArrowDown'&&currentSlide!==slidesLength){
            goDown()
        }else if(event.key==='ArrowUp'&&currentSlide!==0){
            goUp()
        }
    }
    if(event.key==='ArrowLeft'||event.key==='ArrowRight'){
        event.preventDefault();
        if(event.key==='ArrowRight'&&currentColumn<2){
            currentColumn++
            goToColumn(currentColumn)
    }else{
        if(event.key==='ArrowLeft'&&currentColumn>0){
            currentColumn--
            goToColumn(currentColumn)
        }
    }
    }

});
window.addEventListener("wheel", (event) => {
    event.preventDefault();
    if(event.deltaY<0&&currentSlide!==0){
        currentSlide--
        goToSlide(currentSlide)
    }else if(event.deltaY>0&&currentSlide!==slidesLength){
        currentSlide++
        goToSlide(currentSlide)
    }
});

function goUp(){
    if(currentSlide!==0){
        currentSlide--
        goToSlide(currentSlide)
    }
}
function goDown(){
    if(currentSlide!==slidesLength){
        currentSlide++
        goToSlide(currentSlide)
    }
}
function animateChars(target){
    const quote1 = document.getElementById(target)
    const quote1Text = quote1.textContent
    quote1.innerHTML=''
    for(let i=0;i<quote1Text.length;i++){
        quote1.innerHTML += '<span class="flyingChar">' + (quote1Text[i] == ' ' ? '&nbsp;' : quote1Text[i])+ '</span>';
    }
    let animationDelay = 20
    
    for(let i = 0; i < quote1.children.length; i++)
        {
            quote1.children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }
    
}
animateChars('slide1QuoteText')