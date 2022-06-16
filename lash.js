const formx = document.getElementById("formx")
const input = document.querySelector("input[name='username']")
const ul = document.querySelector("#smd")
console.log(input)
formx.addEventListener("submit",function(event){
    event.preventDefault();
   
    if (input.value.trim()) {
        const li = document.createElement("li")
        const btn = document.createElement("button")
        btn.type = "button"
        btn.textContent = "delete"
        li.textContent = input.value
        ul.appendChild(li)
        li.appendChild(btn)
        function hide(evt) {
            evt.target.parentElement.remove()
            console.log(evt.target)
  };
        btn.addEventListener('click', hide, false);
    }
    console.log(event);
    console.log(input.value);   
})