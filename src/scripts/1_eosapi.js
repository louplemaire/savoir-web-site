class EosApi {

    constructor() {
        // this.apiUrl = 'https://eos.greymass.com'
        this.apiUrl = 'http://213.202.230.42:8888'
        this.code = 'projetsavoir'
        this.symbol = 'SOR'
    }

    static formatSorTokens(amount) {
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
            handler(EosApi.formatSorTokens(data[0]))
        })
    }

    // Return the amount of tokens which were distributed
    getSorCurrentSupply(handler) {
        const options = {
            'code':this.code,
            'symbol': this.symbol
        }
        this.post('chain/get_currency_stats',options,(data) => {
            const sorSupply = EosApi.formatSorTokens(data["SOR"]["supply"])
            this.getUserSorBalance('projetsavoir',(balance) => {
                const livingTokens = sorSupply - balance
                handler(livingTokens)
            })
        })
    }

    getSorTransactions(account,handler,pos = -1) {
        const options = {
            'account_name':account,
            'pos':pos
        }
        this.post('history/get_actions',options,(data) => {
            const transactions = data["actions"].reduce((result,data) => {
                const transaction = new EosTransaction(data,account)
                if (!transaction.useless) {
                    result.push(transaction)
                }
                return result
            },[])
            handler(transactions)
        })
    }

    // Return an array of the 20 last SAVOIR transactions
    getLastSorTransactions(handler) {
        this.getSorTransactions('projetsavoir',(transactions) => {
            handler(transactions)
        })
    }

    getUserFullProfil() {
        // return a user object with each category and all transactions
    }

    // Cet current trending topic
    getTrendingTopic() {
        return 'Blockchain'
    }

}

let api = new EosApi

api.getUserSorBalance('hugoleroy123', (balance) => {
    console.log(`hugoleroy123 SOR tokens : ${balance}`)
})
api.getSorCurrentSupply((supply) => {
    console.log(`Total SOR tokens supplied : ${supply}`)
})
console.log(api.getTrendingTopic())

// api.getLastSorTransactions()