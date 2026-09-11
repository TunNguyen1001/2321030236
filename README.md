 <div>
                <table border="2">
                    <caption>a.Bảng quy đổi giũa xét tuyển theo học bạ và xét tuyển theo kết quả thi THPT</caption>
                    <!-- hang 1-->
                    <tr>
                        <th rowspan="2"></th>
                        <th colspan="2">Điểm thi THPT</th>
                        <th colspan="2">Điểm HB THPT</th>
                        <th></th>   
                    </tr>
                    <!-- hang 2-->
                     <tr>  
                        <td>c</td>
                        <td>d</td>
                        <td>a</td>
                        <td>b</td>
                        </tr>
                <!-- hang 3-->
                    <tr>
                        <td>Khoảng 1</td>
                        <td>27,5</td>
                        <td>30</td>
                        <td>29</td>
                        <td>30</td>
                        </tr>
                <!-- hang 4-->
                    <tr>
                        <td>Khoảng 2</td>
                        <td>22,5</td>
                        <td>27,5</td>
                        <td>24,5</td>
                        <td>29</td>
                    </tr>
                    <!-- hang 5-->
                     <tr>
                        <td>Khoảng 3</td>
                        <td>20</td>
                        <td>22,5</td>
                        <td>22</td>
                        <td>24,5</td>
                        </tr>
                        <!-- hang 6-->
                    <tr>
                        <td>Khoảng 4</td>
                        <td>17,5</td>
                        <td>20</td>
                        <td>20</td>
                        <td>22</td>
                        </tr>
                        <!-- hang 7-->
                    <tr>
                        <td>Khoảng 5</td>
                        <td>15</td>
                        <td>17,5</td>
                        <td>18</td>
                        <td>20</td>
                    </tr>
                </table>
                </div> 


                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Style</title>
    <style>
        h2 {
            color: pink;
            background-color: black;
        }
        
    </style>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!--Cách 1: Inline Style-->
    <!--color: quy định màu chữ-->
    <!--background quy định màu nền-->
    <h1 style="color: rgb(18, 18, 127); background-color: rgb(244, 255, 35)">Bài Style</h1>
    <!--Cách 2: Internal Style-->
    <h2>Cách 2: Internal Style</h2>
    <!--Cách 3: External Style-->
    <h3>Cách 3: External Style</h3> 
</body>
</html>







<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        a{
            
        }
        main {
            display: flex;
        }
    
    
        .khoi-trai{
            background-color:rgb(255, 255, 255);
            width: 20%;
            height: 1000px;
        
        /* để vẽ viền dùng boder
        border sẽ có 3 tham số (độ dày - loại đường viền - màu sắc) */
        border-right: 3px solid rgb(85, 79, 250);
        }

        .khoi-dang-nhap {
            width: 90%;
            height: 300px;
            /* nếu margin để auto sẽ căn đối tượng vào giữa */
            margin: 10 auto;
        }

        .quen-mk {
            display: flex;
            justify-content: flex-end;
        }


        .khoi-phai{
            background-color: rgb(255, 255, 255);
            width: 80%;
            height: 1000px;
        }


        .menu{
            background-color: rgb(6, 185, 245);
            padding: 2px;
        }
        .danh-sach-muc{
            list-style-type: none;
            display: flex;
            justify-content: space-around;
            align-items: center;
            
        }
        .muc{
            color: white;
            font-size: 20px;
        }
    </style>
    <title>Thực hành trang Đào Tạo</title>
    
</head>
<body>
    <!--Thanh menu-->
        <nav class="menu">
            <ul class="danh-sach-muc">
                <li class="muc">Thực tập, Đồ án</li>
                <li class="muc">Thủ tục Một cửa</li>
                <li class="muc">Một cửa online</li>
                <li class="muc">E-maill HUMG</li>
                <li class="muc">Quy chế, Quy định</li>
            </ul>
        </nav>
        <!-- Nội dung chính -->
        <main>
            <div class="khoi-trai">
                <h1></h1>
            </div>
            <div class="khoi-phai">
                <h1></h1>
                </div>
        </main>

            
            
</body>
</html>