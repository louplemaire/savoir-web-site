const list = document.querySelector('.exploreMain__searchTraffic__traffic__list')

if(list) {
    const api = new EosApi()

    const title = document.querySelector('.exploreMain__searchTraffic__title')

    title.innerText = `Les utilisateurs ayant des connaissances en "${searchedCategory}"`

    api.getUsersForCategory(searchedCategory,(users) => {
        users.forEach((user) => {
            list.appendChild(getUsersForCategoryDiv(user))
        })
    })

    function getUsersForCategoryDiv(user) {
        // Créer la ligne
        const line = document.createElement('li')
        line.classList.add('exploreMain__searchTraffic__traffic__list__line')
        list.appendChild(line)

        // Créer le lien
        const link = document.createElement('a')
        link.setAttribute('href',`/profil?a=${encodeURIComponent(user.receiveraccount)}`)
        link.classList.add('link')
        line.appendChild(link)

        // Créer le contenu de la div catégorie de l'utilisateur
        // Info
        const info = document.createElement('div')
        info.classList.add('exploreMain__searchTraffic__traffic__list__line__info')
        link.appendChild(info)

        // User name
        const userName = document.createElement('div')
        userName.classList.add('exploreMain__searchTraffic__traffic__list__line__info__expertise')
        userName.innerText = user.receiveraccount
        info.appendChild(userName)

        // Token owned
        const tokenOwned = document.createElement('div')
        tokenOwned.classList.add('exploreMain__searchTraffic__traffic__list__line__info__expertise__tokenOwned')
        tokenOwned.innerText = `${user.received} savoir(s) "${searchedCategory}" acquis`
        info.appendChild(tokenOwned)

        // Token gived
        const tokenGived = document.createElement('div')
        tokenGived.classList.add('exploreMain__searchTraffic__traffic__list__line__info__expertise__tokenGived')
        tokenGived.innerText = `${user.send} savoir(s) "${searchedCategory}" transmis`
        info.appendChild(tokenGived)

        // Value
        const value = document.createElement('div')
        value.classList.add('exploreMain__searchTraffic__traffic__list__line__number')
        value.innerText = `${user.tokensofcategory}`
        link.appendChild(value)

        // Token logo
        const tokenLogo = document.createElement('img')
        tokenLogo.setAttribute('src', '../../assets/images/icontoken.svg')
        tokenLogo.classList.add('tokenLogo')
        value.appendChild(tokenLogo)

        return line
    }
}