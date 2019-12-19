let statsApi = new EosApi

const subject = document.querySelector('.tokenTraffic__info__subject')
const number = document.querySelector('.tokenTraffic__info__number')
const link = document.querySelector('.linkInfoBar')

if (subject) {
    subject.innerText = '"' + statsApi.getTrendingTopic() + '"'
    link.setAttribute('href',`/categorie?c=${encodeURIComponent(statsApi.getTrendingTopic())}`)
}

if (number) {
    statsApi.getSorCurrentSupply((currentSupply) => {
        number.innerText = currentSupply
    })
}