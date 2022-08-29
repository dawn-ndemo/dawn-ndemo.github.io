let scrollbutton = document.getElementById("btn-back-to-top");
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollbutton.style.display = "block";
    } else {
        scrollbutton.style.display = 'none';
    }
}

scrollbutton.addEventListener("click", backToTop);
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}