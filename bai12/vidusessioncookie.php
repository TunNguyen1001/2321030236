<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    // 1. Session
    

    // 2. Cookie
    $cookie_name = "user";
    $cookie_value = "Văn Tuân";

    setcookie($cookieName, $cookieValue, time() + 86400, "/"); 
    if(isset($_COOKIE[$cookieName])){
        echo "Cookie đã tồn tại";
    }else{
        echo "Cookie chưa được thiết lập";
    }
</body>
</html>