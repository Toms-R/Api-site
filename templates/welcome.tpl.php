<body>

<div class="container">
    <div class="row">
        <div class="col header-top">
            <a href="logout.php">Iziet</a>
            <a href="reset-password.php">Mainīt paroli</a>
        </div>
    </div>
</div>
<div class="container">
            <div class="row">
                <div class="col">
                <h1>Sveiki, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b>.</h1>
                </div>
            </div>
    </div>
<div class="container">
    <div class="row">
        <div class="col">
            <div class="vac-data">
                <h3>Kopā vakcinēti: <span id="vaccinated"></span> cilvēki.</h3>
                <h3>Kopā testēti: <span id="tested"></span> cilvēki.</h3>
                <h3>Dienas līdz 70% būs savakcinēti <span id="safety-days"></span></h3>
            </div>
        </div>
    </div>
</div>


    <script src="assets/scripts.js"></script>
</body>
</html>
