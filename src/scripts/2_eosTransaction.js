class EosTransaction {

    constructor(data,receiverAccount) {
        if (data['action_trace'] && receiverAccount == data['action_trace']['act']['data']['to']) {
            console.log("-----");
            console.log(data);
            let memo = data['action_trace']['act']['data']['memo'].split('__')
            console.log(data['action_trace']['act']['data']['memo'])
            console.log(memo)
            this.destination = data['action_trace']['act']['data']['to']
            this.amount = EosApi.formatSorTokens(data['action_trace']['act']['data']['quantity'])
            this.source = ''
            this.category = ''
            this.name = ''
            this.isSorSender = (this.source == this.destination)
            this.date = ''
            this.country = ''
            this.zipcode = ''
        } else {
            this.useless = true
        }
    }

}