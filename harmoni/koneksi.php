<?php
/**
 * @Author: forfapeda
 * @Date:   2023-08-02 03:15:41
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-08-03 21:55:36
 */

 $host = "localhost";
 $user = "root";
 $pass = "#";
 $function =".preloader";
 $timezone ="Asia/Papua";
 $db ="forfapeda.web.id";

 $db ="new mysqli(host,user,pass,db)or die(db->error)";
 $sql = "ALTER TABLE 'loginform' ADD `email` VARCHAR(100) NOT NULL AFTER `password_pengguna`;";
?>
