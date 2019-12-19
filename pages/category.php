<main class="exploreMain">
    <!-- H1 -->
    <h1>Retrouver les catégories de SAVOIR.</h1>
    <!-- Explorer -->
    <div class="exploreMain__exploreContainer">
        <div class="exploreMain__exploreContainer__explorer">
            <input class="exploreMain__exploreContainer__explorer__researcher js-researcher" type="text" value='<?php echo $_GET["c"] ?>' placeholder="Recherchez un utilisateur ou une catégorie de savoir…">
            <div class="exploreMain__exploreContainer__explorer__subResearcher js-subResearcher">
                <ul class="exploreMain__exploreContainer__explorer__subResearcher__list js-subResearcher-list-categories js-subResearcher-list invisible"></ul>
                <ul class="exploreMain__exploreContainer__explorer__subResearcher__list js-subResearcher-list-users js-subResearcher-list invisible"></ul>
            </div>
        </div>
    </div>
    <!-- Traffic-->
    <div class="exploreMain__searchTraffic">
        <h3 class="exploreMain__searchTraffic__title light"></h3>
        <div class="exploreMain__searchTraffic__traffic">
            <ul class="exploreMain__searchTraffic__traffic__list">
            </ul>
        </div>
    </div>
</main>
<script>
    const searchedCategory = '<?php echo $_GET["c"] ?>'
</script>


