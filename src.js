const mobileButton = document.querySelector('.mobileButton')
function handleOpenMobileButton(){
    mobileButton.style.display = "flex"

}
function handleCloseMobileButton(){
    mobileButton.style.display = "none"

}
function handModal(params) {
    const hide = document.querySelector(".fadel")
    hide.style.display = "flex"
}

function closeModal(){
    const hide = document.querySelector(".fadel")
    hide.style.display = "none"
}
