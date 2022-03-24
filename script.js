// modal_window

let black = document.querySelector('.black')
let yes = document.querySelector('.yes')
let no = document.querySelector('.no')
let nike_inform = document.querySelector('.nike_inform')
let ok = document.querySelector('.ok')
let yellow = document.querySelector('.yellow')
let modal_wind = document.querySelector('.modal_wind')


yellow.onclick = ( ) => {
    black.style.display = 'block'
    black.style.opacity = '1'
    modal_wind.style.top = '180px'
}
yes.onclick = () => {
    modal_wind.style.top = '-580px'
    setTimeout(() => {
        nike_inform.style.left = "420px"
    }, 1000);
}
ok.onclick = () => {
    black.style.display = 'none'
    black.style.opacity = '0' 
    nike_inform.style.left = "-630px"
}
no.onclick = () => {
    black.style.display = 'none'
    black.style.opacity = '0' 
    modal_wind.style.top = '-580px'
}