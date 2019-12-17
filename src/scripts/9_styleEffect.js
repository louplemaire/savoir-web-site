let windowWidth = window.innerWidth,
    windowHeight = window.innerHeight,
    lastClientX = 0, lastClientY = 0
const mouseAnimatedElements = document.querySelectorAll('.js-mouseAnimated'),
      html = document.querySelector('html')

window.addEventListener('resize',() => {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
})

document.addEventListener('mousemove',(e) => {
    lastClientX = e.clientX
    lastClientY = e.clientY
    mouseAnimation()
})

document.addEventListener('scroll',(e) => {
    mouseAnimation()
})

function mouseAnimation() {
    const offsetX = (lastClientX / windowWidth) * 20
    const offsetY = ((lastClientY - html.scrollTop) / windowHeight) * 20
    const effect = `translateX(${20 - offsetX}px) translateY(${20 - offsetY}px)`
    mouseAnimatedElements.forEach(elem => {
        elem.style.transform = effect
    })
}