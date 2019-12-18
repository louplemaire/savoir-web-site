// Explorer

// Open subresearcher
const researcher = document.querySelector('.js-researcher')
const subResearcher = document.querySelector('.js-subResearcher')
const researcherList = document.querySelector('.js-subResearcher-list')
const subResearcherOpen = document.querySelector('.subResearcherOpen')

if (researcher) {
    researcher.addEventListener('click', () => {
        subResearcher.classList.toggle('subResearcherOpen')
        researcherList.classList.toggle('invisible')
    })
    researcher.addEventListener('focusout',() => {
        subResearcher.classList.toggle('subResearcherOpen')
        researcherList.classList.toggle('invisible')
    })
}