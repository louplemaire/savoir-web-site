const profilInfo = document.querySelector('.profilMain__info')

function getCategoryDiv(category) {
    // Créer la ligne
    const line = document.createElement('li')
    line.classList.add('profilMain__savoirs__specificity__list__line')

    // Remplir la ligne
    // Info
    const info = document.createElement('div')
    info.classList.add('profilMain__savoirs__specificity__list__line__info')
    line.appendChild(info)

    // // Expertise
    const expertise = document.createElement('div')
    expertise.classList.add('profilMain__savoirs__specificity__list__line__info__expertise')
    expertise.innerText = category.savoirtopic
    info.appendChild(expertise)

    // // Token acquis
    const tokenOwned = document.createElement('div')
    tokenOwned.classList.add('profilMain__savoirs__specificity__list__line__info__expertise__tokenOwned')
    tokenOwned.innerText = `${category.received} savoir(s) acquis`
    info.appendChild(tokenOwned)

    // // Token transmis
    const tokenGived = document.createElement('div')
    tokenGived.classList.add('profilMain__savoirs__specificity__list__line__info__expertise__tokenGived')
    tokenGived.innerText = `${category.send} savoir(s) transmis`
    info.appendChild(tokenGived)

    // // Valeur
    const value = document.createElement('div')
    value.classList.add('profilMain__savoirs__specificity__list__line__number')
    value.innerText = `${category.tokensamount}`
    line.appendChild(value)

    // Token logo
    const tokenLogo = document.createElement('img')
    tokenLogo.setAttribute('src', '../../assets/images/icontoken.svg')
    tokenLogo.classList.add('tokenLogo')
    value.appendChild(tokenLogo)

    // // Ouvrir la catégorie
    const closeProfilWindowButton = document.querySelector('.js-close-button')
    const detailWindowGreyFilter = document.querySelector('.js-grey-filter')
    const detailWindow = document.querySelector('.js-detail-window')
    const body = document.querySelector('body')

    line.addEventListener('click', () => {
        body.classList.add('overflowHidden')
        detailWindow.classList.remove('invisible')
        detailWindowGreyFilter.classList.remove('invisible')
        openDetailedCategory(category)
    })

    // Fermer la catégorie
    if(closeProfilWindowButton){
        closeProfilWindowButton.addEventListener('click', () => {
            body.classList.remove('overflowHidden')
            detailWindow.classList.add('invisible')
            detailWindowGreyFilter.classList.add('invisible')
        })
    }

    // Quiter la page détailler au click sur le detailWindowGreyFilter
    detailWindowGreyFilter.addEventListener('click', () => {
        body.classList.remove('overflowHidden')
        detailWindow.classList.add('invisible')
        detailWindowGreyFilter.classList.add('invisible')
    })

    return line
}

function openDetailedCategory(category) {
    // Remplir la catégorie
    let api = new EosApi

    const specName = document.querySelector('.profilMain__detail__info__name__specName')
    const userName = document.querySelector('.profilMain__detail__info__name__userName')
    const specNumber = document.querySelector('.profilMain__detail__info__number')
    const savoirName = document.querySelector('.profilMain__detail__token__title__specName')
    const list = document.querySelector('.profilMain__detail__token__list')

    specName.innerText = category.savoirtopic
    userName.innerText = userAccount
    specNumber.innerText = `${category.tokensamount} SOR`
    savoirName.innerText = `Savoirs "${category.savoirtopic}"`
    list.innerHTML = ""

    api.getTransactionsOfUserForCategory(userAccount,category.savoirtopic,(transactions) => {
        transactions.forEach((transaction) => {
            list.appendChild(getTransactionCategoryDiv(transaction))
        })
    })
}

function getTransactionCategoryDiv(transaction) {
    // Créer la ligne
    const line = document.createElement('li')
    line.classList.add('profilMain__detail__token__list__line')

    // Créer le contenu de la div de transaction
    // Date
    const date = document.createElement('div')
    date.classList.add('profilMain__detail__token__list__line__date')
    date.innerText = transaction.date
    line.appendChild(date)

    // Deal
    const deal = document.createElement('div')
    deal.classList.add('profilMain__detail__token__list__line__deal')
    line.appendChild(deal)

    // Mention
    const mention = document.createElement('div')
    mention.classList.add('profilMain__detail__token__list__line__deal__mention')
    deal.appendChild(mention)

    // Spec
    const spec = document.createElement('div')
    spec.classList.add('profilMain__detail__token__list__line__deal__mention__spec')
    spec.innerText = transaction.name
    mention.appendChild(spec)

    // Destination
    const destination = document.createElement('div')
    destination.classList.add('profilMain__detail__token__list__line__deal__mention__destination')
    if(transaction.sender == 'projetsavoir') {
        destination.innerText = `${transaction.receiver} a transmis ce savoir ->`
    } else {
        destination.innerText = `-> ${transaction.sender} lui a transmis ce savoir`
    }
    mention.appendChild(destination)

    // Value
    const value = document.createElement('div')
    value.classList.add('profilMain__detail__token__list__line__deal__value')
    value.innerText = `${transaction.amount}`
    deal.appendChild(value)

    // Token logo
    const tokenLogo = document.createElement('img')
    tokenLogo.setAttribute('src', '../../assets/images/icontoken.svg')
    tokenLogo.classList.add('tokenLogo')
    value.appendChild(tokenLogo)

    return line
}

if(profilInfo) {
    const api = new EosApi()

    const userName = document.querySelector('.profilMain__info__name')
    const userToken = document.querySelector('.profilMain__info__sorNumber')
    const titleUserName = document.querySelector('.profilMain__savoirs__title__name')
    const mailLink = document.querySelector('#mailLink')

    userName.innerText = userAccount
    titleUserName.innerText = `Les savoirs de ${userAccount}`

    api.getUserSorBalance(userAccount,(balance) => {
        userToken.innerText = `${balance}`
        // Token logo
        const tokenLogo = document.createElement('img')
        tokenLogo.setAttribute('src', '../../assets/images/icontoken.svg')
        tokenLogo.classList.add('tokenLogo')
        userToken.appendChild(tokenLogo)
    })

    api.getAccountEmail(userAccount,(email) => {
        mailLink.setAttribute('href',`mailto:${email}`)
        mailLink.innerText = email
    })

    api.getUserCategories(userAccount,(categories) => {
        const list = document.querySelector('.profilMain__savoirs__specificity__list')
        categories.forEach(category => {
            list.appendChild(getCategoryDiv(category))
        })
    })
}