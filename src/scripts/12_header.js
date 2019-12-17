const menuIcons = document.querySelectorAll('.menuIcon'),
    subMenu = document.querySelector('.subMenu')

menuIcons.forEach(menuIcon => {
    menuIcon.addEventListener(
        'click',
        function(){
            subMenu.classList.toggle('visible')
        }
    )      
})

function closeMenu() {
    subMenu.classList.remove('visible')
}