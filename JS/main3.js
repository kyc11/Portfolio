// 포폴 main3.js

window.addEventListener("DOMContentLoaded",loadFn3);

function loadFn3(){
    // console.log("로딩완료 3!")

    const abab = document.querySelectorAll(".abab")

    // 5메인 전체박스
    const mibx = document.querySelector(".mibx")

    // console.log(abx)
    
    abab[0].onclick = () => goSlide(0)
    abab[1].onclick = () => goSlide(1)
    
    function goSlide(dir){
        console.log("dodo",dir)
        
        // 5메인 모든 div
        let abx = document.querySelectorAll(".mibx>div")
        
        if(dir){
            mibx.appendChild(abx[0]);
        }
        else{
            mibx.insertBefore(abx[abx.length - 1],abx[0])
        }
    }
    

        
    

    
    

}