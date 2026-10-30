var danhSachVid = [
        {
            id: 1,
            ten: "Hẹn một mai",
            duongDanAnh: "images.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/pX6nutvtDnI?si=pi72yJgbyu8jr8dz"
        },
        {
            id: 2,
            ten: "SSD",
            duongDanAnh: "SSD.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/7iG_k6-iCGA?si=bbep7GBGiA-tHsr0"

        },
        {
            id: 3,
            ten: "Âm thầm bên em",
            duongDanAnh: "ATBE.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/30KI5SuECuc?si=3wO3Kvi3qiQO8Z8S"

        },
        {
            id: 4,
            ten: "Tìm em",
            duongDanAnh: "TE.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/gJAbDSse5WM?si=ORiQqjcDcA1WMcyp"

        },
    ];

    function chonBai(id){
        for (let i= 0; i < danhSachVid.length; i++){
            if(danhSachVid[i].id ==id){
                document.getElementsByClassName("video")[0].src =danhSachVid[i].duongDanYoutube
            }
        }

    }