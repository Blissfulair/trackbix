export const     isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    if(bounding.top > ((window.innerHeight)*-1)*0.1)
    return true;
};
export const openMobileMenu = (event,isOpen)=>{
    if(event.target.className === 'inner'){
        isOpen = true
        event.target.parentElement.classList.add('open')
   }
   else if( event.target.className === 'hambuger'){
            isOpen = true
            event.target.classList.add('open')
    }
   else if(event.target.localName === 'span' && event.target.parentElement.className === 'inner'){
        isOpen = true
        event.target.parentElement.parentElement.classList.add('open')
   }
   if(isOpen){
    document.querySelector('.menu').style.opacity = '1'
    document.querySelector('.menu').style.visibility = 'visible';
   }
   return isOpen;
}

export const closeMobileMenu =(event,isOpen)=>{
    if( event.target.className.includes('tbtn') || event.target.className ==='theme-button'){
        isOpen = true
        document.querySelector('.menu').style.opacity = '1'
        document.querySelector('.menu').style.visibility = 'visible';
        return isOpen;
    }
    else{
        isOpen = false
        document.querySelector('.hambuger').classList.remove('open')
        document.querySelector('.menu').style.opacity = '0'
        document.querySelector('.menu').style.visibility = 'hidden';
        return isOpen;
    }
}