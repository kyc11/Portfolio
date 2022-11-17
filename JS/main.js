// 포폴 main.js 

window.addEventListener('DOMContentLoaded',()=>{
    console.log("로딩완료!")
});

const lbtn = document.querySelector(".lbtn");

function lbc(){
    console.log("왼쪽버튼!")
}

lbtn.addEventListener("click", lbc());



