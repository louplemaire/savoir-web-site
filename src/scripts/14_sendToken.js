const sendTokenFormContainer = document.querySelector('.sendtokenMain__sendtokenLeftSection__formContainer')

if(sendTokenFormContainer) {

    const stepLabel = document.querySelector('#stepLabel'),
          progression = document.querySelector('.js-progression')
          authentificationForm = sendTokenFormContainer.querySelector('#authentificationForm'),
          welcomeLabel = sendTokenFormContainer.querySelector('.alreadyLogedInPart__welcomeLabel'),
          continueWithLogedInAccountButton = sendTokenFormContainer.querySelector('#continueWithLogedInAccount'),
          logoutButton = sendTokenFormContainer.querySelector('#logout'),
          senderAccountInput = authentificationForm.querySelector('#accountName'),
          senderPrivateKeyInput = authentificationForm.querySelector('#privateKey'),
          stayConnectedCheckbox = authentificationForm.querySelector('#stayConnected'),
          inputs = sendTokenFormContainer.querySelectorAll('input, select'),
          savoirForm = sendTokenFormContainer.querySelector('#savoirForm'),
          savoirNameInput = savoirForm.querySelector('#savoirName'),
          savoirCategoryInput = savoirForm.querySelector('#savoirCategory'),
          savoirTypeInput = savoirForm.querySelector('#savoirType'),
          receiversForm = sendTokenFormContainer.querySelector('#receiversForm'),
          receiversList = receiversForm.querySelector('#receiversList'),
          addReceiverButton = receiversForm.querySelector('#js-addReceiver')

    let accountName = localStorage.getItem('accountName'),
        privateKey = localStorage.getItem('privateKey')
    if (accountName && privateKey) {
        authentificationForm.classList.add('isAlreadyLogedIn')
        welcomeLabel.innerText = `Bienvenue ${accountName} !`
    }

    function goToSavoirForm() {
        sendTokenFormContainer.classList.add('stepSavoirForm')
        progression.classList.add('stepSavoirForm')
        stepLabel.innerText = '2/3 Informations sur le savoir transmis'
        let api = new EosApi
        api.getAvalaibleCategoriesForUser(accountName,(categories) => {
            categories.forEach(category => {
                const option = document.createElement('option')
                option.setAttribute('value',category)
                option.innerText = category
                savoirCategoryInput.appendChild(option)
            })
        })
    }

    continueWithLogedInAccountButton.addEventListener('click',(e) => {
        e.preventDefault()
        goToSavoirForm()
    })

    logoutButton.addEventListener('click',(e) => {
        e.preventDefault()
        localStorage.removeItem('accountName')
        localStorage.removeItem('privateKey')
        authentificationForm.classList.remove('isAlreadyLogedIn')
    })

    inputs.forEach(function (input) {
        input.addEventListener("input", function (e) {
            input.classList.remove('error')
            if (input.getAttribute('type') == "checkbox") {
                input.classList.remove('error')
            } else {
                input.parentElement.lastElementChild.innerText = ""
            }
        })
    })

    authentificationForm.addEventListener('submit',(e) => {
        e.preventDefault()
        let state = true
        if (senderAccountInput.value.length != 12) {
            senderAccountInput.classList.add('error')
            senderAccountInput.parentElement.lastElementChild.innerText = "Nom de compte incorrect"
            state = false
        }
        if (senderPrivateKeyInput.value.length < 10) {
            senderPrivateKeyInput.classList.add('error')
            senderPrivateKeyInput.parentElement.lastElementChild.innerText = "Clé privée incorrecte"
            state = false
        }
        accountName = senderAccountInput.value
        privateKey = senderPrivateKeyInput.value
        if (stayConnectedCheckbox.checked) {
            localStorage.setItem('accountName',accountName)
            localStorage.setItem('privateKey',privateKey)
        }
        if (state) {
            let api = new EosApi
            api.checkAuthentication(senderAccountInput.value,senderPrivateKeyInput.value,(response) => {
                if (response == 'ok') {
                    goToSavoirForm()
                } else {
                    senderPrivateKeyInput.classList.add('error')
                    senderPrivateKeyInput.parentElement.lastElementChild.innerText = response
                }
            })
        }
    })
    
    savoirForm.addEventListener('submit',(e) => {
        e.preventDefault()
        let state = true
        if (savoirNameInput.value.length < 6) {
            savoirNameInput.classList.add('error')
            savoirNameInput.parentElement.lastElementChild.innerText = "Saisissez un nom explicite pour le savoir transmis"
            state = false
        }
        if (savoirCategoryInput.value == 'null') {
            savoirCategoryInput.classList.add('error')
            savoirCategoryInput.parentElement.lastElementChild.innerText = "Choisissez une catégorie"
            state = false
        }
        if (savoirTypeInput.value == 'null') {
            savoirTypeInput.classList.add('error')
            savoirTypeInput.parentElement.lastElementChild.innerText = "Choisissez un type d'enseignement"
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

    receiversForm.addEventListener('submit',(e) => {
        e.preventDefault()
        let receiverInputs = receiversList.querySelectorAll('input')
        let inputError = false
        receiverInputs.forEach(input => {
            if (input.value.length == 0) {
                if (receiversList.querySelectorAll('input').length > 1) {
                    input.parentElement.remove()
                } else {
                    input.classList.add('error')
                    input.parentElement.lastElementChild.innerText = "Saisissez un nom de compte valide (12 caractéres)"
                }
                inputError = true
            } else if (input.value.length != 12) {
                input.classList.add('error')
                input.parentElement.lastElementChild.innerText = "Saisissez un nom de compte valide (12 caractéres)"
                inputError = true
            }
        })
        if (inputError) { return }
        console.log('send transaction')
        const receivers = Array.from(receiverInputs).map(input => input.value)
        const api = new EosApi
        const options = {
            'fromOwnerPrivateKey' : privateKey,
            'from' : accountName,
            'to' : JSON.stringify(receivers),
            'name' : savoirNameInput.value,
            'category' : savoirCategoryInput.value,
            'country' : 'fra',
            'zipcode' : '94160'
        }
        api.sendTransaction(options,(result) => {
            if (result == 'ok') {
                document.location.href= `/confirmation_envoie_savoir?a=${accountName}`
            } else {
                window.alert(`Une erreur est survenue : ${result}`)
            }
        })
    })

}