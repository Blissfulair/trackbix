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

export const closeMobileMenu =(isOpen)=>{
    isOpen = false
    document.querySelector('.hambuger').classList.remove('open')
    document.querySelector('.menu').style.opacity = '0'
    document.querySelector('.menu').style.visibility = 'hidden';
    return isOpen;
}

export const openTab = (e)=>{
    if(e.target.parentElement.className === 'tab-title'){
        const open = e.target.parentElement.parentElement.classList[1];
        console.log(open)
        const tab =  e.target.parentElement.parentElement.querySelector('.tab-body');
        if(open === 'open')
        {
            tab.style.display = "none";
            e.target.parentElement.parentElement.classList.remove('open')
            e.target.parentElement.parentElement.classList.add('close');
        }
        else if(open === 'close'){
            tab.style.display = "block";
            e.target.parentElement.parentElement.classList.add('open')
        }
    }
    // else if(e.target.className === 'tab'){
    //     e.target.querySelector('.tab-body').style.display = "block";
    //     return true;
    // }
    // else if(e.target.className==="tab-title")
    // {
    //     e.target.parentElement.querySelector('.tab-body').style.display = "block";
    //     return true;
    // }
}
export const closeTab = (e)=>{
    if(e.target.parentElement.className === 'tab-title'){
        e.target.parentElement.parentElement.querySelector('.tab-body').style.display = "none";
        const open = e.target.parentElement.parentElement.classList[1];
        if(open === 'open')
        return false;
    }
    else if(e.target.className === 'tab'){
        e.target.querySelector('.tab-body').style.display = "none";
        return false;
    }
    else if(e.target.className==="tab-title")
    {
        e.target.parentElement.querySelector('.tab-body').style.display = "none";
        return false;
    }
}