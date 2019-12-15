class EosApi {

    constructor() {
        this.apiUrl = 'http://213.202.230.42:8888'
    }

    post(request,options,handler) {
        fetch(`${this.apiUrl}/v1/${request}`, {
            method: 'post',
            body: JSON.stringify(options)
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            handler(data)
        })
    }

    getSorCurrentSupply() {
        // return the amount of tokens which were supplied
    }

    getLastSorTransactions() {
        // Return an array of the 10/20 last SAVOIR transactions
    }

    // Return the user amount of SOR tokens
    getUserSorBalance(userName,handler) {
        const options = {
            'code':'projetsavoir',
            'account':userName,
            'symbol':'SOR'
        }
        this.post('chain/get_currency_balance',options,(data) => {
            handler(data[0])
        })
    }

    getUserFullProfil() {
        // return a user object with each category and all transactions
    }

}

let api = new EosApi

api.getUserSorBalance('hugoleroy123', (balance) => {
    console.log(balance)
})