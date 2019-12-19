<?php
$privateKeys = [
    "5J65ovX63H91SZLRYPjS82k8qrbcoDjvP1D8rSR9Hp28H7sbVWD",
    "5JVtn2HvKgTDE3E8CK4zgYpDkzTP4RHArzNLuGoyJXCMxXB5XSL",
    "5KfMLnMseVjG6zu2qD5UUiwyC8ZEkNPAQaTePy5fcNQk5bxaBBq",
    "5KgNqgNhAPNUC2CukUNHRP6CBDudH2bqDm9SV3YoyVu8f4wcgTx",
    "5Jtf8KGMf1UHfFjR9TNQiCWwAfjdDqTDPkMSpwndBQRz2vZ4Q5m",
    "5JYLHGaf9xATLT8vNejHToo6cDW6SDG7jNrFUU1hkjw2Zpc4vU1",
    "5JxCwWbd9o2BtG6ysMaLjeBoTE8WG5ZeaFCRC8xYYB1Jvg4nGTf",
    "5K8jobtBoxi368YptvtMXpc3AJu9pRSxtQw8hgaozpp39apRqsq",
    "5Jm9EGQJHdKyUZLPXURzgK4j1LwbenCTd7dZghcraJUieA671GS"
]
?>
<main class="validationMain">
    <div class="validationMain__container js-mouseAnimated">
        <img src="../assets/images/illustrations/validat.svg" alt="">
        <h2>Votre compte à bien été créé</h2>
        <h3>Voici votre clé privée, notez la bien !</h3>
        <p><?php echo $privateKeys[array_rand($privateKeys)] ?></p>
        <a href="/explorer" class="primaryButton primaryButtonValidation">Explorer SAVOIR</a>
    </div>
</main>