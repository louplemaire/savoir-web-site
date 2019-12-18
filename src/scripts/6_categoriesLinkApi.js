const list = document.querySelector('.exploreMain__searchTraffic__traffic__list')

if(list) {
    const api = new EosApi()
    
    api.getUsersForCategory(searchedCategory,(users) => {
        console.log(users)
        users.forEach((user) => {
            list.appendChild(getUsersForCategoryDiv(user))
        })
    })

    function getUsersForCategoryDiv(user) {
        // Créer la ligne
        const line = document.createElement('li')
        line.classList.add('exploreMain__searchTraffic__traffic__list__line')
        list.appendChild(line)

        // Créer le contenu de la div catégorie de l'utilisateur
        // Info
        const info = document.createElement('div')
        info.classList.add('exploreMain__searchTraffic__traffic__list__line__info')
        line.appendChild(info)

        // User name
        const userName = document.createElement('div')
        userName.classList.add('exploreMain__searchTraffic__traffic__list__line__info__expertise')
        userName.innerText = user.receiveraccount
        info.appendChild(userName)

        // Token owned
        const tokenOwned = document.createElement('div')
        tokenOwned.classList.add('exploreMain__searchTraffic__traffic__list__line__info__expertise__tokenOwned')
        tokenOwned.innerText = `${user.received} savoirs "${searchedCategory}" acquis`
        info.appendChild(tokenOwned)

        // Token gived
        const tokenGived = document.createElement('div')
        tokenGived.classList.add('exploreMain__searchTraffic__traffic__list__line__info__expertise__tokenGived')
        tokenGived.innerText = `${user.send} savoirs "${searchedCategory}" transmis`
        info.appendChild(tokenGived)

        // Value
        const value = document.createElement('div')
        value.classList.add('exploreMain__searchTraffic__traffic__list__line__number')
        value.innerText = `${user.tokensofcategory} SOR`
        line.appendChild(value)

        return line
    }
}