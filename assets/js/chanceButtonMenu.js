const menuButton = document.querySelector('.button-menu-mobile')

menuButton.addEventListener('click', ()=>{
    const classBody = document.body.classList
    const itemsMenu = document.querySelectorAll('.menu-list-item-mobile')
    const buttonImg = document.querySelector('.button-menu-mobile img')
    const findClass = /show-mobile-menu/
    if(findClass.test(classBody)){
        chanceButtonAndRemoveClass()
    }else{
        chanceButtonAndAddClass()
    }

    for(const item of itemsMenu){
        item.addEventListener('click', chanceButtonAndRemoveClass)
    
    }
    function chanceButtonAndRemoveClass(){
        classBody.remove('show-mobile-menu')
        buttonImg.src = './assets/img/hamburger-menu.svg'
        
    }
    function chanceButtonAndAddClass(){
        classBody.add('show-mobile-menu')
        buttonImg.src = './assets/img/close.svg'
        
    }
})