const tokenTrafficList = document.querySelector('.exploreMain__exploreContainer__lastTokenTraffic__list')

if(tokenTrafficList) {
    let api = new EosApi()

    api.getLastSorTransactions((transactions) => {
        console.log(transactions)
        const list = document.querySelector('.exploreMain__exploreContainer__lastTokenTraffic__list')
        transactions.forEach(transaction => {
            list.appendChild(getTransactionDiv(transaction))
        })
    })

    function getTransactionDiv(transaction) {
        console.log(transaction)
        // Créer la ligne de transaction
        const line = document.createElement('li')
        line.classList.add('exploreMain__exploreContainer__lastTokenTraffic__list__line')

        // Créer le contenu de la div de transaction
        // Date
        const date = document.createElement('div')
        date.classList.add('exploreMain__exploreContainer__lastTokenTraffic__list__line__date')
        date.innerText = transaction.date
        line.appendChild(date)

        // Transaction
        const deal = document.createElement('div')
        deal.classList.add('exploreMain__exploreContainer__lastTokenTraffic__list__line__deal')
        line.appendChild(deal)

        // Mention
        const mention = document.createElement('div')
        mention.classList.add('exploreMain__exploreContainer__lastTokenTraffic__list__line__deal__mention')
        deal.appendChild(mention)

        // Spécialité
        const spec = document.createElement('div')
        spec.classList.add('exploreMain__exploreContainer__lastTokenTraffic__list__line__deal__mention__spec')
        spec.innerText = transaction.name
        mention.appendChild(spec)

        // Déstination
        const destination = document.createElement('div')
        destination.classList.add('exploreMain__exploreContainer__lastTokenTraffic__list__line__deal__mention__destination')
        destination.innerText = `${transaction.sender} -> ${transaction.receiver}`
        mention.appendChild(destination)

        // Valeur
        const value = document.createElement('div')
        value.classList.add('exploreMain__exploreContainer__lastTokenTraffic__list__line__deal__value')
        value.innerText = transaction.amount
        deal.appendChild(value)

        return line
    }
}