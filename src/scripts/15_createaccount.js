let formaccount = document.querySelector('#createaccount')

if (formaccount != null) {

    let inputs = document.querySelectorAll('input')
    let check = document.querySelector('.check')
    let errors = document.querySelectorAll('.error')

    inputs.forEach(function (input) {
        input.addEventListener("input", function (e) {
            input.classList.remove('error')
            if (input.getAttribute('type') == "checkbox") {
                input.classList.remove('error')
            } else {
                input.parentElement.lastElementChild.innerHTML = ""
            }
        })
    })

    formaccount.addEventListener("submit", function (e) {
        if (inputs[0].value.length < 11) {
            inputs[0].classList.add('error')
            inputs[0].parentElement.lastElementChild.innerHTML = "Votre nom doit comporter 12 caractères"
            e.preventDefault()
        }
        if ((inputs[1].value.length <= 0) || verifMail(inputs[1].value)) { // Vérifier que c'est un email
            inputs[1].classList.add('error')
            inputs[1].parentElement.lastElementChild.innerHTML = "Entrez une adresse mail valide"
            e.preventDefault()
        }
    })

    function verifMail(mail) {
        var regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !regexMail.test(mail)
    }

}