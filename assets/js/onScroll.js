document.addEventListener('scroll', ()=>{
    const bodyElement = document.querySelector('body')
    if(scrollY >= 881){
        bodyElement.classList.add('show-menu')
    }else{
        bodyElement.classList.remove('show-menu')
    }
})