// Explorer

// Open subresearcher
const researcher = document.querySelector('.exploreMain__exploreContainer__explorer__researcher')
const subResearcher = document.querySelector('.exploreMain__exploreContainer__explorer__subResearcher')
const researcherList = document.querySelector('.exploreMain__exploreContainer__explorer__subResearcher__list')
const subResearcherOpen = document.querySelector('.subResearcherOpen')
const invisible = document.querySelector('.invisible')
if (researcher) {
    researcher.addEventListener('click', () => {
        subResearcher.classList.toggle('subResearcherOpen')
        researcherList.classList.toggle('invisible')
    })
}