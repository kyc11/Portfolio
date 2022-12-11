// 미디어쿼리 JS


window.addEventListener("DOMContentLoaded",()=>{

    const cull = document.querySelector(".cull")
    
    const bg31 = document.querySelector(".bg31")

    const bg32 = document.querySelector(".bg32")

    const c1 = document.querySelector(".c1")

    const c2 = document.querySelector(".c2")

    const c3 = document.querySelector(".c3")

    const c4 = document.querySelector(".c4")

    const lbx = document.querySelector(".lbx2")
    
    
    window.onresize = function(){
        // document.location.reload();
        if(matchMedia("screen and (max-width: 580px)").matches){
            // console.log("580");
            c2.classList.add("on")
            c4.classList.add("on")
        }
        else if(matchMedia("screen and (max-width: 750px)").matches){
            // console.log("750")
            lbx.classList.add("on")
        }
        else if(matchMedia("screen and (max-width: 800px)").matches){
            // console.log("800")
            bg31.classList.add("on")
            c1.classList.add("on");
            c3.classList.add("on");
        }
        else{
            // console.log(">800");
            bg31.classList.remove("on")
            c1.classList.remove("on")
            c2.classList.remove("on")
            c3.classList.remove("on")
            c4.classList.remove("on")
            lbx.classList.remove("on")
        }
    };
    
    

}

)
