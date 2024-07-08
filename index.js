var header2=document.getElementById("header2");
var header1=document.getElementById("header1");
var images=document.getElementsByClassName("image");
let leftPos = -530;
let topPos=-65;
let fntSize=10;
let angle1=-12.76;
let angle2=0;
function stepTop(){
    topPos+=1;
    if(topPos==0){
        return;
    }
    else{
        header2.style.top=topPos+"px";
    }
    requestAnimationFrame(stepTop);
}
requestAnimationFrame(stepTop);

setTimeout(function stepBig(){
    fntSize+=1;
    if(fntSize==20){
        return;
    }
    else{
        header2.style.fontSize=fntSize+"px";
    }
    requestAnimationFrame(stepBig);
},
800);

setTimeout(function stepLeft(){
    leftPos+=2;
    if(leftPos==0){
        return;
    }
    else{
        header1.style.marginLeft=leftPos+"px";
    }
    requestAnimationFrame(stepLeft);
},
1000);

setTimeout(function rotate(){
    angle1-=2;
    angle2+=2;
    if(angle1==-48.76||angle2>=50.76){
        return;
    }
    else{
        images.item(0).style.transform= 'rotate(' + angle1 + 'deg)';
        images.item(2).style.transform= 'rotate(' + angle1 + 'deg)';
        images.item(1).style.transform= 'rotate(' + angle2 + 'deg)';
        images.item(3).style.transform= 'rotate(' + angle2 + 'deg)';
    }
    requestAnimationFrame(rotate);
},
3300);

setTimeout(function rotateBack(){
    angle1+=2;
    angle2-=2;
    if(angle1==0||angle2==0){
        return;
    }
    else{
        images.item(0).style.transform= 'rotate(' + angle1 + 'deg)';
        images.item(2).style.transform= 'rotate(' + angle1 + 'deg)';
        images.item(1).style.transform= 'rotate(' + angle2 + 'deg)';
        images.item(3).style.transform= 'rotate(' + angle2 + 'deg)';
    }
    requestAnimationFrame(rotateBack);
},
3750);