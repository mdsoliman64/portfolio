
/////////////////////////   Paralox animation ////////////////////////
document.addEventListener("mousemove",paralox);
function paralox(e){
    document.querySelectorAll(".object").forEach(function(move){
        
        
        var movingValue = move.getAttribute("data-value");
        var x = (e.clientX*movingValue)/200;
        var y = (e.clientY * movingValue)/200;
        
        move.style.transform="translateX(" + x +"px) translateY("+ y +"px)";
    });
}

//////////////////////// Scrolling Animation ///////////////////////////////////////////
document.addEventListener("scroll",scrolling);

function scrolling(event){

    console.log(document.documentElement.scrollTop);
    const Number = Math.floor(document.documentElement.scrollTop/100);
    console.log(typeof Number + Number);

    console.log("height:"+window.innerHeight);
    console.log("widtgh:"+window.innerWidth);

if(window.innerWidth > 998){


    switch(true){
        case (Number>10 && Number<18):
            $(".skills").removeClass('animation');
            $(".skills").addClass('animationx');
            $(".profile").removeClass('animationx');
            $(".profile").addClass('animation');
            break;
    
       
        case (Number>4 && Number<8):
                    $(".skills").addClass('animation');
                    $(".skills").removeClass('animationx');
                    $(".profile").addClass('animationx');
                    $(".profile").removeClass('animation');
                    break;
      case ( Number>18):
                        $(".skills").addClass('animation');
                        $(".skills").removeClass('animationx');
                       
                        break;
        case (Number<4):
                           
                            $(".profile").removeClass('animationx');
                            $(".profile").addClass('animation');
                            break;
    
    }}
else{

$(".profile").removeClass("animation");
$(".skills").removeClass("animation")





}    


}
   