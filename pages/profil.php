<div class="js-overflowProfil">
    <div class="greyFilter js-grey-filter invisible"></div>
    <!-- H1 -->
    <h1>Le profil d'un utilisateur de SAVOIR</h1>
    <!-- Profil -->
    <main class="profilMain">
        <!-- Name -->
        <div class="profilMain__info">
            <h2 class="profilMain__info__name"></h2>
            <h3 class="profilMain__info__sorNumber"></h3>
        </div>
        <div class="profilMain__savoirs">
            <div class="profilMain__savoirs__title">
                <h3 class="profilMain__savoirs__title__name">Les savoirs de Nicolas</h3>
            </div>
            <!-- Specificity -->
            <div class="profilMain__savoirs__specificity">
                <ul class="profilMain__savoirs__specificity__list">
                </ul>
            </div>
        </div>
        <!-- Profil detail -->
        <div class="center js-detail-window invisible">
            <div class="profilMain__detail">
                <div class="profilMain__detail__background"></div>
                <div class="profilMain__detail__closeButton js-close-button">Close</div>
                <div class="profilMain__detail__info">
                    <div class="profilMain__detail__info__name">
                        <h2 class="profilMain__detail__info__name__specName">Dev Web</h2>
                        <div class="profilMain__detail__info__name__userName">Nicolas Decreton</div>
                    </div>
                    <div class="profilMain__detail__info__number">80 SOR</div>
                </div>
                <div class="profilMain__detail__token">
                    <div class="profilMain__detail__token__title">
                        <h3 class="profilMain__detail__token__title__specName light">Savoirs “Dev Web”</h3>
                    </div>
                    <ul class="profilMain__detail__token__list">
                    </ul>
                </div>
            </div>
        </div>
    </main>
</div>
<script>
    const userAccount = '<?php echo $_GET['a'] ?>'
</script>