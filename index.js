
/////////////////////////////////////////////////
document.addEventListener("mousemove",paralox);
function paralox(e){
    document.querySelectorAll(".object").forEach(function(move){
        
        
        var movingValue = move.getAttribute("data-value");
        var x = (e.clientX*movingValue)/200;
        var y = (e.clientY * movingValue)/200;
        
        move.style.transform="translateX(" + x +"px) translateY("+ y +"px)";
    });
}