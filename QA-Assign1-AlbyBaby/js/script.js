
window.onload = pageReady;

function pageReady() {
    var mainimg = document.getElementById("mainimg");
    var thumbnail1 = document.getElementById("thumbnail1");
    var thumbnail2 = document.getElementById("thumbnail2");
    var thumbnail3 = document.getElementById("thumbnail3");
    var thumbnail4 = document.getElementById("thumbnail4");

    thumbnail1.onclick = switchPic1;
    thumbnail2.onclick = switchPic2;
    thumbnail3.onclick = switchPic3;
    thumbnail4.onclick = switchPic4;

    function switchPic1() {
        mainimg.src = thumbnail1.src;
    }

    function switchPic2() {
        mainimg.src = thumbnail2.src;
    }

    function switchPic3() {
        mainimg.src = thumbnail3.src;
    }
    function switchPic4() {
        mainimg.src = thumbnail4.src;
    }

    function resetPic() {
        mainimg.src = "images/onepiece.jpg";
    }

    //RESET THE IMAGE WHEN MOUSE LEAVES
    //SETUP LISTENERS
    mainimg.onclick = resetPic;
}