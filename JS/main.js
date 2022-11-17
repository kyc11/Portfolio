// 포폴 main.js 

window.addEventListener("DOMContentLoaded",loadFn);

function loadFn(){

    console.log("로딩완료!")

    /* 왼쪽버튼 */
    const lbtn = document.querySelector(".lbtn")

    /* 오른쪽버튼 */
    const rbtn = document.querySelector(".rbtn")

    /* slide */
    const slide = document.querySelector("#slide")

    lbtn.onclick = () => {
        lbc();
    };

    function lbc(){
        console.log("왼쪽버튼")

        slide.style.left = "-100%"
        slide.style.transition = "1s"

        setTimeout(()=>{
            slide.style.left = "0"
            slide.style.transition = "none"
        },1000)
    };





}

