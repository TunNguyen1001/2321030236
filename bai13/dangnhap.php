<?php
    if(isset($_POST['tenDangNhap']) && isset($_POST['matKhau'])){
        $tenDangNhap = $_POST['tenDangNhap'];
        $matKhau = $_POST['matKhau'];
    
        if($tenDangNhap == "admin" && $matKhau == "123"){
            //echo "Đăng nhập thành công";
            session_start();
            $_SESSION['dangNhapThanhCong'] = "sucses";
            header('location: index.php');
        } else {
            echo "Tên đăng nhập hoặc mật khẩu không chính xác";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        session_start();
        if(!isset($_SESSION['dangNhapThanhCong']) && !$_SESSION['dangNhapThanhCong'] == "sucses"){
            header('location: dangnhap.php');
        }
    ?>
    <h1>Trang chủ</h1>
</body>
</html>