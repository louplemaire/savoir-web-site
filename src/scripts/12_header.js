const menuIcons = document.querySelectorAll('.menuIcon'),
    subMenu = document.querySelector('.subMenu'),
    menuSelect = document.querySelectorAll('.menuSelect')

menuIcons.forEach(menuIcon => {
    menuIcon.addEventListener(
        'click',
        function(){
            subMenu.classList.toggle('visible')
        }
    )      
})
menuSelect.forEach(menuSelect => {
    menuSelect.addEventListener(
        'click',
        function(){
            subMenu.classList.toggle('visible')
        }
    )      
})

function closeMenu() {
    subMenu.classList.remove('visible')
}