const myInput = document.querySelector('input:first-child');
const myInput2 = document.querySelector('input[type="checkbox"]');
const button = document.querySelector('button');
const button2 = document.querySelector('button:nth-child(3)');
const hidden = document.querySelector("h1");
const mySelected = document.querySelector('select');
const content = document.getElementsByClassName('content');
const modal = document.querySelector('.modal');
const form = document.querySelector('form');
const nameForm = document.getElementById('name');
// for (let i = 0; i < button.length; i++) {
//     button[i].onclick = function(e){
//         console.log(e.target.innerText);
//     }
// }

form.onsubmit = function(e){
    if(!nameForm.value.length) {
        console.log("hi");
        e.preventDefault();
    }
}

console.log(content[0]);

mySelected.onchange = function(e){
    console.log(e.target.value);
}

document.onkeyup = function(e){
    if(e.which === 27){
        
        modal.classList.remove('show');
    }
}

button2.onclick = function(e){
    modal.classList.add('show');
}
const getData = () =>{
    const store = myInput.value;
    const store2 = myInput2.checked;
    console.log(store2);    
}

button.onclick = getData;