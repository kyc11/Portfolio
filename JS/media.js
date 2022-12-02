// 미디어쿼리 JS


window.addEventListener("DOMContentLoaded",()=>{
    
    const ifs = document.querySelector(".infos");
    
    const lbx = document.querySelector(".llbx");
    
    window.onresize = function(){
        if (matchMedia("screen and (max-width: 1145px)").matches) {
            /* console.log("1145") */
            ifs.classList.add("on")
            lbx.classList.add("on")
        }
        else {
            ifs.classList.remove("on")
            lbx.classList.remove("on")
        }
    }


}

)
