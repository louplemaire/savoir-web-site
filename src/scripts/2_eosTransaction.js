class EosTransaction {

    constructor(data) {
        if (data) {
            this.sender = data['senderaccount']
            this.receiver = data['receiveraccount']
            this.date = `Le ${new Date(data['transactiondate']).toLocaleString('fr-fr')}`
            this.amount = data['tokensamount']
            this.name = data['savoirname']
            this.category = data['savoirtopic'].charAt(0).toUpperCase() + data['savoirtopic'].substring(1)
            this.country = data['country']
            this.zipcode = data['zipcode']
        } else {
            this.useless = true
        }
    }

}