const sendTokenFormContainer = document.querySelector('.sendtokenMain__sendtokenLeftSection__formContainer')

if(sendTokenFormContainer) {

    const stepLabel = document.querySelector('#stepLabel'),
          progression = document.querySelector('.js-progression')
          authentificationForm = sendTokenFormContainer.querySelector('#authentificationForm'),
          senderAccountInput = authentificationForm.querySelector('#accountName'),
          senderPrivateKeyInput = authentificationForm.querySelector('#privateKey'),
          inputs = sendTokenFormContainer.querySelectorAll('input, select'),
          savoirForm = sendTokenFormContainer.querySelector('#savoirForm'),
          savoirNameInput = savoirForm.querySelector('#savoirName'),
          savoirCategoryInput = savoirForm.querySelector('#savoirCategory'),
          savoirTypeInput = savoirForm.querySelector('#savoirType'),
          receiversForm = sendTokenFormContainer.querySelector('#receiversForm'),
          receiversList = receiversForm.querySelector('#receiversList'),
          addReceiverButton = receiversForm.querySelector('#js-addReceiver')

    function goToSavoirForm() {
        sendTokenFormContainer.classList.add('stepSavoirForm')
        progression.classList.add('stepSavoirForm')
        stepLabel.innerText = '2/3 Informations sur le savoir transmis'
        let api = new EosApi
        api.getAvalaibleCategoriesForUser(senderAccountInput.value,(categories) => {
            console.log(categories)
            categories.forEach(category => {
                const option = document.createElement('option')
                option.setAttribute('value',category)
                option.innerText = category
                savoirCategoryInput.appendChild(option)
            })
        })
    }

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

    authentificationForm.addEventListener('submit',(e) => {
        e.preventDefault()
        let state = true
        if (senderAccountInput.value.length != 12) {
            senderAccountInput.classList.add('error')
            senderAccountInput.parentElement.lastElementChild.innerHTML = "Nom de compte incorrect"
            state = false
        }
        if (senderPrivateKeyInput.value.length < 10) {
            senderPrivateKeyInput.classList.add('error')
            senderPrivateKeyInput.parentElement.lastElementChild.innerHTML = "Clé privée incorrecte"
            state = false
        }
        if (state) {
            let api = new EosApi
            api.checkAuthentication(senderAccountInput.value,senderPrivateKeyInput.value,(response) => {
                if (response == 'ok') {
                    goToSavoirForm()
                } else {
                    senderPrivateKeyInput.classList.add('error')
                    senderPrivateKeyInput.parentElement.lastElementChild.innerHTML = response
                }
            })
        }
    })
    
    savoirForm.addEventListener('submit',(e) => {
        e.preventDefault()
        let state = true
        if (savoirNameInput.value.length < 6) {
            savoirNameInput.classList.add('error')
            savoirNameInput.parentElement.lastElementChild.innerHTML = "Saisissez un nom explicite pour le savoir transmis"
            state = false
        }
        if (savoirCategoryInput.value == 'null') {
            savoirCategoryInput.classList.add('error')
            savoirCategoryInput.parentElement.lastElementChild.innerHTML = "Choisissez une catégorie"
            state = false
        }
        if (savoirTypeInput.value == 'null') {
            savoirTypeInput.classList.add('error')
            savoirTypeInput.parentElement.lastElementChild.innerHTML = "Choisissez un type d'enseignement"
            state = false
        }
        if (state) {
            sendTokenFormContainer.classList.add('stepReceiversForm')
            progression.classList.add('stepReceiversForm')
            stepLabel.innerText = '3/3 Selection des apprenants'
        }
    })

    function getReceiverInput(i) {
        let div = document.createElement('div')
        let input =  document.createElement('input')
        input.classList.add('input')
        input.setAttribute('type','text')
        input.setAttribute('name',`apprenant${i}`)
        input.setAttribute('id',`apprenant${i}`)
        input.setAttribute('placeholder',`Apprenant ${i}`)
        div.appendChild(input)
        let span =  document.createElement('span')
        span.classList.add('errorSpan')
        div.appendChild(span)
        return div
    }

    addReceiverButton.addEventListener('click',() => {
        let receivers = receiversList.children.length
        receiversList.appendChild(getReceiverInput(receivers + 1))
    })

}