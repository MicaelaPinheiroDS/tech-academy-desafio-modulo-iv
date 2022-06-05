const windowCodeAnimation = document.querySelector('.function-hello-world')
const barBlockCodingImg = document.querySelector('.bar-block-coding-img')
const checkSizes = () =>{
    const elementSYyels = window.getComputedStyle(windowCodeAnimation)
    const contentSize = elementSYyels.getPropertyValue('width') 
    barBlockCodingImg.style.width = contentSize 
}
setInterval(checkSizes, 250)