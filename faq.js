function show_new1(){
    var img1=document.querySelector("#plus1");
    var block1=document.querySelector(".disp1");
    block1.style.display="block";
    img1.src="icon-minus.svg";
    img1.onclick=show_new1b;

}
function show_new1b(){
    var img1=document.querySelector("#plus1");
    var block1=document.querySelector(".disp1");
    block1.style.display="none";
    img1.src="icon-plus.svg";
    img1.onclick=show_new1;

}
function show_new2(){
    var img2=document.querySelector("#plus2");
    var block2=document.querySelector(".disp2");
    block2.style.display="block";
    img2.src="icon-minus.svg";
    img2.onclick=show_new2b;
}
function show_new2b(){
    var img2=document.querySelector("#plus2");
    var block2=document.querySelector(".disp2");
    block2.style.display="none";
    img2.src="icon-plus.svg";
    img2.onclick=show_new2;
}
function show_new3(){
    var img3=document.querySelector("#plus3");
    var block3=document.querySelector(".disp3");
    block3.style.display="block";
    img3.src="icon-minus.svg";
    img3.onclick=show_new3b;
}
function show_new3b(){
    var img3=document.querySelector("#plus3");
    var block3=document.querySelector(".disp3");
    block3.style.display="none";
    img3.src="icon-plus.svg";
    img3.onclick=show_new3;
}
function show_new4(){
    var img4=document.querySelector("#plus4");
    var block4=document.querySelector(".disp4");
    block4.style.display="block";
    img4.src="icon-minus.svg";
    img4.onclick=show_new4b;
}

function show_new4b(){
    var img4=document.querySelector("#plus4");
    var block4=document.querySelector(".disp4");
    block4.style.display="none";
    img4.src="icon-plus.svg";
    img4.onclick=show_new4;
}

