class EosTransaction {

    constructor(data,receiverAccount) {
        if (data['action_trace'] && receiverAccount == data['action_trace']['act']['data']['to']) {
            // console.log("-----");
            // console.log(data);
            let memo = data['action_trace']['act']['data']['memo'].split('__')
            // console.log(data['action_trace']['act']['data']['memo'])
            // console.log(memo)
            this.destination = data['action_trace']['act']['data']['to']
            this.date = `Le ${new Date(data['block_time']).toLocaleString('fr-fr')}`
            this.amount = EosApi.formatSorTokens(data['action_trace']['act']['data']['quantity'])
            this.source = memo[0]
            this.category = memo[1]
            this.country = memo[2]
            this.zipcode = memo[3]
            this.name = memo[4]
            this.isSorSender = (this.source == this.destination)
        } else {
            this.useless = true
        }
    }

}