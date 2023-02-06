const input = document.getElementById('input');
const total = document.getElementById('total');
const remaining = document.getElementById('remaining');

input.addEventListener("keyup", ()=>{
    update()
})

function update() {
   total.innerText = input.value.length;
   remaining.innerText = input.getAttribute('maxlength') - input.value.length;
}

