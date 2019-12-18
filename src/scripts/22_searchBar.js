// Explorer

function getSearchResultsCategoriesDiv(d) {
    console.log("-------");
    
    console.log(d);
    
    // Créer la ligne
    const line = document.createElement('li')
    line.classList.add('exploreMain__exploreContainer__explorer__subResearcher__list__line')
    
    // Créer le contenu
    // Info
    const info = document.createElement('div')
    info.classList.add('exploreMain__exploreContainer__explorer__subResearcher__list__line__info')
    line.appendChild(info)

    // User name
    const userName = document.createElement('div')
    userName.classList.add('exploreMain__exploreContainer__explorer__subResearcher__list__line__info__name')
    userName.innerText = d.topic
    info.appendChild(userName)

    // Value
    const value = document.createElement('div')
    value.classList.add('class="exploreMain__exploreContainer__explorer__subResearcher__list__line__number"')
    value.innerText = d.users
    info.appendChild(value)

    return line
}

// Open subresearcher
const researcher = document.querySelector('.js-researcher')

if(researcher) {

    const subResearcher = document.querySelector('.js-subResearcher')


    function toggleSearchBar() {
        subResearcher.classList.toggle('subResearcherOpen')
    }

    researcher.addEventListener('click', () => { toggleSearchBar() })
    researcher.addEventListener('focusout', () => { toggleSearchBar() })

    const api = new EosApi()

    const listCategories = document.querySelector('.js-subResearcher-list-categories')
    const listUsers = document.querySelector('.js-subResearcher-list-users')

    researcher.addEventListener('input',() => {
        api.getSearchResults(researcher.value,(data) => {
            // Vider la liste de propositions
            console.log(data)
            const categories = data.categories
            const users = data.users
            console.log(categories)
            console.log(users)
            listCategories.innerHTML = ""
            listUsers.innerHTML = ""
            // Inserer les catégories ou cacher le ul si il n'y a pas de categories
            if(categories.length > 0) {
                // Foreach
                categories.forEach((d) => {
                    listCategories.appendChild(getSearchResultsCategoriesDiv(d))
                })
            } else {
                // Cacher
                listCategories.classList.add('invisible')
            }

            // Inserer les users ou cacher le ul si il n'y a pas de users
            if(users.length > 0) {
                // Foreach
                users.forEach((d) => {
                    // listUsers.appendChild()
                })
            } else {
                // Cacher
                listUsers.classList.add('invisible')
            }
        })
    })
}