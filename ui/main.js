console.log('Loaded!');

var img= document.getElementById("madi");

var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+5;
    if(marginLeft<=550)
    img.style.marginLeft = marginLeft+"px";
}

    var interval= setInterval(moveRight, 50);
