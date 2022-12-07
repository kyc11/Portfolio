// 하단 클릭이벤트 JS - main4.js //

window.addEventListener("DOMContentLoaded",()=>{
    // console.log("ff")

    const psbt = document.querySelector(".psbt")

    const sfs = document.querySelector(".sfoss")

    const psbt2 = document.querySelector(".psbt2")

    const sfs2 = document.querySelector(".sfoss2")

    

    psbt.onclick = () => sfs.classList.toggle("onn");

    psbt2.onclick = () => sfs2.classList.toggle("onn2");

})
    
        
        /* function psbtFn(){
            $(".psbt").click(()=>{
                $(".sfoss").addClass("onn")
    
                $(".psbt").click(()=>{
                    $(".sfoss").removeClass("onn")
                })
            })

        }

        // psbtFn()

        if($(".sfoss").hasClass("onn") === false){
            $(".psbt").click(()=>{
                $(".sfoss").addClass("onn")})
        }
        else if($(".sfoss").hasClass("onn") === true){
            console.log("dpdp")
            $(".psbt").click(()=>{
                $(".sfoss").removeClass("onn")})
        } */
        
        
        
        
        
        
    
        
        
    
        
    
        
    


