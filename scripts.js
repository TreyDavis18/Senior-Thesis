window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        document.getElementById("implicationBinary").style.fontSize = "0px";
    }
    else {
        document.getElementById("implicationText").style.fontSize = "35px";
    }
}
