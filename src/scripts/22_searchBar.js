// Explorer

// Categories
function getSearchResultsCategoriesDiv(d) {
    // Créer la ligne
    const line = document.createElement('li')
    line.classList.add('exploreMain__exploreContainer__explorer__subResearcher__list__line')

    // Créer le lien
    const link = document.createElement('a')
    link.setAttribute('href',`/category?c=${encodeURIComponent(d.topic)}`)
    link.classList.add('link')
    line.appendChild(link)
    
    // Créer le contenu
    // Info
    const info = document.createElement('div')
    info.classList.add('exploreMain__exploreContainer__explorer__subResearcher__list__line__info')
    link.appendChild(info)

    // User name
    const userName = document.createElement('div')
    userName.classList.add('exploreMain__exploreContainer__explorer__subResearcher__list__line__info__name')
    userName.classList.add('capital')
    userName.innerText = d.topic
    info.appendChild(userName)

    // Value
    console.log(d)
    const value = document.createElement('div')
    value.classList.add('class="exploreMain__exploreContainer__explorer__subResearcher__list__line__number')
    value.classList.add('numberOpacity')
    value.innerText = `${d.users} utilisateurs`
    link.appendChild(value)

    return line
}

// Users
function getSearchResultsUsersDiv(d) {
    // Créer la ligne
    const line = document.createElement('li')
    line.classList.add('exploreMain__exploreContainer__explorer__subResearcher__list__line')

    // Créer le lien
    const link = document.createElement('a')
    link.setAttribute('href',`/profil?a=${encodeURIComponent(d.user)}`)
    link.classList.add('link')
    line.appendChild(link)
    
    // Créer le contenu
    // Info
    const info = document.createElement('div')
    info.classList.add('exploreMain__exploreContainer__explorer__subResearcher__list__line__info')
    link.appendChild(info)

    // User name
    const userName = document.createElement('div')
    userName.classList.add('exploreMain__exploreContainer__explorer__subResearcher__list__line__info__name')
    userName.innerText = d.user
    info.appendChild(userName)

    // Value
    const value = document.createElement('div')
    value.classList.add('class="exploreMain__exploreContainer__explorer__subResearcher__list__line__number')
    value.classList.add('numberOpacity')
    value.innerText = `${d.tokensamount} SOR`
    link.appendChild(value)

    return line
}

// Open subresearcher
const researcher = document.querySelector('.js-researcher')

if(researcher) {

    console.log("search bar exists")
    const subResearcher = document.querySelector('.js-subResearcher')

    function openSearchBar() {
        subResearcher.classList.add('subResearcherOpen')
    }

    function closeSearchBar() {
        subResearcher.classList.remove('subResearcherOpen')
    }

    // researcher.addEventListener('focusout', () => { closeSearchBar() })

    const api = new EosApi()

    const listCategories = document.querySelector('.js-subResearcher-list-categories')
    const listUsers = document.querySelector('.js-subResearcher-list-users')

    researcher.addEventListener('input',() => {
        if (researcher.value.length > 0) {
            //Afficher la liste
            openSearchBar()
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
                    // Créer le titre
                    const title = document.createElement('li')
                    title.classList.add('exploreMain__exploreContainer__explorer__subResearcher__list__title')
                    title.innerText = 'Catégories'
                    listCategories.appendChild(title)
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
                    // Créer le titre
                    const title = document.createElement('li')
                    title.classList.add('exploreMain__exploreContainer__explorer__subResearcher__list__title')
                    title.innerText = 'Utilisateurs'
                    listCategories.appendChild(title)
                    // Foreach
                    users.forEach((d) => {
                        listUsers.appendChild(getSearchResultsUsersDiv(d))
                    })
                } else {
                    // Cacher
                    listUsers.classList.add('invisible')
                }
    
                if (users.length == 0 && categories.length == 0) {
                    // Créer la ligne
                    const line = document.createElement('li')
                    line.classList.add('exploreMain__exploreContainer__explorer__subResearcher__list__line')
                    listCategories.appendChild(line)
    
                    // Afficher "Aucun résultat"
                    const noResultMessage = document.createElement('div')
                    noResultMessage.classList.add('class="exploreMain__exploreContainer__explorer__subResearcher__list__line__info')
                    noResultMessage.innerText = 'Aucun résultat'
                    line.appendChild(noResultMessage)
                }
            })
        } else {
            // cacher la liste
            closeSearchBar()
        }
    })
}