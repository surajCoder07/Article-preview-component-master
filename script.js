let button =document.getElementById("share-icon");
let shareInfo=document.getElementById("share-info");
let box=document.getElementById("box");
let main=document.getElementById("main-text");
button.addEventListener("click",function(){
    shareInfo.classList.toggle("visible");
    box.classList.toggle("abc");
    main.classList.toggle("xyz")
})