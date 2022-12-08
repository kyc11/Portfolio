// 포폴 main.js 

window.addEventListener("DOMContentLoaded",loadFn);

function loadFn(){

    // console.log("로딩완료!")

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

    /* 재생버튼 */
    const play = document.querySelector(".play")
    
    /* 멈춤버튼 */
    const stop = document.querySelector(".stop2")



    /* 오른쪽버튼 클릭시 실행 */
    rbtn.onclick = () => {
        rbc();
    };

    /* 오른쪽버튼 클릭시 함수 */
    function rbc(){
        // console.log("오른쪽버튼")

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
        
        chgIndic(1);

        play.click();

        setTimeout(() => {
            clearAuto();
            stop.click()
        },1000);

        

    };





    /* 왼쪽버튼 클릭시 실행 */
    lbtn.onclick = () => {
        lbc();
    };

    /* 왼쪽버튼 클릭시 함수 */
    function lbc(){
        // console.log("왼쪽버튼")

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

        chgIndic(0);

        play.click(); 
        
        setTimeout(() => {
            clearAuto();
            stop.click();
        },1000);
    
    }




    /* 순번찍기 페이지표시 */
    const chgIndic = (idx) => {
        // idx - 대상슬라이드 순번
        // 1. 현재 슬라이드 순번 알아오기!
        // cseq -> current sequence number(현재 순번)
        let pnum = slide
            .querySelectorAll("div")
            [idx] // 대상 div
            .getAttribute("data-seq"); // "data-seq"속성값
        // getAttribute(속성명) -> 속성값 읽어오는 JS내장함수

        if(pnum == 1){
            ppnum.innerHTML = "1"
        }
        else if(pnum == 2){
            ppnum.innerHTML = "2"
        }
        else if(pnum == 3){
            ppnum.innerHTML = "3"
        }
        else if(pnum == 4){
            ppnum.innerHTML = "4"
        }
        else if(pnum == 5){
            ppnum.innerHTML = "5"
        }
        
        // console.log("순번:",pnum);
    }

        function pf(){
            play.onclick = () => {
                // console.log("pf")
                play.classList.add("on")
                stop.classList.remove("on")
                clearAuto()
            }
        }
        
            
        function sf(){
            stop.onclick = () => {
                // console.log("sf")
                stop.classList.add("on")
                play.classList.remove("on")
                slideAuto()
            }
        }
        
        pf();

        sf();
    
    
    

    let autoI;
    // 타임아웃용 변수
    let autoT;

    // 자동넘기기 /////
    // 인터발함수를 지우려면 변수에 넣고
    // clearInterval(변수) 해야함!!!

    /******************************* 
        함수명: slideAuto
        기능: 슬라이드 인터발 호출
    *******************************/
    function slideAuto() {
        autoI = setInterval(() => {
            // 오른쪽버튼 클릭시 이동코드와 동일함!!! /////////
            slide.style.left = "-100%";
            slide.style.transition = "1s ease-in-out";
            // 1초후 맨앞li 잘라서 맨뒤로 이동!
            setTimeout(() => {
                // 1. 맨앞li 잘라서 맨뒤로 이동!
                slide.appendChild(slide.querySelectorAll("div")[0]);
                // 2. left값 0으로 초기화!
                slide.style.left = "0";
                /* 3. 트랜지션 없애기 */
                slide.style.transition = "none";
            }, 1000);

            // 블릿변경함수 호출!
            // -> 오른쪽버튼은 두번째 슬라이드가 주인공!
            chgIndic(1);
            ///////////////////////////////////////////
        }, 3000);
    } //////// slideAuto 함수 //////////

    // 인터발함수 최초호출!
    slideAuto();

    /*********************************** 
        함수명: clearAuto
        기능: 인터발지우기,타임아웃셋팅
    ***********************************/
    function clearAuto() {
        // console.log("인터발지워!!!");
        // 1. 인터발 지우기
        clearInterval(autoI);
        // 2. 타임아웃 지우기(실행쓰나미 방지!)
        clearTimeout(autoT);
    } /////// clearAuto함수 ////////

}