// Profil
const closeProfilWindowButton = document.querySelector('.js-close-button')
const detailWindowGreyFilter = document.querySelector('.js-grey-filter')
const detailWindow = document.querySelector('.js-detail-window')
const overflowHidden = document.querySelector('.overflowHidden')
const overflowProfil = document.querySelector('.js-overflowProfil')

if(closeProfilWindowButton){
    closeProfilWindowButton.addEventListener('click', () => {
        detailWindow.classList.add('invisible')
        detailWindowGreyFilter.classList.add('invisible')
        overflowProfil.classList.remove('overflowHidden')
    })
}