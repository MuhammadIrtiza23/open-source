
document.getElementById("hamwrapper").onclick = function() {
    var element = document.getElementById("navDiv");
    element.classList.toggle("navDivnew");
}
// window.addEventListener("scroll",function(){
//     var header = this.document.querySelector("img");
//     var text = this.document.querySelector("h1");

//     var value = window.scrollY;

//     header.style.top = value* 1 + 'px';
//     text.style.top = value* -4 + 'px';

// })

window.addEventListener("scroll",function(){
    var header = this.document.querySelector("#hamwrapper");
    header.classList.toggle("changebg",this.window.scrollY>0)

})