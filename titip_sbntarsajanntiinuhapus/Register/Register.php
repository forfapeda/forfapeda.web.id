


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,
    initial-scale=1.0">
    <title>REGISTER</title>
    <link rel="stylesheet" type="text/css" href="Registrasi.css">
</head>
<body>

    <div id="main">
        <img src="logoforfapeda.png">
        <h1>Register</h1>
    <div method="POST" action="function.php">
        <?php
        session_start();
        if (isset($_SESSION['username'])) {
        }
        ?>
          <input type="text" name="username" placeholder="Username"><form
          br>
                <input type="email" name="email" placeholder="Email"><br
                >
          <input type="password" name="password" placeholder="Password
          "minlength="8" maxlength="20"><br><br>
          <button type="submit" name="Register">Sign Up</button><br>
          <p>Sudah punya akun ? <a href="login.php">Kembali ke login</a
          ></p>
    </form><br>
    </div>
</body>
</html>

</body>