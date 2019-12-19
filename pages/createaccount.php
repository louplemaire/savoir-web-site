<main class="createaccountMain background__createaccountMain">
    <section class="createaccountMain__createaccountLeftSection">
        <h2>Rejoindre SAVOIR en 20 secondes</h2>
        <p class="createaccountMain__createaccountLeftSection__paragraph">Pour vous créer un compte, il vous suffit 
simplement d’entrer votre nom et recevoir vos clés en
respectant les conditions suivantes :</p>
        <form id="createaccount" action="/validationcreateaccount">
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
                <input class="input" type="text" name="email" id="email">
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