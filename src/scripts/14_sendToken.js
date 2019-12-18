const sendTokenMain = document.querySelector('.sendtokenMain')

if(sendTokenMain) {

    const authentificationForm = document.querySelector('#authentificationForm'),
          senderAccountInput = authentificationForm.querySelector('#accountName'),
          senderPrivateKeyInput = authentificationForm.querySelector('#privateKey'),
          inputs = sendTokenMain.querySelectorAll('input')

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

    console.log(authentificationForm)
    authentificationForm.addEventListener('submit',(e) => {
        e.preventDefault()
        if (senderAccountInput.value.length != 12) {
            senderAccountInput.classList.add('error')
            senderAccountInput.parentElement.lastElementChild.innerHTML = "Nom de compte incorrect"
        }
        if (senderPrivateKeyInput.value.length < 10) {
            senderPrivateKeyInput.classList.add('error')
            senderPrivateKeyInput.parentElement.lastElementChild.innerHTML = "Clé privée incorrecte"
        }
        let api = new EosApi
        api.checkAuthentication(senderAccountInput.value,senderPrivateKeyInput.value,(response) => {
            if (response == 'ok') {
                console.log("hetsts§");
                // Passer à la prochaine étape
            } else {
                senderPrivateKeyInput.classList.add('error')
                senderPrivateKeyInput.parentElement.lastElementChild.innerHTML = response
            }
        })
    })
    

}