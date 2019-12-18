let statsApi = new EosApi

const subject = document.querySelector('.tokenTraffic__info__subject')
const number = document.querySelector('.tokenTraffic__info__number')

if (subject) {
    subject.innerText = '"' + statsApi.getTrendingTopic() + '"'
}

if (number) {
    statsApi.getSorCurrentSupply((currentSupply) => {
        number.innerText = currentSupply
    })
}