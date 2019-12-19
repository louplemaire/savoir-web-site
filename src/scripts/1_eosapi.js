class EosApi {

    constructor() {
        this.apiUrl = 'http://213.202.230.42:8888'
        this.code = 'projetsavoir'
        this.symbol = 'SOR'
    }

    static formatSorTokens(amount) {
        return Math.round(parseFloat(amount) * 10000)
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
        })
        .then(response => response.text())
        .then(text => {
            try {
                const data = JSON.parse(text);
                handler(data)
            } catch(err) {
                handler(text)
            }
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
            if (data.length > 0) {
                handler(EosApi.formatSorTokens(data[0]))
            } else {
                handler(0)
            }
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
        this.requestApi('get_search_results',options,(data) => {
            handler(data)
        })
    }

    // Get user profil (token balance + category)
    getUserCategories(user,handler) {
        const options = { 'account' : user }
        this.requestApi('get_user_categories',options,(data) => {
            handler(data)
        })
    }

    getUsersForCategory(category,handler) {
        const options = { 'category' : category }
        this.requestApi('get_users_for_category',options,(data) => {
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

    checkAuthentication(user,privateKey,handler) {
        const options = {
            'account' : user,
            'accountPrivateKey' : privateKey
        }
        this.requestApi('confirm_authentication',options,(answer) => {
            handler(answer)
        })
    }

    getAvalaibleCategoriesForUser(user,handler) {
        const options = { 'account' : user }
        this.requestApi('get_avalaible_categories',options,(data) => {
            console.log(data)
            const cleanData = data.map((d) => {
                return d["savoirtopic"]
            })
            handler(cleanData)
        })
    }

    getAccountEmail(user,handler) {
        const options = { 'account' : user }
        this.requestApi('get_account_email',options,(email) => {
            handler(email)
        })
    }

    sendTransaction(options,handler) {
        this.requestApi('send_sor',options,(response) => {
            handler(response)
        })
    }

}

// let api = new EosApi

// Page recherche par catégorie
// api.getUsersForCategory('dev server',(users) => {
//     console.log(users)
// })

// api.getAccountEmail('nicolas2decr',(email) => {
//     console.log(email)
// })

// api.checkAuthentication('francois2pum','5K3QRgW34VPgGyfw5Rv4EcPEKEAw1ndfLM19NAaRxWF6wkJkvwc',(response) => {
//     console.log(response)
// })

// api.getAvalaibleCategoriesForUser('nicolas2decr',(categories) => {
//     console.log(categories)
// })

// api.getLastSorTransactions((transactions) => {
//     console.log(transactions)
//     transactions.forEach(transaction => {
//         // Créer élément html rempli
//         // getTransactionDiv(transaction)
//         // Ajouter à la liste
//     })
// })

// function getTransactionDiv(transaction) {
//     // Créer la div de transaction
//     const div = document.createElement('div')
//     return div
// }

// api.getUserSorBalance('hugoleroy123', (balance) => {
//     console.log(`hugoleroy123 SOR tokens : ${balance}`)
// })
// api.getSorCurrentSupply((supply) => {
//     console.log(`Total SOR tokens supplied : ${supply}`)
// })
// console.log(api.getTrendingTopic())

// api.getSearchResults('n',(data) => {
//     console.log(data)
// })

// api.getUserCategories('nicolas2decr',(categories) => {
//     console.log(categories)
// })

// api.getTransactionsOfUserForCategory('nicolas2decr','blockchain',(transactions) => {
//     console.log(transactions)
// })