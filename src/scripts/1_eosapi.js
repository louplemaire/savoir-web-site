class EosApi {

    constructor() {
        this.apiUrl = 'http://213.202.230.42:8888'
        this.code = 'projetsavoir'
        this.symbol = 'SOR'
    }

    static formatSorTokens(amount) {
        return parseFloat(amount) * 10000
    }

    urlencode(obj) {
        let str = []
        for (let p in obj)
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]))
          }
        return str.join("&")
      }

    // Request our NodeJS API
    requestApi(request,options,handler) {
        fetch(`https://savoir-api.herokuapp.com/${request}`, {
            headers: new Headers({ "Content-type": "application/x-www-form-urlencoded" }),
            method: 'post',
            body: this.urlencode(options)
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

    transformDataInTransactions(data) {
        const transactions = data.reduce((result,data) => {
            const transaction = new EosTransaction(data)
            if (!transaction.useless) {
                result.push(transaction)
            }
            return result
        },[])
        return transactions
    }

    // Return an array of the 10 last SAVOIR transactions
    getLastSorTransactions(handler) {
        this.requestApi('get_last_transactions',{},(data) => {
            handler(this.transformDataInTransactions(data))
        })
    }

    // Get search results
    getSearchResults(search,handler) {
        const options = { 'search' : search }
        this.requestApi('get_users_for_search',options,(data) => {
            const users = data.map((userData) => {
                return new User(userData)
            })
            handler(users)
        })
    }

    // Get user profil (token balance + category)
    getUserCategories(user,handler) {
        const options = { 'account' : user }
        this.requestApi('get_user_categories',options,(data) => {
            handler(data)
        })
    }

    // Get sor transactions for user for specific category
    getTransactionsOfUserForCategory(user,category,handler) {
        const options = {
            'category' : category,
            'account' : user
        }
        this.requestApi('get_transactions_of_user_for_category',options,(data) => {
            handler(this.transformDataInTransactions(data))
        })
    }

    // Cet current trending topic
    getTrendingTopic() {
        return 'Blockchain'
    }

}

// let api = new EosApi

// api.getLastSorTransactions((transactions) => {
//     console.log(transactions)
//     transactions.forEach(transaction => {
//         // Créer élément html rempli
//         // Ajouter à la liste
//     })
// })

// api.getUserSorBalance('hugoleroy123', (balance) => {
//     console.log(`hugoleroy123 SOR tokens : ${balance}`)
// })
// api.getSorCurrentSupply((supply) => {
//     console.log(`Total SOR tokens supplied : ${supply}`)
// })
// console.log(api.getTrendingTopic())

// api.getSearchResults('n',(users) => {
//     console.log(users)
// })

// api.getUserCategories('nicolas2decr',(categories) => {
//     console.log(categories)
// })

// api.getTransactionsOfUserForCategory('nicolas2decr','blockchain',(transactions) => {
//     console.log(transactions)
// })