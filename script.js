const counter = document.querySelector(".count")
const alertInfo = document.querySelector(".info")
const increaseBtn = document.querySelector(".increase")
const decreaseBtn = document.querySelector(".decrease")
const resetBtn = document.querySelector(".reset")
const entries = document.querySelector(".entry")
const saveBtn = document.querySelector(".save")
const clearBtn = document.querySelector('.clear')

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
    entries.textContent = "Saved Entries : "
    firstEntryMade = false;
}

increaseBtn.onclick = increase
decreaseBtn.onclick = decrease
resetBtn.onclick = reset
saveBtn.onclick = prevEntry
clearBtn.onclick = clearEntry