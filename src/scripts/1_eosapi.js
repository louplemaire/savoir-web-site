class EosApi {

    constructor() {
        this.apiUrl = 'http://213.202.230.42:8888'
        this.code = 'projetsavoir'
        this.symbol = 'SOR'
    }

    formatSorTokens(amount) {
        return parseFloat(amount) * 10000
    }

    // Wrapper for post requests
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

    // Return the user amount of SOR tokens
    getUserSorBalance(userName,handler) {
        const options = {
            'code': this.code,
            'account':userName,
            'symbol': this.symbol
        }
        this.post('chain/get_currency_balance',options,(data) => {
            handler(this.formatSorTokens(data[0]))
        })
    }

    // Return the amount of tokens which were distributed
    getSorCurrentSupply(handler) {
        const options = {
            'code':this.code,
            'symbol': this.symbol
        }
        this.post('chain/get_currency_stats',options,(data) => {
            const sorSupply = this.formatSorTokens(data["SOR"]["supply"])
            this.getUserSorBalance('projetsavoir',(balance) => {
                const livingTokens = sorSupply - balance
                handler(livingTokens)
            })
        })
    }

    getLastSorTransactions() {
        // Return an array of the 10/20 last SAVOIR transactions
    }

    getUserFullProfil() {
        // return a user object with each category and all transactions
    }

}

let api = new EosApi

api.getUserSorBalance('hugoleroy123', (balance) => {
    console.log(balance)
})
api.getSorCurrentSupply((supply) => {
    console.log(supply)
})