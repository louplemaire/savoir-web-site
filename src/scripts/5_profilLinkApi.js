const profilInfo = document.querySelector('.profilMain__info')

if(profilInfo) {
    const api = new EosApi()

    const userName = document.querySelector('.profilMain__info__name')
    const userToken = document.querySelector('.profilMain__info__sorNumber')
    const titleUserName = document.querySelector('.profilMain__savoirs__title__name')

    userName.innerText = userAccount
    titleUserName.innerText = `Les savoirs de ${userAccount}`

    api.getUserSorBalance(userAccount,(balance) => {
        console.log(balance)
        userToken.innerText = `${balance} SOR`
    })

    api.getUserCategories(userAccount,(categories) => {
        console.log(categories)
        const list = document.querySelector('.profilMain__savoirs__specificity__list')
        categories.forEach(category => {
            // Récupérer la liste
            list.appendChild(getCategoryDiv(category))
        })

        

        function getCategoryDiv(category) {
            // Créer la ligne
            const line = document.createElement('li')
            line.classList.add('profilMain__savoirs__specificity__list__line')
            list.appendChild(line)

            // Ouvrir la catégorie
            const closeProfilWindowButton = document.querySelector('.js-close-button')
            const detailWindowGreyFilter = document.querySelector('.js-grey-filter')
            const detailWindow = document.querySelector('.js-detail-window')
            const overflowProfil = document.querySelector('.js-overflowProfil')

            line.addEventListener('click', () => {
                detailWindow.classList.remove('invisible')
                detailWindowGreyFilter.classList.remove('invisible')
                overflowProfil.classList.add('overflowHidden')
                console.log('ouvert');
            })

            // Fermer la catégorie
            if(closeProfilWindowButton){
                closeProfilWindowButton.addEventListener('click', () => {
                    detailWindow.classList.add('invisible')
                    detailWindowGreyFilter.classList.add('invisible')
                    overflowProfil.classList.remove('overflowHidden')
                })
            }

            // Remplir la ligne
            // Info
            const info = document.createElement('div')
            info.classList.add('profilMain__savoirs__specificity__list__line__info')
            line.appendChild(info)

            // Expertise
            const expertise = document.createElement('div')
            expertise.classList.add('profilMain__savoirs__specificity__list__line__info__expertise')
            expertise.innerText = category.savoirtopic
            info.appendChild(expertise)

            // Token acquis
            const tokenOwned = document.createElement('div')
            tokenOwned.classList.add('profilMain__savoirs__specificity__list__line__info__expertise__tokenOwned')
            tokenOwned.innerText = `${category.received} savoirs acquéris`
            info.appendChild(tokenOwned)

            // Token transmis
            const tokenGived = document.createElement('div')
            tokenGived.classList.add('profilMain__savoirs__specificity__list__line__info__expertise__tokenGived')
            tokenGived.innerText = `${category.send} savoirs transmis`
            info.appendChild(tokenGived)

            // Valeur
            const value = document.createElement('div')
            value.classList.add('profilMain__savoirs__specificity__list__line__number')
            value.innerText = `${category.tokensamount} SOR`
            line.appendChild(value)

            return line
        }
    })
}