<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width, initial-scale=1.0">
    <title>Bài 12-php</title>
</head>
<body>
    <?php
      //Code php viết ở đây
      // In ra màn hình dùng echo
      echo "Hello world  <br>";
      
      // Biến $Tên biến = giá trị
      $hoTen = "Văn Tuân ";
      $tuoi = 21;

      // Nối chuỗi .
      echo $hoTen . " " . $tuoi . "tuổi";

      $soThuNhat = 10;
      $soThuHai = 5;

      //+ - / %
      $ketQua = $soThuNhat + $soThuHai;
      echo $ketQua;

      // += -= /= %=
      $soThuNhat+=$soThuHai;
      echo $soThuNhat;

      $diem = 5;
      if($diem < 4 ){
        echo "F";
      }
      elseif($diem >= 4 && $diem <5 ){
        echo " D ";
      }
      elseif($diem >= 5 && $diem <7 ){
        echo " C ";
      }
      elseif($diem >= 7 && $diem <8 ){
        echo " B ";
      }
      else{
        echo "A";
      }
      //8. switch case 
      $color = " blue ";
      switch($color){
         case "red":
           echo "<br>";
           echo "ISr>";
           echo "IS BLUE";
           break;
        default:
           echo "<br>";
           echo "no color";
           break;
      }
        for ($i = 0; $i < 100 ; $i++ ){
            echo $i . "<br>";
        }


    ?>
</body>
</html>