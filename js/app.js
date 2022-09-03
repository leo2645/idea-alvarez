const links = document.querySelectorAll('[data-link]')

links.forEach((link)=>{
    link.addEventListener('click',() =>{
        link.setAttribute('aria-current',page)
    })
})