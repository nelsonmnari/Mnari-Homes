const input = document.querySelector("input"),
            h5 = document.querySelector("h5");

 h5.innerHTML = localStorage.getItem('value')

input.addEventListener("keyup", display);

function display(){
    localStorage.setItem('value', input.value)
   h5.innerHTML = localStorage.getItem('value')
}

document.getElementById("bet").onclick = function() {
    window.location.href = "http://127.0.0.1:5500/image.html"
}