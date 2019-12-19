<main class="integrateMain">
    <section class="integrateMain__integrateLeftSection js-mouseAnimated">
        <h2 class="integrateTitle">Intégrez l'API SAVOIR pour valider les connaissances que vous transmettez</h2>
        <div class="integrateMain__integrateLeftSection__container">
            <div class="integrateMain__integrateLeftSection__container__verticalBar">
            </div>
            <div class="integrateMain__integrateLeftSection__container__rightContainer">
                <div class="integrateMain__integrateLeftSection__container__rightContainer__paragraph">
                    <div class="integrateMain__integrateLeftSection__container__rightContainer__paragraph__bulletPoint"></div>
                    <h3>Valorisez vos élèves</h3>
                    <p>Récompensez vos élèves avec des tokens SAVOIR pour leur permettre de garder une trace de leurs apprentissages à vie.</p>
                </div>
                <div class="integrateMain__integrateLeftSection__container__rightContainer__paragraph">
                <div class="integrateMain__integrateLeftSection__container__rightContainer__paragraph__bulletPoint"></div>
                    <h3>Encouragez vos employés</h3>
                    <p>Mettez en avant les bénéfices de la formation entre employés au sein de l'entreprise. Améliorez l'esprit d'équipe et la communication au coeur de votre entreprise.</p>
                </div>
                <div class="integrateMain__integrateLeftSection__container__rightContainer__paragraph">
                <div class="integrateMain__integrateLeftSection__container__rightContainer__paragraph__bulletPoint"></div>
                <h3>Devenez acteur de l'économie du savoir</h3>
                <p>récoltez des statistiques sur l’influence de votre organisation ainsi que son rayonnement dans la nouvelle économie du savoir.</p>
                </div>
                <div class="integrateMain__integrateLeftSection__container__rightContainer__paragraph">
                    <div class="integrateMain__integrateLeftSection__container__rightContainer__paragraph__bulletPoint"></div>
                    <h3>Intégrez SAVOIR gratuitement avec notre aide</h3>
                    <p>Grâce à notre assistance, intégrez gratuitement notre API propriétaire afin d'automatiser la distribution de tokens à vos étudiants ou employés.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="integrateMain__integrateRightSection">
        <img src="assets/images/illustrations/knowledge_icon.svg" alt="woman thinking">
    </section>
    <section class="integrateMain__bottomSection">
         <img src="assets/images/backgrounds_landing/bluewavebg.svg" alt="background">
         <div class="bulletPoint js-mouseAnimated">
             <div class="reverseBar"></div>
         </div>
         <div class="integrateMain__bottomSection__formContainer">
             <h3 class="integrateMain__bottomSection__formContainer__formTitle">Prenez contact avec nous pour aller plus loin</h3>
             <form method="post" action="/php/sendContactMail.action.php" id="contactUs">
                <div>
                    <label for="name">Nom (personnel ou organisation)</label>
                    <input class="input light" type="text" name="name" id="name">
                    <span class="errorSpan"></span>
                </div>
                <div>
                    <label for="email" class="">Adresse mail</label>
                    <input class="input light" type="email" name="email" id="email">
                    <span class="errorSpan"></span>
                </div>
                <div>
                    <label for="text" class="">Votre intéret pour SAVOIR</label>
                    <textarea class="input light" type="text" name="text" id="textField"></textarea>
                    <span class="errorSpan"></span>
                </div>
                <div class="integrateButtonCont">
                    <button type="submit" class="primaryButton">Envoyer</button>
                </div>
             </form>
         </div>
    </section>
</main>