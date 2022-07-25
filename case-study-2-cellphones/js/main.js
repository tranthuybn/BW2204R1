// Set height main-carousel-indicator
const hMainCarousel = document.querySelector('.main-carousel').clientHeight
const wMainCarousel = document.querySelector('.main-carousel').clientWidth
const hCarouselInner = document.querySelector('.main-carousel .carousel-inner').clientHeight
const btnControls = document.querySelectorAll('.main-carousel .carousel-control')
const btnCarouselIndis = document.querySelectorAll('.main-carousel .carousel-indicators div')
const textCarouselIndis = document.querySelectorAll('.main-carousel .carousel-indicators span')
const menuFooterItems = document.querySelectorAll('.menu-footer-item')
const boxChoices = document.querySelectorAll('.version')
textCarouselIndis.forEach(function(textCarouselIndi){
    textCarouselIndi.style.width = wMainCarousel / 5 + 'px'
})
// Main-carousel-btn-click-carouselIndicator-into-view
btnCarouselIndis.forEach(function(btnCarouselIndi){
    btnCarouselIndi.addEventListener('click', scrollToView)
})
btnControls.forEach(function(btnControl){
    btnControl.addEventListener('click', scrollToView)
})
function scrollToView(){
    setTimeout(function()
    {
        document.querySelector('.carousel-indicators div.active').scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        })
    }
    , 300)
}

// Set backgroud-color menu-footer-item
let colorList = ['#ffa3a3', '#ffb8b8','#ff94eb', '#e0b3ff','#c6d8fb','#85ffb1','#f5d63d', '#fda363','#ff6666','#96fdb5']
menuFooterItems.forEach(function(menuFooterItem){
    menuFooterItem.style.backgroundColor = colorList.shift()

    // const hex = 'abcdef0123456789'
    // let color = '#'
    // for(var i = 0; i < 6; i++){
    //     color += hex[Math.floor(Math.random()*16)]
    // }
    // menuFooterItem.style.backgroundColor = color
})

// Css actice btn box-choice
boxChoices.forEach(function(boxChoice){
    boxChoice.addEventListener("click", addActive)
    function addActive(){
        let boxChoicesActive = document.querySelector('.version.active')
        if(boxChoicesActive){
            if(boxChoice.classList.contains("active")){
            } else{
                boxChoice.classList.add("active")
                boxChoicesActive.classList.remove("active")
            }
        }
    }
})
