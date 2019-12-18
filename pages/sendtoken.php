<main class="sendtokenMain">
    <h2>Envoyer des Tokens</h2>
    <h3>1/3 Identification</h3>
    <div class="sendtokenMain__progressBar">
        <div class="sendtokenMain__progressBar__progression"></div>
    </div>
    <div class="sendtokenContainerSection">
    <section class="sendtokenMain__sendtokenLeftSection">
        <div class="form__sendtoken">
            <form id="authentificationForm" method="post" action="#">
                <div>
                    <label for="accountName">Nom du compte</label>
                    <input class="inputsendtoken" type="text" name="accountName" id="accountName">
                    <span class="errorSpan"></span>
                </div>
                <div>
                    <label for="privateKey" class="">Clé privée</label>
                    <input class="inputsendtoken largeInputSendToken" type="text" name="privateKey" id="privateKey">
                    <span class="errorSpan"></span>
                </div>
                <div>
                    <input type="checkbox" id="stayConnected" name="stayConnected">
                    <label class="inline" for="stayConnected">Rester connecté</label>
                </div>
                <div class="container__sendtokenButton">
                    <button type="submit" class="primaryButton sendtokenbutton">Suivant</button>
                </div>
            </form>
        </div>
    </section>
    <section class="sendtokenMain__sendtokenRightSection">
        <img src="../assets/images/illustrations/undraw_travel_mode_7sf4.svg" alt="">
    </section>
    </div>
</main> 