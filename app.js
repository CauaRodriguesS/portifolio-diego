let nav = document.querySelector('#na')
function inicio(){
    nav.style.backgroundImage = "linear-gradient = (to bottom, #261435, #150D1B)"
}
window.addEventListener("scroll",function(){
    if(scrollY > 0 ){
        nav.style.backgroundColor = "#1a191bbe"
        nav.style.backgroundImage = ""
    }else{
        nav.style.backgroundColor= ""
        nav.style.backgroundImage = "linear-gradient = (to bottom, #261435, #150D1B)"
    }
})