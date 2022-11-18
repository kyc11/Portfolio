// 포폴 main.js 

window.addEventListener("DOMContentLoaded",loadFn);

function loadFn(){

    console.log("로딩완료!")

    /* 잠금변수 */
    let prot = 0;

    /* 왼쪽버튼 */
    const lbtn = document.querySelector(".lbtn")

    /* 오른쪽버튼 */
    const rbtn = document.querySelector(".rbtn")

    /* slide */
    const slide = document.querySelector("#slide")

    /* 페이지 숫자 */
    const ppnum = document.querySelector(".pnum")
    




    /* 오른쪽버튼 클릭시 실행 */
    rbtn.onclick = () => {
        rbc();
    };

    /* 오른쪽버튼 클릭시 함수 */
    function rbc(){
        console.log("오른쪽버튼")

        if(prot)return;
        prot = 1;
        setTimeout(() => prot=0,1000);

        slide.style.left = "-100%"
        slide.style.transition = "1s ease-in-out"

        setTimeout(()=>{
            slide.appendChild(slide.querySelectorAll("div")[0])
            slide.style.left = "0"
            slide.style.transition = "none"
        },1000)
        
        pnum(1);
        
        
    };





    /* 왼쪽버튼 클릭시 실행 */
    lbtn.onclick = () => {
        lbc();
    };

    /* 왼쪽버튼 클릭시 함수 */
    function lbc(){
        console.log("왼쪽버튼")

        if(prot)return;
        prot = 1;
        setTimeout(() => prot=0,1000);

        let cli = slide.querySelectorAll("div");
        slide.insertBefore(cli[cli.length-1],cli[0]);

        slide.style.left = "-100%";
        slide.style.transition = "none";

        setTimeout(() => {
            slide.style.left = "0";
            slide.style.transition = "1s ease-in-out";
        }, 10);

        pnum(0);
    }




    /* 순번찍기 */
    const pnum = idx => {
        let pnum2 = slide.querySelectorAll("div")[idx]
        .getAttribute("data-seq")

        if(pnum2 == 1){
            ppnum.innerHTML = "1"
        }
        else if(pnum2 == 2){
            ppnum.innerHTML = "2"
        }
        else if(pnum2 == 3){
            ppnum.innerHTML = "3"
        }
        else if(pnum2 == 4){
            ppnum.innerHTML = "4"
        }
        else if(pnum2 == 5){
            ppnum.innerHTML = "5"
        }
        
        console.log(pnum2)
    }


    /* 페이지번호 표시 */
    

}