// HOT KEYWORD 부분 클릭 JS
window.addEventListener("DOMContentLoaded",()=>{
    
    const fb = document.querySelector(".fcbx")

    const fb2 = document.querySelector(".fcbx2")

    const fb3 = document.querySelector(".fcbx3")

    const fb4 = document.querySelector(".fcbx4")

    const fb5 = document.querySelector(".fcbx5")
    
    const fb6 = document.querySelector(".fcbx6")

    const fbp = document.querySelector(".fcp")

    const fbp2 = document.querySelector(".fcp2")

    const fbp3 = document.querySelector(".fcp3")

    const fbp4 = document.querySelector(".fcp4")

    const fbp5 = document.querySelector(".fcp5")

    const fbp6 = document.querySelector(".fcp6")


    fb.onclick = () => {
        fb.classList.toggle("on2")
        fbp.classList.toggle("on3")
    }

    fb2.onclick = () => {
        fb2.classList.toggle("on2")
        fbp2.classList.toggle("on3")
    }

    fb3.onclick = () => {
        fb3.classList.toggle("on2")
        fbp3.classList.toggle("on3")
    }

    fb4.onclick = () => {
        fb4.classList.toggle("on2")
        fbp4.classList.toggle("on3")
    }

    fb5.onclick = () => {
        fb5.classList.toggle("on2")
        fbp5.classList.toggle("on3")
    }

    fb6.onclick = () => {
        fb6.classList.toggle("on2")
        fbp6.classList.toggle("on3")
    }

    

    
})