var danhSachVid = [
        {
            id: 1,
            ten: "Tiếng yêu này anh dịch được không?",
            duongDanAnh: "can this love.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"
        },
        {
            id: 2,
            ten: "Mai",
            duongDanAnh: "Mai.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/HXWRTGbhb4U?si=PXTh51YQKy8MO2fR"

        },
        {
            id: 3,
            ten: "Doraemon",
            duongDanAnh: "doraemon.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/ECy8UAT2tgg?si=uOQcBYSnDHVLj4K2"

        },
        {
            id: 4,
            ten: "Mùa rực rỡ của em",
            duongDanAnh: "mùa rực rỡ của em.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/xpngc71-FCc?si=-3V_szGicJvL-ZjY"

        },
        {
            id: 5,
            ten: "Adventure time",
            duongDanAnh: "adventure time.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/6r2hYdW2g0U?si=H_xvBaL10ZDknu3F"

        },
        {
            id: 6,
            ten: "Dòng máu anh hùng",
            duongDanAnh: "images1.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/2XnojnbUzbE?si=XdjduJlD4LiewCkS"

        },
        {
            id: 7,
            ten: "Adventure time",
            duongDanAnh: "images2.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"

        },
        {
            id: 8,
            ten: "Adventure time",
            duongDanAnh: "images3.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"

        },
        {
            id: 9,
            ten: "Adventure time",
            duongDanAnh: "images4.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"

        },
        {
            id: 10,
            ten: "Adventure time",
            duongDanAnh: "images5.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"

        },
        {
            id: 11,
            ten: "Adventure time",
            duongDanAnh: "images6.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"

        },
        {
            id: 12,
            ten: "Adventure time",
            duongDanAnh: "images7.jpgg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"

        },
        {
            id: 13,
            ten: "Adventure time",
            duongDanAnh: "images8.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"

        },
        {
            id: 14,
            ten: "Adventure time",
            duongDanAnh: "images9.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"

        },
        {
            id: 15,
            ten: "Adventure time",
            duongDanAnh: "images10.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"

        },
        {
            id: 16,
            ten: "Adventure time",
            duongDanAnh: "images11.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"

        },
        {
            id: 17,
            ten: "Adventure time",
            duongDanAnh: "images12.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"

        },
        {
            id: 18,
            ten: "Adventure time",
            duongDanAnh: "images13.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"

        },
        {
            id: 19,
            ten: "Adventure time",
            duongDanAnh: "images14.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"

        },
        {
            id: 20,
            ten: "Adventure time",
            duongDanAnh: "images15.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/tNZG1aLBATY?si=KzrFUt3lqicHTGF2"

        },

    ];

    function chonPhim(id){
        for (let i= 0; i < danhSachVid.length; i++){
            if(danhSachVid[i].id ==id){
                document.getElementsByClassName("video")[0].src =danhSachVid[i].duongDanYoutube
            }
        }

    }