<body>
<div class="container">
        <div class="row">
            <div class="col header-top">
                <a href="logout.php">Iziet</a>
                <a href="reset-password.php">Mainīt paroli</a>
            </div>
            </div>
            <div class="row">
                <div class="col">
                <h1>Sveiki, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b>.</h1>
                </div>
            </div>
    </div>


    <script src="assets/scripts.js"></script>
</body>
</html>
