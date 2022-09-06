header = document.querySelector('.header-text')
header1 = document.querySelector('.header-text1')
btm = document.querySelector('.btm')
up = document.querySelector('.up')

// window.onload = () =>{
//     setTimeout(() => {
        
//     }, 1000)
// }

window.onload = () =>{
    setTimeout(() => {
        header.className += ` seen`
        btm.className += ` bottom`
        up.className += ` top`
        // header.style.marginTop= '6rem';
    }, 500)
}

