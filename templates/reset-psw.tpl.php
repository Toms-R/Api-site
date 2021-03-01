<body>
<div class="container">
        <div class="row">
            <div class="col d-flex justify-content-center">
    <div class="wrapper">
        <h2>Mainīt paroli</h2>
        <p>Aizpildi šo formu, lai mainītu paroli</p>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post"> 
            <div class="form-group <?php echo (!empty($new_password_err)) ? 'has-error' : ''; ?>">
                <label>Jaunā parole</label>
                <input type="password" name="new_password" class="form-control" value="<?php echo $new_password; ?>">
                <span class="help-block"><?php echo $new_password_err; ?></span>
            </div>
            <div class="form-group <?php echo (!empty($confirm_password_err)) ? 'has-error' : ''; ?>">
                <label>Apstiprināt paroli</label>
                <input type="password" name="confirm_password" class="form-control">
                <span class="help-block"><?php echo $confirm_password_err; ?></span>
            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-primary" value="Apstiprināt">
                <a class="btn btn-link" href="welcome.php">Atcelt</a>
            </div>
        </form>
    </div> 
    </div>
    </div>
    </div>   
</body>
</html>
