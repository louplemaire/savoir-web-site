<main class="createaccountMain background__createaccountMain">
    <section class="createaccountMain__createaccountLeftSection js-mouseAnimated">
        <h2>Rejoindre SAVOIR en 20 secondes</h2>
        <p class="createaccountMain__createaccountLeftSection__paragraph">
            Choisissez un nom de compte et saisissez votre adresse mail et c'est parti ! Un wallet sécurisé sera automatiquement généré pour vous et votre clée privée vous sera attribué.
        </p>
        <form id="createaccount" action="/confirmation_nouveau_compte">
            <div class="inputParent">
                <label for="name">Nom (personnel ou organisation)</label>
                <input class="input" type="text" name="name" id="name">
                <p class="secondary">
                    12 caractères et pas de caractères spéciaux (#,@…)
                </p>
                <span class="errorSpan"></span>
            </div>
            <div class="inputParent">
                <label for="email" class="">Adresse mail</label>
                <input class="input largeInput" type="text" name="email" id="email">
                <span class="errorSpan"></span>
            </div>
            <div class="createaccountButtonCont">
                <button type="submit" class="primaryButton">Envoyer</button>
            </div>
        </form>
    </section>
    <section class="createaccountMain__createaccountRightSection">
        <img class="createaccountMain__createaccountRightSection__img" src="../assets/images/illustrations/illustration_createaccount.svg" alt="">
    </section>
</main> 