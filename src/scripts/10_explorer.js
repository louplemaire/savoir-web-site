// Explorer

// Open subresearcher
const researcher = document.querySelector('.js-researcher')
const subResearcher = document.querySelector('.js-subResearcher')
const researcherList = document.querySelector('.js-subResearcher-list')
const subResearcherOpen = document.querySelector('.subResearcherOpen')
const invisible = document.querySelector('.invisible')
if (researcher) {
    researcher.addEventListener('click', () => {
        subResearcher.classList.toggle('subResearcherOpen')
        researcherList.classList.toggle('invisible')
    })
}