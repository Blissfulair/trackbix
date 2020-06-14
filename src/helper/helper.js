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
    if( event.target.parentElement.className ==='menu-item' || event.target.className ==='menu-item' || event.target.className ==='menu-items' || event.target.className ==='theme-button'){
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

export const openTab = (e)=>{
    
    if(e.target.parentElement.className === 'tab-title'){
        const open = e.target.parentElement.parentElement.className;
        const tab =  e.target.parentElement.parentElement.querySelector('.tab-body');
        if(open.includes('open'))
        {
            tab.style.display = 'none';
            e.target.parentElement.parentElement.classList.remove('open')
            e.target.parentElement.parentElement.classList.add('close');
            e.target.parentElement.parentElement.querySelector('.toggle').classList.remove('up')
            e.target.parentElement.parentElement.querySelector('.toggle').classList.add('down');
        }
        else if(open.includes('close')){
            tab.style.display = "block";
            e.target.parentElement.parentElement.classList.remove('close');
            e.target.parentElement.parentElement.classList.add('open')
            e.target.parentElement.parentElement.querySelector('.toggle').classList.remove('down')
            e.target.parentElement.parentElement.querySelector('.toggle').classList.add('up');
        }
    }
    else if(e.target.className === 'tab-title'){
        const open = e.target.parentElement.className;
        const tab =  e.target.parentElement.querySelector('.tab-body');
        if(open.includes('open'))
        {
            tab.style.display = 'none';
            e.target.parentElement.classList.remove('open')
            e.target.parentElement.classList.add('close');
            e.target.parentElement.querySelector('.toggle').classList.remove('up')
            e.target.parentElement.querySelector('.toggle').classList.add('down');
        }
        else if(open.includes('close')){
            tab.style.display = "block";
            e.target.parentElement.classList.remove('close');
            e.target.parentElement.classList.add('open')
            e.target.parentElement.querySelector('.toggle').classList.remove('down')
            e.target.parentElement.querySelector('.toggle').classList.add('up');
        }
    }
    else if(e.target.className === 'tab'){
        const open = e.target.className;
        const tab =  e.target.querySelector('.tab-body');
        if(open.includes('open'))
        {
            tab.style.display = 'none';
            e.target.classList.remove('open')
            e.target.classList.add('close');
            e.target.querySelector('.toggle').classList.remove('up')
            e.target.querySelector('.toggle').classList.add('down');
        }
        else if(open.includes('close')){
            tab.style.display = "block";
            e.target.classList.remove('close');
            e.target.classList.add('open')
            e.target.querySelector('.toggle').classList.remove('down')
            e.target.querySelector('.toggle').classList.add('up');
        }
    }
}
// export const closeTab = (e)=>{
//     if(e.target.parentElement.className === 'tab-title'){
//         e.target.parentElement.parentEle ment.querySelector('.tab-body').style.display = "none";
//         const open = e.target.parentElement.parentElement.classList[1];
//         if(open === 'open')
//         return false;
//     }
//     else if(e.target.className === 'tab'){
//         e.target.querySelector('.tab-body').style.display = "none";
//         return false;
//     }
//     else if(e.target.className==="tab-title")
//     {
//         e.target.parentElement.querySelector('.tab-body').style.display = "none";
//         return false;
//     }
// }