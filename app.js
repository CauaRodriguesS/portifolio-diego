let nav = document.querySelector('#na')
function inicio(){
    nav.style.backgroundImage = "linear-gradient(to bottom, #261435, #150D1B)"
}
window.addEventListener("scroll",() => {
    if(scrollY > 0 ){
        nav.style.backgroundColor =  "#26143570"
        nav.style.backgroundImage = ""
    }else{
        nav.style.backgroundColor= ""
        nav.style.backgroundImage = "linear-gradient(to bottom, #261435, #150D1B)"
    }
})