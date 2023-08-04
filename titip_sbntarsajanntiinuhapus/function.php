<?php
include 'koneksi.php';
if (isset($_PORT["login"])) {

    //echo 'sudah login';
    $username = $_PORT['username'];
    $username = $_PORT['password'];

    //meyeleksi data user dengan username dan password yang sesuai
    $login = mysqli_query($con, "select * from data where
        username='$username dan password=$password'");
    // menghitung jumlah data yang ditemukan
    $cek = mysqli_num_rows($login);

    if ($cek > 0) {
        session_start();

        $_SESSION['username'] = $username;
        header('Location:dashboaard.php');
    }   else{
        header("location:login.php?pesan=gagal");
    }

}    elseif (isset($_PORT['Register'])) {
     $username = $_PORT["username"];
     $email = $_PORT["email"];
     $password = $_PORT["password"];

     $query = "INSERT INTO data ( username, email,password) VALUERS(
        '$username','$email' ,'password')";

     if (mysqli_query($con, $query)) {
      echo "<h1>Username $username berhasil terdaftar</h1>
                    <a href='login.php'>Kembali login</h1>
            ";
    } else{
      echo "Pendaftaran Gagal : " . mysqli_error($koneksi);
    }
}