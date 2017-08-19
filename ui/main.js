console.log('Loaded!');

//to move the image
var img=document.getElementById("click-image");
function moveRight(){
    marginRight=marginRight+10;
    img.style.marginRight=marginRight+"px";
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};