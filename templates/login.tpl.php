<body>
    <div class="container">
        <div class="row">
            <div class="col d-flex justify-content-center">
                <div class="wrapper">
        <h2>Pievienoties</h2>
        <p>Aizpildi visus laukus!</p>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <div class="form-group <?php echo (!empty($username_err)) ? 'has-error' : ''; ?>">
                <label>Lietotājvārds</label>
                <input type="text" name="username" class="form-control" value="<?php echo $username; ?>">
                <span class="help-block"><?php echo $username_err; ?></span>
            </div>
            <div class="form-group <?php echo (!empty($password_err)) ? 'has-error' : ''; ?>">
                <label>Parole</label>
                <input type="password" name="password" class="form-control">
                <span class="help-block"><?php echo $password_err; ?></span>
            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-primary" value="Ienākt">
            </div>
            <p>Nav profils? Reģistrējies: <a href="register.php">Pievienojies tagad</a>.</p>
            <a href="index.html">Uz sākumu</a>
        </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
