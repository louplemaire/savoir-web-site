class EosApi {

    constructor() {
        this.apiUrl = 'http://213.202.230.42:8888'
        this.code = 'projetsavoir'
        this.symbol = 'SOR'
    }

    static formatSorTokens(amount) {
        return parseFloat(amount) * 10000
    }

    // Request our NodeJS API
    requestApi(request,options,handler) {
        fetch(`https://savoir-api.herokuapp.com/${request}`, {
            method: 'post',
            body: JSON.stringify(options)
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            handler(data)
        })
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

    // Return an array of the 20 last SAVOIR transactions
    getLastSorTransactions(handler) {
        this.requestApi('get_last_transactions',{},(data) => {
            const transactions = data.reduce((result,data) => {
                const transaction = new EosTransaction(data)
                if (!transaction.useless) {
                    result.push(transaction)
                }
                return result
            },[])
            handler(transactions)
        })
    }

    // Get search results

    // Get user profil (token balance + category)
    getUserFullProfil() {
        // return a user object with each category and all transactions
    }

    // Get sor transactions for user for specific category
    // getSorTransactions(account,handler,pos = -1) {
    //     this.requestApi('get_last_transactions',{},(data) => {
    //         const transactions = data.reduce((result,data) => {
    //             const transaction = new EosTransaction(data,account)
    //             if (!transaction.useless) {
    //                 result.push(transaction)
    //             }
    //             return result
    //         },[])
    //         handler(transactions)
    //     })
    // }

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

api.getLastSorTransactions((transactions) => {
    console.log(transactions)
})