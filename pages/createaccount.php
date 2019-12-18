<main class="createaccountMain background__createaccountMain">
    <section class="createaccountMain__createaccountLeftSection">
        <h2>Création de compte</h2>
        <p class="createaccountMain__createaccountLeftSection__paragraph">Pour vous créer un compte, il vous suffit 
simplement d’entrer votre nom et recevoir vos clés en
respectant les conditions suivantes :</p>
        <form id="createaccount"action="">
            <div>
                <label for="name">Nom (personnel ou organisation)</label>
                <input class="input" type="text" name="name" id="name">
                <span class="errorSpan"></span>
            </div>
            <div>
                <label for="email" class="">Adresse mail</label>
                <input class="input" type="text" name="email" id="email">
                <span class="errorSpan"></span>
            </div>
            <p>- 12 caractères<br>
- pas de caractères spéciaux (#,@…)</p>
            <div class="createaccountButtonCont">
                <button type="submit" class="primaryButton">Envoyer</button>
            </div>
        </form>
    </section>
    <section class="createaccountMain__createaccountRightSection">
        <img class="createaccountMain__createaccountRightSection__img" src="../assets/images/illustrations/illustration_createaccount.svg" alt="">
    </section>
</main> 