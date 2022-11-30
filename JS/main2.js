// 포폴 main2.js

window.addEventListener("DOMContentLoaded", loadFn2);

function loadFn2(){

    // console.log("로딩완료!2");

    /* #slide2 li f */
    const l1 = document.querySelector(".b2g1");

    /* #slide2 li s */
    const l2 = document.querySelector(".b2g2");

    /* #slide2 li t */
    const l3 = document.querySelector(".b2g3");
    
        !function slide2auto(){
        l1.style.opacity = 1;
        setTimeout(() => {
            l1.style.opacity = 0;
            l2.style.opacity = 1;
        }, 3000);
        setTimeout(() => {
            l2.style.opacity = 0;
            l3.style.opacity = 1;
        }, 6000);
        setTimeout(() => {
            l3.style.opacity = 0;
        }, 9000);
        setTimeout(function() {
           slide2auto();
        }, 9000);
     }()
    
    function dd(){
        console.log("l1");
    };
}; //////////////////