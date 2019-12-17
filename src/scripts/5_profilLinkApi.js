const profilInfo = document.querySelector('.profilMain__info')

if(profilInfo) {
    const api = new EosApi()

    const userName = document.querySelector('.profilMain__info__name')
    const userToken = document.querySelector('.profilMain__info__sorNumber')
    const titleUserName = document.querySelector('.profilMain__savoirs__title__name')

    userName.innerText = userAccount
    titleUserName.innerText = `Les savoirs de ${userAccount}`

    api.getUserSorBalance(userAccount,(balance) => {
        console.log(balance) // La quantité de token
        userToken.innerText = `${balance} SOR`
    })

    api.getUserCategories(userAccount,(categories) => {
        console.log(categories)
        categories.forEach(category => {
            // Créer la cellule
            // Remplir
            // Ajouter en html
        });
    })
}