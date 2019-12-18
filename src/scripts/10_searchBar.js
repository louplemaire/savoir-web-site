// Explorer

// Open subresearcher
const researcher = document.querySelector('.js-researcher')

if(researcher) {

    const subResearcher = document.querySelector('.js-subResearcher'),
          researcherList = researcher.querySelector('.js-subResearcher-list')

    function toggleSearchBar() {
        subResearcher.classList.toggle('subResearcherOpen')
        researcherList.classList.toggle('invisible')
    }

    researcher.addEventListener('click', () => { toggleSearchBar() })
    researcher.addEventListener('focusout', () => { toggleSearchBar() })

    // api.getSearchResults('n',(data) => {
    //     console.log(data)
    // })

}