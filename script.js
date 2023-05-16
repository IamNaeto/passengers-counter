let counter = document.querySelector(".count")
let alertInfo = document.querySelector(".info")
let increaseBtn = document.querySelector(".increase")
let decreaseBtn = document.querySelector(".decrease")
let resetBtn = document.querySelector(".reset")
let entries = document.querySelector(".entry")
let saveBtn = document.querySelector(".save")
let clearBtn = document.querySelector('.clear')
console.log(counter)
let count = 0

function increase(){
    counter.textContent = ++count
    alertInfo.innerHTML = ""
}

function decrease(){
    if(count > 0){
    counter.textContent = --count
    }else{
        alertInfo.textContent = "Minimum Count Reached!!!"
    }
}

function reset(){
    count = 0
    counter.textContent = count
    alertInfo.textContent = "";
}

let firstEntryMade = false;
function prevEntry(){
    if(firstEntryMade){
        entries.textContent += '-' + count;
    } else {
        entries.textContent += count;
        firstEntryMade = true;
    }
    reset();
}

function clearEntry(){
    entries.textContent = "";
    entries.textContent = "Previous Entries : "
    firstEntryMade = false;
}
increaseBtn.onclick = increase
decreaseBtn.onclick = decrease
resetBtn.onclick = reset
saveBtn.onclick = prevEntry
clearBtn.onclick = clearEntry