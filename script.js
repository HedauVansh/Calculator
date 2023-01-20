let screen = document.getElementById("display")
let button = document.querySelectorAll(".btn")
button.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let value=e.target.dataset.num;
        screen.value += value;
    })
})