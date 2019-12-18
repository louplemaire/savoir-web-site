<main class="sendtokenMain">
    <h2>Valider un partage de savoir</h2>
    <h3 id="stepLabel">1/3 Identification</h3>
    <div class="sendtokenMain__progressBar">
        <div class="sendtokenMain__progressBar__progression js-progression"></div>
    </div>
    <div class="sendtokenContainerSection">
    <section class="sendtokenMain__sendtokenLeftSection js-mouseAnimated">
        <div class="sendtokenMain__sendtokenLeftSection__formContainer">
            <form id="authentificationForm" method="post" action="#">
                <div class="alreadyLogedInPart">
                    <h3 class="alreadyLogedInPart__welcomeLabel">Bienvenue !</h3>
                    <p>Vous êtes déja connecté</p>
                    <div class="alreadyLogedInPart__buttonLine">
                        <a href="#" id="continueWithLogedInAccount" class="primaryButton">Continuer</a>
                    </div>
                    <div class="alreadyLogedInPart__buttonLine">
                        <a href="#" id="logout" class="secondaryButton">Se déconnecter</a>
                    </div>
                </div>
                <div class="notLogedInPart">
                    <div>
                        <label for="accountName">Nom du compte</label>
                        <input class="input" type="text" name="accountName" id="accountName">
                        <span class="errorSpan"></span>
                    </div>
                    <div>
                        <label for="privateKey" class="">Clé privée</label>
                        <input class="input largeInput" type="text" name="privateKey" id="privateKey">
                        <span class="errorSpan"></span>
                    </div>
                    <div class="checkboxDiv">
                        <input class="checkbox" type="checkbox" id="stayConnected" name="stayConnected">
                        <label class="inline" for="stayConnected">Rester connecté</label>
                    </div>
                    <div class="container__sendtokenButton">
                        <button type="submit" class="primaryButton sendtokenbutton">Connexion</button>
                    </div>
                </div>
            </form>
            <form id="savoirForm" method="post" action="#">
                <div>
                    <label for="savoirName">Nom du savoir enseigné</label>
                    <input class="input largeInput" type="text" name="savoirName" id="savoirName">
                    <span class="errorSpan"></span>
                </div>
                <div>
                    <label for="savoirCategory" class="">
                        Catégorie du savoir
                        <!-- (Seuls les catégories dans lesquelles vous avez plus de 50 tokens sont disponibles) -->
                    </label>
                    <select class="input" name="savoirCategory" id="savoirCategory">
                        <option value="null">Choisissez une catégorie</option>
                    </select>
                    <span class="errorSpan"></span>
                </div>
                <div>
                    <label for="savoirType" class="">Type d'enseignement</label>
                    <select class="input" name="savoirType" id="savoirType">
                        <option value="null">Choisissez un type</option>
                        <option value="conference">Conférence</option>
                        <option value="cours">Cours particulier</option>
                        <option value="pair_to_pair">Pair à pair</option>
                    </select>
                    <span class="errorSpan"></span>
                </div>
                <div class="container__sendtokenButton">
                    <button type="submit" class="primaryButton sendtokenbutton">Valider</button>
                </div>
            </form>
            <form id="receiversForm" method="post" action="#">
                <label for="accountName">Apprenants</label>
                <div id="receiversList">
                    <div>
                        <input class="input" type="text" name="apprenant1" id="apprenant1" placeholder="Apprenant 1">
                        <span class="errorSpan"></span>
                    </div>
                </div>
                <a class="secondaryButton" id="js-addReceiver">Ajouter un apprenant</a>
                <div class="container__sendtokenButton">
                    <button type="submit" class="primaryButton sendtokenbutton">Valider</button>
                </div>
            </form>
        </div>
    </section>
    <section class="sendtokenMain__sendtokenRightSection">
        <img src="../assets/images/illustrations/undraw_travel_mode_7sf4.svg" alt="">
    </section>
    </div>
</main> 