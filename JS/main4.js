// 하단 클릭이벤트 JS - main4.js //

window.addEventListener("DOMContentLoaded",loadFn4);

function loadFn4(){
    // console.log("ㅇㅇ")

    // 누를곳
    const psbt = document.querySelector(".psbt")

    // 누를곳 2
    const psbt2 = document.querySelector(".psbt2")

    // 나오는 곳
    const sfs = document.querySelector(".sfoss")

    // 나오는 곳 2
    const sfs2 = document.querySelector(".sfoss2")

    let nnum = 0

    
    function pffo(){
        if(nnum===0){
            psbt.onclick = () => {
                sfs.classList.add("onn");
                nnum = 1
                console.log(nnum)
            }
        }
        console.log(nnum)
    }
    
    

    function pffo2(){
        if(nnum===1){
            psbt.onclick = () => {
                sfs.classList.remove("onn");
                nnum = 0
                console.log(nnum)
            }
        }
    }
    
    pffo();

    pffo2();

    
    

    

    psbt2.onclick = () => {
        // console.log("dqwdqw2")
        sfs2.classList.add("onn2")

    }
    
}