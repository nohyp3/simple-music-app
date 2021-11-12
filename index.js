window.addEventListener('load', ()=> {
    const sounds = document.querySelectorAll(".note")
    const keys = document.querySelectorAll(".keys div")
    const visual = document.querySelector(".visuals");
    const colours = ["#60d394","#d36060","#c060b3","#d3d160","#d360c0","#7560d3","#60aed3"];
    keys.forEach((key, index) => {
        key.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createEffect(index)
        })
    })
    const createEffect = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colours[index];
        bubble.style.animation = "jump 1s ease"
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this)
        })
    }
})