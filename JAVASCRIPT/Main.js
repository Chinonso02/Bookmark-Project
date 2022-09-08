const navlinks = document.querySelector(".link")
const navopen=document.querySelector(".ri-menu-line")
const navclose=document.querySelector(".ri-close-fill")
const html=document.querySelector("html")
const FAQS = document.querySelectorAll('.quest1')
const links = document.querySelectorAll(".link a")

console.log(faqArrows)


function opennav(){
    navlinks.style.top ="33%"
    navopen.style.display ="none"
    navclose.style.display ="block"
    html.style.overflowY = "hidden"
}

function closenav(){
    navlinks.style.top ="-33%"
    navopen.style.display ="block"
    navclose.style.display ="none"
    html.style.overflowY = "scroll"
}

FAQS.forEach(faq => {
    faq.addEventListener("click", function(){
        faq.classList.toggle('showAns')
    })
})


links.forEach(link => {
    link.addEventListener("click", function(){
        navlinks.style.top ="-33%"
        navopen.style.display ="block"
        navclose.style.display ="none"
        html.style.overflowY = "scroll"
    })
})